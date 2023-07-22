require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER; // Get the Twilio WhatsApp number from .env
const client = twilio(accountSid, authToken);

exports.sendMessage = (req, res) => {
  const { message, to } = req.body;

  if (!message || !to) {
    return res.status(400).json({ error: 'Message and To (WhatsApp number) must be provided.' });
  }

  const whatsappMessage = message;

  client.messages
    .create({
      body: whatsappMessage,
      from: fromNumber, // Use Twilio sandbox number from .env
      to: `whatsapp:${to}`
    })
    .then(() => {
      res.redirect('/?success=true'); // Redirect with success query parameter
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to send WhatsApp message.', details: error.message });
    });
};

exports.getConversation = (req, res) => {
  const { phoneNumber } = req.params;

  client.messages
    .list({
      from: `whatsapp:${phoneNumber}`, // The WhatsApp number you want to get the conversation from
      limit: 50 // You can adjust the limit based on your requirements
    })
    .then((messages) => {
      res.status(200).json({ messages });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch conversation.', details: error.message });
    });
};

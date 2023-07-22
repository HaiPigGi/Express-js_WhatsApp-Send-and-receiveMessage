// receiveMessageController.js

exports.receiveMessage = (req, res) => {
    const { From, Body } = req.body;
  
    if (!From || !Body) {
      return res.status(400).send('From (WhatsApp number) and Body must be provided.');
    }
  
    // Process the incoming WhatsApp message here (you can add your custom logic)
    // For example, you can log the incoming message
    console.log(`Received a message from ${From}: ${Body}`);
  
    // Send a response (optional) to acknowledge the receipt of the message
    const responseMessage = 'Thank you for your message! We have received it.';
    client.messages
      .create({
        body: responseMessage,
        from: fromNumber,
        to: `whatsapp:${From}`
      })
      .then(() => {
        // Fetch the conversation data and extract message bodies
        client.messages.list({ to: `whatsapp:${From}` })
          .then((messages) => {
            const messageBodies = messages.map((message) => message.body);
            res.render('conversation', { messages: messageBodies });
          })
          .catch((error) => {
            res.status(500).send('Failed to fetch conversation.');
          });
      })
      .catch((error) => {
        res.status(500).send('Failed to send WhatsApp response.');
      });
  };

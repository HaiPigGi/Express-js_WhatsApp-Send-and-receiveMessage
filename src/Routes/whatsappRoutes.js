const express = require('express');
const router = express.Router();
const whatsappController = require('../Controller/WhatsAppContoller.js');

// Route to send WhatsApp messages
router.post('/send', whatsappController.sendMessage);

// Route to get WhatsApp conversation
router.get('/conversation/:phoneNumber', whatsappController.getConversation);

module.exports = router;

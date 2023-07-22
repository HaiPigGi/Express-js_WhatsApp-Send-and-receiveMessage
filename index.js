const express = require('express');
const bodyParser = require('body-parser');
const whatsappRoutes = require('./src/Routes/whatsappRoutes.js');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set views directory and view engine to EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to render index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/whatsapp', whatsappRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

const express = require('express');
const router = express.Router();

// In-memory settings store (replace with DB in production)
let tariffSettings = {
  price: '10.99',
  message: 'Prepay your tariffs now to avoid unexpected charges and delays at customs. Guaranteed hassle-free delivery.'
};

// GET current settings
router.get('/', (req, res) => {
  res.json(tariffSettings);
});

// POST/PUT update settings
router.post('/', (req, res) => {
  const { price, message } = req.body;
  if (price !== undefined) tariffSettings.price = price;
  if (message !== undefined) tariffSettings.message = message;
  res.json({ success: true, settings: tariffSettings });
});

module.exports = router; 
const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// Route to get all stock items
router.get('/', stockController.getAllStocks);

// Route to get a single stock item by ID
router.get('/:id', stockController.getStockById);

// Route to create a new stock item
router.post('/', stockController.createStock);

// Route to update an existing stock item
router.put('/:id', stockController.updateStock);

// Route to delete a stock item
router.delete('/:id', stockController.deleteStock);

module.exports = router;
const Stock = require('../models/Stock');

// Get all stock items
exports.getAllStock = async (req, res) => {
    try {
        const stockItems = await Stock.find();
        res.status(200).json(stockItems);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stock items', error });
    }
};

// Add a new stock item
exports.addStockItem = async (req, res) => {
    const newStockItem = new Stock(req.body);
    try {
        const savedItem = await newStockItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error adding stock item', error });
    }
};

// Update an existing stock item
exports.updateStockItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItem = await Stock.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error updating stock item', error });
    }
};

// Delete a stock item
exports.deleteStockItem = async (req, res) => {
    const { id } = req.params;
    try {
        await Stock.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting stock item', error });
    }
};
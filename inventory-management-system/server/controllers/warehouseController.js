const Warehouse = require('../models/Warehouse');

// Get all warehouses
exports.getAllWarehouses = async (req, res) => {
    try {
        const warehouses = await Warehouse.find();
        res.status(200).json(warehouses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching warehouses', error });
    }
};

// Get warehouse by ID
exports.getWarehouseById = async (req, res) => {
    try {
        const warehouse = await Warehouse.findById(req.params.id);
        if (!warehouse) {
            return res.status(404).json({ message: 'Warehouse not found' });
        }
        res.status(200).json(warehouse);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching warehouse', error });
    }
};

// Create a new warehouse
exports.createWarehouse = async (req, res) => {
    const newWarehouse = new Warehouse(req.body);
    try {
        const savedWarehouse = await newWarehouse.save();
        res.status(201).json(savedWarehouse);
    } catch (error) {
        res.status(400).json({ message: 'Error creating warehouse', error });
    }
};

// Update warehouse by ID
exports.updateWarehouse = async (req, res) => {
    try {
        const updatedWarehouse = await Warehouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWarehouse) {
            return res.status(404).json({ message: 'Warehouse not found' });
        }
        res.status(200).json(updatedWarehouse);
    } catch (error) {
        res.status(400).json({ message: 'Error updating warehouse', error });
    }
};

// Delete warehouse by ID
exports.deleteWarehouse = async (req, res) => {
    try {
        const deletedWarehouse = await Warehouse.findByIdAndDelete(req.params.id);
        if (!deletedWarehouse) {
            return res.status(404).json({ message: 'Warehouse not found' });
        }
        res.status(200).json({ message: 'Warehouse deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting warehouse', error });
    }
};
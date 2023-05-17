const express = require('express');
const Item = require('./Item');

const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new item
router.post('/', async (req, res) => {
  const { name, email, mobile } = req.body;
  const newItem = new Item({ name, email, mobile });
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT an existing item
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, mobile } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { name, email, mobile }, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an item
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
// server.js
const express = require('express');
const cors = require('cors');  // Import cors
const app = express();
const port = 3000;

// Use middleware cors
app.use(cors());

// Middleware parse JSON
app.use(express.json());

// Data
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

// Get all los items
app.get('/items', (req, res) => {
    res.json(items);
});

// Get item by ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// Create new item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Start server
app.listen(port, () => {
    console.log(`Server runs on http://localhost:${port}`);
});

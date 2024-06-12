// server.js
const express = require('express');
const cors = require('cors');  // Importa el paquete cors
const app = express();
const port = 3000;

// Usa el middleware cors
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Datos de ejemplo
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

// Obtener todos los items
app.get('/items', (req, res) => {
    res.json(items);
});

// Obtener un item por ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item no encontrado');
    res.json(item);
});

// Crear un nuevo item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

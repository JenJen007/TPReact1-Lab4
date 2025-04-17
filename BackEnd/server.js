const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ruta para obtener todos los instrumentos
app.get('/api/instrumentos', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM instrumento');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los instrumentos' });
    }
});

// Ruta para obtener un instrumento por ID
app.get('/api/instrumentos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM instrumento WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Instrumento no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el instrumento' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
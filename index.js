import express from 'express';

const app = express();
const PORT = 3000;

// Простое сообщение для проверки
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});


// GET маршрут
app.get('/', (req, res) => {
    try {
        res.send('Hello, World!');
    } catch (error) {
        res.status(500).send('Ошибка сервера');
    }
});

// POST маршрут
app.post('/', (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).send('Отсутствуют данные');
    }

    res.send(`Получены данные: ${data}`);
});


import pool from './db.js';

// Маршрут для получения всех продуктов
app.get('/products', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Ошибка получения данных');
    }
});

// Маршрут для добавления продукта
app.post('/products', async (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).send('Необходимы имя и цена продукта');
    }

    try {
        await pool.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
        res.send('Продукт успешно добавлен');
    } catch (error) {
        res.status(500).send('Ошибка добавления продукта');
    }
});

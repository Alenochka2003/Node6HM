import pool from './db.js';

const createTable = async () => {
    const connection = await pool.getConnection();
    await connection.execute(`
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL
        );
    `);
    connection.release();
    console.log('Таблица products создана');
};

createTable();

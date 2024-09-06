import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'mysql.itcareerhub.de',
    user: 'ich1',
    password: 'ich1_password_ilovedbs',
    database: 'product_db1',
    port:3306
});

export default pool;

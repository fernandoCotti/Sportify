import mysql, { Pool, MysqlError } from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err: MysqlError, connection) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('DB is connected.');
    }
});

export default pool;



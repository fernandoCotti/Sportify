import mysql, { Pool } from 'promise-mysql'; 

import keys from './keys';

async function connectToDB() {
    const pool: Pool = await mysql.createPool(keys.database); 

    try {
        const connection = await pool.getConnection(); 
        console.log('DB is connected.');
        // Aquí puedes realizar operaciones con la conexión a la base de datos.

        connection.release(); 
    } catch (error) {
        console.error('Error en la conexión a la base de datos:', error);
    }
}

connectToDB();
export default Pool;

import { Request, Response } from 'express';
import db, { getConnection } from '../database'; // Importo getConnection también

class ProductsController {
    public async products(req: Request, res: Response) {
        try {
            if (!db) {
                throw new Error('La conexión a la base de datos no está inicializada');
            }

            const connection = await getConnection(); // Obtener una conexión del pool

            // Ejemplo de una consulta (cambia esto por tu consulta real)
            const result = await connection.query('SELECT * FROM productos');

            connection.release(); // Liberar la conexión después de usarla

            res.json(result); // Enviar la respuesta con los resultados de la consulta
        } catch (error) {
            res.status(500).json({ message: 'Error en la consulta a la base de datos', error });
        }
    }
}

export const productController = new ProductsController();

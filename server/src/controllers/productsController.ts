import { Request, Response } from 'express';
import db from '../database';

class ProductsController {
    
    public async products(req: Request, res: Response): Promise<void> {
        db.query('SELECT * FROM product', (err, result) => {
            if (err) {
                console.error('Error al obtener los productos:', err);
                res.status(500).json({ error: 'Error al obtener los productos' });
            } else {
                res.json(result);
            }
        });
    }

    public async getProduct(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        db.query('SELECT * FROM product WHERE id = ?', id, (err, result) => {
            if (err) {
                res.status(400).json({ error: 'Error al obtener el producto.' });
            } else {

                res.json(result);
            }
        });

    }

    public async createProduct(req: Request, res:Response):Promise<void>{
        await db.query('INSERT INTO product set ?', [req.body]);
        res.json({message: 'Producto creado. '});
    }

    public deleteGame(req:Request, res:Response){
        const { id } = req.params;
        db.query('DELETE FROM product WHERE id = ?', id, (err, result) => {
            if (err) {
                res.status(400).json({ error: 'Error al eliminar el producto.' });
            } else {
                res.json({message: 'El producto fue eliminado.' });
            }
        });
    }

    public updateGame(req:Request, res:Response){
        const { id } = req.params;
        db.query('UPDATE product set ? WHERE id = ?', [req.body, id], (err, result) => {
            if (err) {
                res.status(400).json({ error: 'Error al actualizar el producto.' });
            } else {
                res.json({message: 'El producto fue actualizado' });
            }
        });
    }
}
const productsController = new ProductsController();
export default productsController;

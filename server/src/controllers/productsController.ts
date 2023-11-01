import { Request, Response } from 'express';
import db from '../database';

class ProductsController {
    
    public products(req: Request, res:Response){
        db.query('DESCRIBE product');
        res.json('Acá estarán los datos de todos los productos.');
    }
}
const productsController = new ProductsController();
export default productsController;

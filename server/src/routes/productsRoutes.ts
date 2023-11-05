import { Router } from 'express';

import productsController from '../controllers/productsController';

class productsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', productsController.products); //Obtenemos los productos.
        this.router.get('/:id', productsController.getProduct); //Obtenemos un producto particular.
        this.router.post('/', productsController.createProduct); //Creamos los productos.
        this.router.delete('/:id', productsController.deleteGame) //Eliminamos los productos.
        this.router.put('/:id', productsController.updateGame) //Actualizamos los productos.
    }
}

const productRoutes = new productsRoutes();
export default productRoutes.router;
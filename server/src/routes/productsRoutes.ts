import { Router } from 'express';

import { productController } from '../controllers/productsController';

class productsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', productController.products); //En el link inicial de mi aplicacion, '/', se devuelve el mensaje 'Hello'
    }
}

const productRoutes = new productsRoutes();
export default productRoutes.router;
import { Router } from 'express';

class productsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Productos.')); //En el link inicial de mi aplicacion, '/', se devuelve el mensaje 'Hello'
    }
}

const productRoutes = new productsRoutes();
export default productRoutes.router;
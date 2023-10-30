import { Router } from 'express';

class indexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Hello.')); //En el link inicial de mi aplicacion, '/', se devuelve el mensaje 'Hello'
    }
}

const indexRoute = new indexRoutes();
export default indexRoute.router;
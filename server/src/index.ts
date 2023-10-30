import express , { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import productsRoutes from './routes/productsRoutes';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', 3000 || process.env.PORT);
        this.app.use(morgan('dev'));
    }

    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/api/allProducts',productsRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port ', this.app.get('port'));
        } );
    }

}

const server = new Server();
server.start();
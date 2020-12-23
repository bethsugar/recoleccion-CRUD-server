//Dependencies
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Routes
import indexRoutes from './routes/index.routes';
import jusRoutes  from './routes/justificativa.routes';
import prodRoutes from './routes/productores.route';
import recRoutes from './routes/recolecta.routes';

//Inicializaciones

class Server {

    app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //Configuraciones

    config(): void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    //Rutas

    routes(): void {
            this.app.use('/', indexRoutes);
            this.app.use('/api/justificativo', jusRoutes);
            this.app.use('/api/productores', prodRoutes);  
            this.app.use('/api/recolecta', recRoutes);
    }

    //Iicialización del servidor
    start() : void {
        this.app.listen(this.app.get('port'), () => {
                console.log(`Server on port`, this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();


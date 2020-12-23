import { Router } from 'express';
import prodController from '../controllers/productores.controller';

class ProdRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void { 
    
        this.router.post('/', prodController.create); 
        this.router.get('/:id', prodController.readOne);
        this.router.get('/', prodController.readAll);
        this.router.put('/:id', prodController.update);
        this.router.delete('/:id', prodController.delete);
    }
}

const prodRoutes = new ProdRoutes();
export default prodRoutes.router;
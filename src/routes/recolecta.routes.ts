import { Router } from 'express';
import recController from '../controllers/recolecta.controller';

class RecRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void { 
    
        this.router.post('/', recController.create); 
        this.router.get('/:id', recController.getOne);
        this.router.get('/', recController.getAll);
        this.router.put('/:id', recController.update);
        this.router.delete('/:id', recController.delete);
    }
}

const recRoutes = new RecRoutes();
export default recRoutes.router;
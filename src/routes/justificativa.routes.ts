import { Router } from 'express';
import jusController from '../controllers/just.controller';

class JusRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void { 
        this.router.get('/', jusController.list);
        this.router.get(':id', jusController.listOne);
        this.router.post('/', jusController.create); //api/recepcion
        this.router.put('/:id', jusController.update);
        this.router.delete('/:id', jusController.delete);
    }
}

const jusRoutes = new JusRoutes();
export default jusRoutes.router;
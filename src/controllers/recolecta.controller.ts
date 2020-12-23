//Formulario de colecta 
import { Request, Response } from 'express';
import pool from '../database';

//CRUD

class RecController {

    public create (req: Request, res: Response) {
        let rec = req.body;
        pool.query('INSERT INTO recolection SET ?', [rec], function (err) {
             if(err) {
                throw err;
                } else {
                return res.send({ message: 'Reporte guardado' });
                }
        });
    }

    public getAll (req: Request, res: Response) {
        pool.query('SELECT * FROM recolection', function (err, result) {
            if (err)
                throw err;
            res.json(result);
        });
    }

    public async getOne (req: Request, res: Response) {
        let id = req.params.id;
        let consulta = "SELECT * FROM recolection WHERE id= ?";
        pool.query(consulta, id, (err, result) => {
            if (err)
                throw err;
            res.json(result[0]);
        });
    }

    public async update (req: Request, res: Response) {
        

    }

    public delete (req: Request, res: Response) {
        let id = req.params.just_id;
        pool.query('DELETE FROM recolecta WHERE just_id = ?', [id]);
        res.json({message: 'Reporte eliminado'});
    }
    
}

const recController = new RecController();
export default recController;

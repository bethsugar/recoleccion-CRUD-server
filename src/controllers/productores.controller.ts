//FORMULARIO DE REGISTRO
import { Request, Response } from 'express';
import pool from '../database';

//CRUD

class ProdController {

    public create (req: Request, res: Response) {
        let prod = req.body;
        pool.query('INSERT INTO productor SET ?', [prod], function (err) {
            if(err) {
                throw err;
                } else {
                return res.send({ message: 'Productor registrado exitosamente' });
                }
        });
    }

    public readAll (req: Request, res: Response) {
        pool.query('SELECT * FROM productor', function (err, result) {
            if (err)
                throw err;
            res.json(result);
        });
    }


    public readOne(req: Request, res: Response) {
        let id = req.params.id;
        let consulta = "SELECT * FROM productor WHERE id= ?";
        pool.query(consulta, id, (err, result) => {
            if (err)
                throw err;
            res.json(result[0]);
        });
    }


    public update (req: Request, res: Response){
        let id = req.params.id;
        pool.query('UPDATE productor set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Los datos han sido actualizados'});
    }


    public delete (req: Request, res: Response){
        let id = req.params.id;
        pool.query('DELETE FROM productor WHERE id= ?', [id]);
        res.json({message: 'Productor eliminado'});
    }

}

const prodController = new ProdController();
export default prodController;
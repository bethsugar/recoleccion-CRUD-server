//Formulario de justificativos
import { Request, Response } from 'express';
import pool from '../database';

//CRUD

class JustController {

    public create (req: Request, res: Response) {
        let just = req.body;
        pool.query('INSERT INTO justificativo SET ?', [just], function (err) {
            if(err) {
                throw err;
                 } else {
                return res.send({ message: 'Justificativo enviado' });
                }
        });
    }

    public list (req: Request, res: Response) {
        pool.query('SELECT * FROM justificativo', function (err, result, fields) {
            if (err)
                throw err;
            res.json(result);
        });
    }

    public listOne(req: Request, res: Response) {
        let just_id = req.params.just_id;
        let consulta = "SELECT * FROM justificativo WHERE just_id= ?";
        pool.query(consulta, just_id, (err, result) => {
            if (err)
                throw err;
            res.json(result[0]);
        });
    }

    public update(req: Request, res: Response) { 
        let id = req.params.just_id;
        pool.query('UPDATE productor set ? WHERE just_id = ?', [req.body, id]);
        res.json({message: 'Los datos han sido actualizados'});
    }

    public delete(req: Request, res: Response) { 
        let id = req.params.just_id;
        pool.query('DELETE FROM justificativo WHERE just_id = ?', [id]);
        res.json({message: 'Justificativo eliminado' });
    }
}

const jusController = new JustController();
export default jusController;
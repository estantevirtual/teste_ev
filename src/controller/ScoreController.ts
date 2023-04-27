import { Request, Response } from "express";
import { ScoreBusiness } from "../Business/ScoreBusiness";

const scoreBusiness = new ScoreBusiness()

export class ScoreController {


    NewScore = async (req: Request, res: Response) => {
        try {
            const { modality_id, athlete, value, unit } = req.body
            await scoreBusiness.registerScore(modality_id, athlete, value, unit)
            res.status(201).send("Score succesfully registered!")
        } catch (error: any) {
            if (error.message === "modality does not exist") {
                res.status(404).json({ error: error.message });
            } else {
                res.json({ error: error.message });
            }
        }
    }
    getAllData = async (req: Request, res: Response) => {
        try {
            let result = await scoreBusiness.getAllData()
            res.json(result)

        } catch (error: any) {
            res.send(error.message)
        }
    }

    getAllScoreModality = async (req: Request, res: Response) => {
        try {
          const foreignKey  = req.query.id as string;
          const values = await scoreBusiness.getAllScoreModality(foreignKey);
          res.status(200).json({ values });
        } catch (err:any) {
          res.status(500).json({ error: err.message });
        }
      };
}
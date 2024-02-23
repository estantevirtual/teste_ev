import { Request, Response } from "express";
import { AthletesBusiness } from "../business/AthletesBusiness";

const athletesBusiness = new AthletesBusiness();

export class AthletesController {
  public createAthlete = async (req: Request, res: Response) => {
    try{
      const {name} = req.body;

      const input = {
        name
      };

      await athletesBusiness.createAthlete(input);
      res.status(201).send("Athlete created successfully!")
    } catch(error: any){
      res.status(400).send(error.message)
    }
  }
}
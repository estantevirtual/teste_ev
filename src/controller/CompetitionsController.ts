import { Request, Response } from "express";
import { CompetitionsBusiness } from "../business/CompetitionsBusiness";

const competitionsBusiness = new CompetitionsBusiness();

export class CompetitionsController {
  public createCompetition = async (req: Request, res: Response) => {
    try {
      const { name, modality } = req.body;

      const input = {
        name,
        modality,
      };

      await competitionsBusiness.createCompetition(input);
      res.status(201).send("Competition created successfully!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}

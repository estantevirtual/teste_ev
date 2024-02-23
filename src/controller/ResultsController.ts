import { Request, Response } from "express";
import { ResultsBusiness } from "../business/ResultsBusiness";

const resultsBusiness = new ResultsBusiness();

export class ResultsController {
  public createResult = async (req: Request, res: Response) => {
    try {
      const { competition, athlete, value, unit } = req.body;

      const input = {
        competition,
        athlete,
        value,
        unit,
      };

      await resultsBusiness.createResult(input);
      res.status(201).send("Result created successfully!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}

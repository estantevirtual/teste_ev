import { log } from "console";
import { ModalityBusiness } from "../Business/ModalityBusiness";
import { Request, Response } from "express";

const modalityBusiness = new ModalityBusiness()

export class ModalityController {
  insertModality = async (req: Request, res: Response) => {
    try {
      const { name, type } = req.body
      await modalityBusiness.insertModality(name, type)
      res.send("Modality created succesfully!")
    }
    catch (error: any) {
      res.send(error.message);
    }
  }

  getAllData = async (req: Request, res: Response) => {
    try {
      let result = await modalityBusiness.getAllData()
      res.json(result)
      console.log(result);

    } catch (error: any) {
      res.send(error.message)
    }
  }

  finishModality = async (req: Request, res: Response) => {
    try {
      const id = req.query.id as string;
      await modalityBusiness.finishCompetition(id);
      res.status(201).send("Modality has ended successfully!");
    } catch (error: any) {
      if (error.message === "Modality does not exist") {
        res.status(404).json({ error: error.message });
      } else {
        res.json({ error: error.message });
      }
    }
  };
}
import express from "express";
import { ModalityController } from "../controller/ModalityController";

export const competitionRouter = express.Router()
const modalityController = new ModalityController()

modalityController.post("/create", modalityController.insertModality)


modalityController.get("/getall", modalityController.getAll)

modalityController.put("/end", modalityController.finishModality)


modalityController.delete("/delete", modalityController.deleteModalityById)

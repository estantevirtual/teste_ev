import express from "express";
import { ModalityController } from "../controller/ModalityController";

export const modalityRouter = express.Router()
const modalityController = new ModalityController()

modalityRouter.post("/create", modalityController.insertModality)


modalityRouter.get("/getall", modalityController.getAll)

modalityRouter.put("/end", modalityController.finishModality)


modalityRouter.delete("/delete", modalityController.deleteModalityById)

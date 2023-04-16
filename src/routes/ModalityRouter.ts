import express from "express";
import { ModalityController } from "../controller/ModalityController";

export const modalityRouter = express.Router()
const modalityController = new ModalityController()

modalityRouter.post("/create", modalityController.insertModality)


modalityRouter.get("/getall", modalityController.getAllData)

modalityRouter.put("/end", modalityController.finishModality)



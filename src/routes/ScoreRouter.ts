import express from "express";
import { ScoreController } from "../controller/ScoreController";

export const scoreRouter = express.Router()
const scoreController = new ScoreController


scoreRouter.post("/create", scoreController.NewScore)


scoreRouter.get("/getall", scoreController.getAllData)


scoreRouter.get("/rank", scoreController.getAllScoreModality)
import express from "express";
import { CompetitionsController } from "../controller/CompetitionsController";

export const competitionRouter = express.Router();

const competitionsController = new CompetitionsController();

competitionRouter.post(
  "/competition",
  competitionsController.createCompetition
);
competitionRouter.get("/:id", competitionsController.getCompetitionById);

competitionRouter.put("/:id", competitionsController.finishCompetition);

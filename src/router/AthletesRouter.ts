import express from "express";
import { AthletesController } from "../controller/AthletesController";

export const athleteRouter = express.Router();

const athletesController = new AthletesController();

athleteRouter.post("/create", athletesController.createAthlete);
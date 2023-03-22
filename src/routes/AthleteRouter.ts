import express from "express"
import { AthleteDatabase } from '../data/AthleteDatabase';
import { AthleteBusiness } from '../Business/AthleteBusiness';
import { IdGenerator } from '../services/IdGenerator';
import { AthleteController } from '../controller/AthleteController';
export const AthleteRouter = express.Router()

const athleteDataBase = new AthleteDatabase()
const athleteBusiness = new AthleteBusiness(athleteDataBase,new IdGenerator())
const athleteController =  new AthleteController(athleteBusiness)

AthleteRouter.post("/create", (req,res)=> athleteController.createAthlete(req,res))
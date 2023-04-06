import express from "express"
import { DardosDataBase } from "../data/DardosDatabase"
import { DardosBusiness } from "../Business/DardosBusiness"
import { IdGenerator } from "../services/IdGenerator"
import { DardosController } from "../controller/DardosController"
export const dardosRouter = express.Router()

const dardosDatabase = new DardosDataBase()
const dardosBusiness = new DardosBusiness(dardosDatabase, new IdGenerator() )
const dardosController = new DardosController(dardosBusiness)

dardosRouter.post("/create", (req, res) => dardosController.createAthlete(req, res))
dardosRouter.get("/info/dardos", (req, res) => dardosController.getAthleteBy(req, res))
dardosRouter.get("/all/cem", (req, res) => dardosController.getAllAthlete(req, res))
dardosRouter.get("/all/ranking", (req, res) => dardosController.ranking(req, res))
dardosRouter.post("/end",(req,res)=> dardosController.deleteModality(req, res))

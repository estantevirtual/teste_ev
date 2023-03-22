import express from 'express'
import { Request, Response } from 'express'
import { CompetitionDataBase } from '../data/CompetitionDataBase'
import { IdGenerator } from '../services/IdGenerator'
import { CompetitionBusiness } from '../Business/CompetitionBusiness'
import { CompetitionController } from '../controller/CompetitionController'
// Rotas para conectar o endpoint
const compDatabase = new CompetitionDataBase()
const compBusiness = new CompetitionBusiness(compDatabase, new IdGenerator)
const compController = new CompetitionController(compBusiness)

export const compRouter = express.Router()
compRouter.post('/create', (req, res) => compController.createCompetition(req, res))
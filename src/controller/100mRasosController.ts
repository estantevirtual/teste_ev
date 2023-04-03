import { CemMBusiness } from "../Business/100mRasosBusiness"
import { inputGetModalityDTO, inputModalityDTO } from "../models/ModalityDTO"
import { Request,Response } from "express"

export class CemMcontroller {
    constructor (private cemMbusiness:CemMBusiness ) {}

    async createAthlete (req: Request, res: Response): Promise<void> {
        try {
            const input: inputModalityDTO = {
                competicao: req.body.competicao,
                atleta: req.body.atleta,
                value: req.body.value,
                unidade: req.body.unidade,
            }

            await this.cemMbusiness.createAthlete(input)

            res.status(201).send("Atleta registrado na modalidade 100m rasos!")

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
    async getAthleteBy (req: Request, res: Response): Promise<void> {
        try {
            const input: inputGetModalityDTO = {
                id: req.query.id as string,
                competicao: req.query.competicao as string,
                atleta: req.query.atleta as string,
                
            }

            const result = await this.cemMbusiness.getAthleteBy(input)
            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }


    async getAllAthlete (req: Request, res: Response): Promise<void> {
        try {
            const result = await this.cemMbusiness.getAllAthletes()
            res.status(200).send(result)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
async ranking(req: Request, res: Response): Promise<void> {
    try{
        const rankingResult = await this.cemMbusiness.ranking()
        res.status(200).send(rankingResult)
    } catch (error: any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    } 
} }
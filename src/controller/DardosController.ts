import { Request, Response } from "express-serve-static-core"

import { DardosBusiness } from "../Business/DardosBusiness"
import { inputGetModalityDTO, inputModalityDTO } from "../models/ModalityDTO"


export class DardosController {
    constructor (private dardosBusiness:DardosBusiness ) {}

    async createAthlete (req: Request, res: Response): Promise<void> {
        try {
            const input: inputModalityDTO = {
                competicao: req.body.competicao,
                atleta: req.body.atleta,
                value: req.body.value,
                unidade: req.body.unidade,
            }

            await this.dardosBusiness.createAthlete(input)

            res.status(201).send("Atleta registrado na modalidade DARDOS!")

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

            const result = await this.dardosBusiness.getAthleteBy(input)
            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }


    async getAllBands (req: Request, res: Response): Promise<void> {
        try {
            const result = await this.dardosBusiness.getAllAthletes()
            res.status(200).send(result)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}
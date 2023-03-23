import { CemMBusiness } from "../Business/100mRasosBusiness"
import { inputModalityDTO } from "../models/ModalityDTO"
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
}
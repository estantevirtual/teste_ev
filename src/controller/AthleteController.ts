import { AthleteBusiness } from '../Business/AthleteBusiness';
import { Request,Response } from 'express';
import { AthleteInputDTO, modality, unity } from '../models/AthleteDTO';
export class AthleteController {
    constructor (public athleteBusiness: AthleteBusiness){}
    async createAthlete(req: Request, res:Response): Promise<void>{
try {
    const input: AthleteInputDTO = {
        competicao: req.body.modality,
        atletas: req.body.atletas,
        value: req.body.value,
        unidade: req.body.unity
    }
    await this.athleteBusiness.createAthlete(input)
    res.status(201).send("Atleta e competição registrada")
} catch (error: any) {
    res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
}
    }
}
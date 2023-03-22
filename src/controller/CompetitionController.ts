import { CompetitionBusiness } from "../Business/CompetitionBusiness";
import { Request,Response } from "express";
import { CompInputDTO } from "../models/CompetitionDTO";
//Cria A competição
export class CompetitionController{
    constructor (public competitionBusiness: CompetitionBusiness){
}
async createCompetition(req:Request, res:Response): Promise<void> {
    try{
        const input:CompInputDTO ={
            name:req.body.name
        }
        await this.competitionBusiness.createCompetition(input);
        res.status(201).send("Competition Created Successfully");
    } catch (error:any){
        res.status(error.statusCode|| 400).send(error.message|| error.sqlMessage|| error.message);
    }
}}
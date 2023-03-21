import { BaseDatabase } from "./BaseDataBase";
import { CompetitionRepository } from "../repositories/CompetitionRepository";
import { CompetitionDTO } from "../models/CompetitionDTO";
import { CustomError } from "../CustomError";

export class CompetitionDataBase extends BaseDatabase implements CompetitionRepository {
    public TABLE_NAME = "Competition_Creator"
    async createCompetition(newCompetition: CompetitionDTO): Promise<void> {
        try { await BaseDatabase.connection(this.TABLE_NAME).insert(newCompetition)
            
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
            
        }
    }
    async getCompetition(column: string, value: any): Promise<CompetitionDTO | undefined> {
        try { 
            const result = await BaseDatabase.connection(this.TABLE_NAME).select().where(column,value)
            return result[0]
            
        } catch (error:any) {
             new CustomError(error.statusCode,error.message)
            
        }
        
    }
}
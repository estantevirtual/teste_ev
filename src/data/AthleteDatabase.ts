import { BaseDatabase } from "./BaseDataBase";
import { AthleteRepository } from "../repositories/AthleteRepository";
import { AthleteDTO } from "../models/AthleteDTO";
import { CustomError } from "../errors/CustomError";
export class AthleteDatabase extends BaseDatabase implements AthleteRepository{
    public TABLE_NAME = "Atletas"
    async createAthlete(newAthlete: AthleteDTO): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert(newAthlete)
        } catch(error:any){
            throw new CustomError(error.statuscode, error.message);
        }
    }
async getAthlete(atletas: string, column: string, value: string): Promise<any> {
    try {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select()
        .where(atletas, column, value)
        .andWhere(column,value);
        return result[0]
        
    } catch (error:any) {
        throw new CustomError(error.statuscode,error.message)
        
    }
}
}
import { BaseDatabase } from "./BaseDataBase"
import { CustomError } from "../errors/CustomError"
import { ModalityRepository } from "../repositories/ModalityRepository"
import { ModalityDTO } from "../models/ModalityDTO"
export class CemMDatabase extends BaseDatabase implements ModalityRepository {
    private TABLE_NAME = "100MRASOS"
    
    async createAthlete (newAthlete: ModalityDTO): Promise<void> {
        try {
            await BaseDatabase.connection(this.TABLE_NAME).insert(newAthlete)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

async getAthleteBy (column: string, value: string): Promise<any> {
    try {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select().where(column, value)
        return result[0]
    } catch (error: any) {
        throw new CustomError(error.statusCode, error.message)
    }
}
 }

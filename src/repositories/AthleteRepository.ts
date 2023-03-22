import { AthleteDTO } from "../models/AthleteDTO";

export interface AthleteRepository{
    createAthlete (newAthlete: AthleteDTO): Promise<void>
    getAthlete (atletas: string, column: string, value:string): Promise<any>
}
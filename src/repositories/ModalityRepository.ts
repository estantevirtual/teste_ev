import { ModalityDTO } from "../models/ModalityDTO"

export interface ModalityRepository {
    createAthlete (newAthlete: ModalityDTO): Promise<void>
    getAthleteBy (column: string, value: string): Promise<any>
    getAllAthlete (): Promise<ModalityDTO[]>
    ranking(): Promise<ModalityDTO[]>
}
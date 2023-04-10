import { ModalityRepository } from "../../repositories/ModalityRepository"
import { ModalityDTO } from "../ModalityDTO"
import { atletasMocks } from "./atletasMocks"


export class AthleteDatabaseMock implements ModalityRepository {
    async createAthlete (newAthlete: ModalityDTO): Promise<void> {}

    async getAthleteBy (column: string, value: string): Promise< | any> {
        const result = atletasMocks.filter(item => item.id === value || item.atleta === value)
        return result[0]
    }
    async getAllAthlete(): Promise<ModalityDTO[]|any> {
        
       
    }
    async ranking(): Promise<ModalityDTO[]|any> {
        
        
    }
    async deleteModality(competicao: string): Promise<void> {
        
    }
}
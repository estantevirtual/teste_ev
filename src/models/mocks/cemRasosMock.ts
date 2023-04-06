import { ModalityRepository } from "../../src/repositories/ModalityRepository"
import { ModalityDTO } from "../../src/models/ModalityDTO"
import { atletasMocks } from "./atletasMocks"


export class AthleteDatabaseMock implements ModalityRepository {
    async signup (newAthlete: ModalityDTO): Promise<void> {}

    async getUserBy (column: string, value: string): Promise< | undefined> {
        const result = users.filter(item => item.id === value || item.email === value)
        return result[0]
    }
}
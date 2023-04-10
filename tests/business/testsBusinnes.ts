import { CemMBusiness } from "../../src/Business/100mRasosBusiness";
import { CustomError } from "../../src/errors/CustomError";
import { ModalityDTO, inputModalityDTO } from '../../src/models/ModalityDTO';
import { ModalityRepository } from "../../src/repositories/ModalityRepository";
import { GenId } from "../../src/services/GenId";

export class genIdMock implements GenId {
    public generateId = jest.fn(() => {
        return "id"
    })
}
export class cemMocks implements ModalityRepository {
    async createAthlete (newUser: ModalityDTO): Promise<void> {}
async getAthleteBy(column: string, value: string): Promise<any> {
    
}
async getAllAthlete(): Promise<ModalityDTO[]|any> {
    
}
async ranking(): Promise<ModalityDTO[]|any> {
    
}
async deleteModality(competicao: string): Promise<void> {
    
}}
const modalityTestsCem = new CemMBusiness(
    new cemMocks(),
    new genIdMock()
)


describe("Testing the create method", () => {
    test("Should receive an input with no name and return a custom error", async () => {
        expect.assertions(3)
        try {
            const input = {
                id:"id",
                competicao: "",
                atleta: "teste",
                value: "",
             unidade: "s"
            }

            await modalityTestsCem.createAthlete(input)
        } catch (error: any) {
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Provide the name.")
        }
    })
})
import { DuoName, InvalityModality, InvalityUnity } from "../errors/100mRasosErrors";
import { CustomError } from "../errors/CustomError";
import { ModalityDTO, inputModalityDTO } from "../models/ModalityDTO";
import { ModalityRepository } from "../repositories/ModalityRepository";
import { GenId } from "../services/GenId";

export class CemMBusiness {
    constructor (
        private athleteData: ModalityRepository,
        
        private idGenerator: GenId
    ) {}
    async createAthlete(input: inputModalityDTO): Promise<void> {
        try {
            if (input.competicao != "100m Rasos"){
                throw new InvalityModality()
                
            }
            if (input.unidade != "s"){
                throw new InvalityUnity()
            }
            const duoName = await this.athleteData.getAthleteBy("atleta", input.atleta)
            if (duoName){
                throw new DuoName()
            }
            const id = await this.idGenerator.generateId()
            const newAthlete = new ModalityDTO(id, input.competicao,input.atleta,input.value,input.unidade)
            await this.athleteData.createAthlete(newAthlete)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
            
        }
    } 
}
import { InvalidUnity, InvalidCompetition } from '../errors/AthleteErrors';
import { AthleteDTO, AthleteInputDTO, modality, unity } from '../models/AthleteDTO';
import { AthleteRepository } from "../repositories/AthleteRepository";
import { IdGenerator } from "../services/IdGenerator";
import { GenId } from '../services/GenId';
import { CustomError } from '../errors/CustomError';


export class AthleteBusiness{
    constructor(
        public athleteData : AthleteRepository,
        public idGenerator : GenId
    ) {}
    async createAthlete(input:AthleteInputDTO): Promise<void> {
        try {
            if(!input.unidade){
                throw new InvalidUnity()
            }
            if(!input.competicao){
                throw new InvalidCompetition()

            }
            const id = this.idGenerator.generateId()
            const newAthlete = new AthleteDTO(id,modality.CEMRASOS,input.atletas,input.value,unity.SEGUNDOS)
            await this.athleteData.createAthlete(newAthlete)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
            
        }

    }
}
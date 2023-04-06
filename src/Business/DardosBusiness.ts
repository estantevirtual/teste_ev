import { AthleteIdNotFound, MissingNameOrId } from "../errors/100mRasosErrors";
import { CustomError } from "../errors/CustomError";
import { DuoNameD, InvalityModalityD, InvalityUnityD } from "../errors/DardosErrors";
import { ModalityDTO, inputGetModalityDTO, inputModalityDTO } from "../models/ModalityDTO";
import { ModalityRepository } from "../repositories/ModalityRepository";
import { GenId } from "../services/GenId";

export class DardosBusiness {
    constructor (
        private athleteDataBase: ModalityRepository,
        
        private idGenerator: GenId
    ) {}
    async createAthlete(input: inputModalityDTO): Promise<void> {
        try {
            if (input.competicao != "DARDOS"){
                throw new InvalityModalityD()
                
            }
            if (input.unidade != "m"){
                throw new InvalityUnityD()
            }
            const duoName = await this.athleteDataBase.getAthleteBy("atleta", input.atleta)
            if (duoName){
                throw new DuoNameD()
            }
            const id = await this.idGenerator.generateId()
            const newAthlete = new ModalityDTO(id, input.competicao,input.atleta,input.value,input.unidade)
            await this.athleteDataBase.createAthlete(newAthlete)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
            
        }
    } 
    async getAthleteBy (input: inputGetModalityDTO): Promise<ModalityDTO> {
        try {
            if (!input.id && !input.atleta) {
                throw new MissingNameOrId()
            }

            let result
            if (input.id) {
                const idExists = await this.athleteDataBase.getAthleteBy("id", input.id)
                if (!idExists) {
                    throw new AthleteIdNotFound()
                }
                result = idExists
            }

            if (input.atleta) {
                input.atleta = input.atleta.replace("_", " ")
                
             
            }

            return result

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }


    async getAllAthlete (): Promise<ModalityDTO[]> {
        try {
            const result = await this.athleteDataBase.getAllAthlete()
            return result
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    async ranking (): Promise<ModalityDTO[]> {
        try{
            const rankingResult = await this.athleteDataBase.ranking()
            return rankingResult
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } 
    }
    deleteModality = async (input: inputModalityDTO): Promise<void> => {
        try {
           
            await this.athleteDataBase.deleteModality(input.competicao)
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
    }
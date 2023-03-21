import { CompInputDTO, Modality, CompetitionDTO } from "../models/CompetitionDTO";
import { CompetitionRepository } from "../repositories/CompetitionRepository";
import { IdGenerator } from "../services/IdGenerator";
import { DuoCompetition } from "../CustomError";

export class CompetitionBusiness {
    constructor(
        private competitionDatabase: CompetitionRepository,
        private idGenerator: IdGenerator,

    ) { }

    async createCompetition(input: CompInputDTO): Promise<string> {




        const isCompetitionCreate = await this.competitionDatabase.getCompetition("Modality", input.Modality)
        if (isCompetitionCreate) {
            throw new DuoCompetition()
        }


        input.Modality.toUpperCase() === Modality.TENMILEHIKE ? Modality.POWERLIFTER : Modality.TOFIVESWIN

        const id = this.idGenerator.generateId()


        const newCompetition = new CompetitionDTO(id,Modality.TENMILEHIKE)
        await this.competitionDatabase.getCompetition

        

    } catch(error: any) {
        throw new CustomError(error.statusCode, error.message)
    }
}

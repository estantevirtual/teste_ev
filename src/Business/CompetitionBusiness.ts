import { CompInputDTO, CompetitionDTO } from "../models/CompetitionDTO";
import { CompetitionRepository } from "../repositories/CompetitionRepository";
import { IdGenerator } from "../services/IdGenerator";
import { DuoCompetition, CustomError } from "../errors/CustomError";
//Cria A competição

export class CompetitionBusiness {
    constructor(
        private competitionDatabase: CompetitionRepository,
        private idGenerator: IdGenerator,

    ) { }

    async createCompetition(input: CompInputDTO): Promise<void> {




        const isCompetitionCreate = await this.competitionDatabase.getCompetition("name", input.name)
        if (isCompetitionCreate) {
            throw new DuoCompetition()
        }




        const id = this.idGenerator.generateId()


        const newCompetition = new CompetitionDTO(id, input.name)
        await this.competitionDatabase.createCompetition(newCompetition)



    } catch(error: any) {
        throw new CustomError(error.statusCode, error.message)
    }

}

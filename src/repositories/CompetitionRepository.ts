import { CompetitionDTO } from "../models/CompetitionDTO";

export interface CompetitionRepository {
    createCompetition (newCompetition: CompetitionDTO): Promise<void>
    getCompetition (column: string, value:any): Promise< CompetitionDTO| undefined>
}
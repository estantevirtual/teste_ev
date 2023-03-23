import { CompetitionsDataBase } from "../data/CompetitionsDataBase";
import { CompetitionExists } from "../error/CompetitionExists";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/Invalidrequest";
import { InvalidTypeOf } from "../error/TypeOfError";
import { CompetitionInputDTO } from "../models/Competitions";
import { generateId } from "../services/IdGenerator";

const competitionsDataBase = new CompetitionsDataBase();

export class CompetitionsBusiness {
  public createCompetition = async (input: CompetitionInputDTO) => {
    try {
      const { name, modality } = input;

      if (!name || !modality) {
        throw new InvalidRequest();
      }

      if (typeof name && typeof modality != "string") {
        throw new InvalidTypeOf();
      }
      const id: string = generateId();

      const competition = {
        id,
        name,
        modality,
      };

      const result = await competitionsDataBase.createCompetition(competition);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

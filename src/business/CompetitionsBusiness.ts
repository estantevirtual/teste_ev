import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/Invalidrequest";
import { CompetitionInputDTO } from "../models/Competitions";
import { generateId } from "../services/IdGenerator";

export class CompetitionsBusiness {
  public createCompetition = async (input: CompetitionInputDTO) => {
    try {
      const { name, modality } = input;

      if (!name || !modality) {
        throw new InvalidRequest();
      }

      const id: string = generateId();
      // ___________________________
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

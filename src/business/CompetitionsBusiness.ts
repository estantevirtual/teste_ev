import { CompetitionsDataBase } from "../data/CompetitionsDataBase";
import { CompetitionAlreadyCompleted } from "../error/CompetitionAlredyCompleted";
import { CompetitionExists } from "../error/CompetitionExists";
import { CompetitionNotFound } from "../error/CompetitionNotFound";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/Invalidrequest";
import { InvalidTypeOf } from "../error/TypeOfError";
import { CompetitionInputDTO } from "../models/Competitions";
import { generateId } from "../services/IdGenerator";

const competitionsDataBase = new CompetitionsDataBase();

export class CompetitionsBusiness {
  public createCompetition = async (input: CompetitionInputDTO) => {
    try {
      const existingModality = await competitionsDataBase.checkExistsModality(input.modality);
      const { name, modality } = input;

      if (!name || !modality) {
        throw new InvalidRequest();
      }

      if (typeof name !== "string" || typeof modality !== "string") {
        throw new InvalidTypeOf();
      }

      if (existingModality.length === 0) {
        // Se a modalidade não existir, crie a competição diretamente
        const id: string = generateId();

        const competition = {
          id,
          name,
          modality,
        };

        const result = await competitionsDataBase.createCompetition(competition);
        return result;
      } else {
        // Se a modalidade existir, verifique a existência do nome da competição
        const existingCompetitionName = await competitionsDataBase.checkExistsCompetitionName(input.name);

        if (existingCompetitionName.length > 0) {
          throw new CompetitionExists();
        }

        // Crie a competição se o nome não existir
        const id: string = generateId();

        const competition = {
          id,
          name,
          modality,
        };

        const result = await competitionsDataBase.createCompetition(competition);
        return result;
      }
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public getCompetitionById = async (id: string) => {
    try {
      if (!id) {
        throw new InvalidRequest();
      }

      const result = await competitionsDataBase.getCompetitionsById(id);
      if (!result) {
        throw new CompetitionNotFound();
      }

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public finishCompetition = async (id: string) => {
    try {
      const competition = await competitionsDataBase.getCompetitionsById(id);

      if (!competition) {
        throw new CompetitionNotFound();
      }

      if (competition.finished) {
        throw new CompetitionAlreadyCompleted();
      }

      const result = await competitionsDataBase.finishCompetition(id);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

import { ResultsDataBase } from "../data/ResultsDataBase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/Invalidrequest";
import { InvalidTypeOf } from "../error/TypeOfError";
import { ResultInputDTO } from "../models/Results";
import { generateId } from "../services/IdGenerator";

const resultsDataBase = new ResultsDataBase();

export class ResultsBusiness {
  public createResult = async (input: ResultInputDTO) => {
    try {
      const { competition, athlete, value, unit } = input;

      if (!competition || !athlete || !value || !unit) {
        throw new InvalidRequest();
      }
      if (typeof competition && athlete && unit != "string") {
        throw new InvalidTypeOf();
      }
      if (typeof value != "number") {
        throw new InvalidTypeOf();
      }

      // IMPLEMENTAR VERIFICAÇÕES

      const id: string = generateId();

      const res = {
        id,
        competition,
        athlete,
        value,
        unit,
      };

      const result = await resultsDataBase.createResult(res);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

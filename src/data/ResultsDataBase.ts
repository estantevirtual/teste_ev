import { CustomError } from "../error/CustomError";
import { Results } from "../models/Results";
import { BaseDatabase } from "./BaseDataBase";

const TABLE_RESULTS = "Results";

export class ResultsDataBase extends BaseDatabase {
  //CREATE RESULTS
  public createResult = async (result: Results) => {
    try {
      await ResultsDataBase.connection
        .insert({
          id: result.id,
          competition: result.competition,
          athlete: result.athlete,
          value: result.value,
          unit: result.unit,
        })
        .into(TABLE_RESULTS);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

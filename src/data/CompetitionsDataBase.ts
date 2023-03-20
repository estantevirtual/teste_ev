import { CustomError } from "../error/CustomError";
import { Competitions } from "../models/Competitions";
import { BaseDataBase } from "./BaseDataBase";

const TABLE_COMPETITIONS = "Competitions";

export class CompetitionsDataBase extends BaseDataBase {
  public createCompetition = async (competition: Competitions) => {
    try {
      await CompetitionsDataBase.connection
        .insert({
          id: competition.id,
          name: competition.name,
          modality: competition.modality,
        })
        .into(TABLE_COMPETITIONS);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getCompetitionsById = async (id: string) => {
    try {
      const result = await CompetitionsDataBase.connection(TABLE_COMPETITIONS)
        .select()
        .where({ id });
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

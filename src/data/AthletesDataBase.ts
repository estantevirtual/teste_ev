import { CustomError } from "../error/CustomError";
import { Athletes } from "../models/Athletes";
import { BaseDatabase } from "./BaseDataBase";

const TABLE_ATHLETES = "Athletes";

export class AthletesDataBase extends BaseDatabase {
  //CREATE ATHLETE
  public createAthlete = async (athlete: Athletes) => {
    try {
      await AthletesDataBase.connection
        .insert({
          id: athlete.id,
          name: athlete.name,
        })
        .into(TABLE_ATHLETES);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public checkExistsAthlete = async (name: string) => {
    try {
      const joinedAthlete = name.toLowerCase().split(" ").join("");

      const result = await AthletesDataBase.connection(TABLE_ATHLETES)
        .select()
        .whereRaw('LOWER(REPLACE(name, " ", "")) = ?', [joinedAthlete]);

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

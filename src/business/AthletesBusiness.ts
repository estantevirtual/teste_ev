import { AthletesDataBase } from "../data/AthletesDataBase";
import { AthletesExists } from "../error/AthleteExists";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/Invalidrequest";
import { InvalidTypeOf } from "../error/TypeOfError";
import { AthletesInputDTO } from "../models/Athletes";
import { generateId } from "../services/IdGenerator";

const athletesDataBase = new AthletesDataBase();

export class AthletesBusiness {
  public createAthlete = async (input: AthletesInputDTO) => {
    try {
      const { name } = input;
      const existingAthlete = await athletesDataBase.checkExistsAthlete(name);

      if (!name) {
        throw new InvalidRequest();
      }

      if (typeof name != "string") {
        throw new InvalidTypeOf();
      }

      if (existingAthlete.length > 0) {
        throw new AthletesExists();
      }
      
      const id: string = generateId();

      const athlete = {
        id,
        name,
      };

      const result = await athletesDataBase.createAthlete(athlete);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

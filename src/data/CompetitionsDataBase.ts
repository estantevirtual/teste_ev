import { CustomError } from "../error/CustomError";
import { Competitions } from "../models/Competitions";
import { BaseDataBase } from "./BaseDataBase";

const TABLE_COMPETITIONS = "Competitions";

export class CompetitionsDataBase extends BaseDataBase {
  //CRIAÇÃO DE COMPETIÇÃO
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

  //PEGAR COMPETIÇÃO PELO ID
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

  //VERIFICAR SE O NOME DA COMPETIÇÃO EXISTE
  public checkExistsCompetition = async (name: string) => {
    try {
      const result = await CompetitionsDataBase.connection(TABLE_COMPETITIONS)
        .select()
        .where("name", name);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  // VERIFICAR SE A MODALIDADE DA COMPETIÇÃO EXISTE
  public checkExistsModality = async (modality: string) => {
    try {
      const result = await CompetitionsDataBase.connection(TABLE_COMPETITIONS)
        .select()
        .where("modality", modality);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public finishCompetition = async (id: string) => {
    try {
      await CompetitionsDataBase.connection(TABLE_COMPETITIONS)
        .where({ id })
        .update({ finished: true });
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

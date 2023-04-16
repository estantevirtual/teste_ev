import { ModalityDatabase } from "../data/ModalityDatabase";
import { ScoreDatabase } from "../data/ScoreDataBase";
import { ModalityRanking    } from "../models/ModalityDTO";
import { Score,scoreDTO } from "../models/ScoreDTO";
import { getRanking, isUnitValid  } from "../functions/functions";
import { IdGenerator } from "../services/IdGenerator";


const idGenerator = new IdGenerator()
const scoreDatabase = new ScoreDatabase()
const modalityDatabase = new ModalityDatabase()
export class ScoreBusiness {
    
    registerScore = async(modality_id:string, athlete:string, value:number, unit:string) => {
        try {
            if (!athlete || !modality_id || !value || !unit) {
                throw new Error("All fields must be filled: 'modalityId', 'athlete', 'value', 'unit'");
            }
            if (!isUnitValid(unit)) {
                throw new Error("Unit field can only accept two arguments: 's' or 'm'");   
            }
            const modality:any = await modalityDatabase.getById(modality_id)           

            const count:any = await scoreDatabase.checkOccurrence(athlete)
            
            if (modality[0].finished === 1) {
                throw new Error("The modality has been finished");
            }

            if (count === true) {
                throw new Error("The athlete has made all attempts.");  
            }
            
            if (modality.length < 1) {
                throw new Error("modality does not exist");
                
            }
            let id = idGenerator.generateId()
            let inputData:scoreDTO = {
                id,
                modalityId:modality_id,
                athlete,
                value,
                unit
            }
            return await scoreDatabase.NewScore(inputData)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAllData = async() => {
        try {
            let rows = await scoreDatabase.getAllData("score")
            if (rows == null || rows == undefined || rows.length < 1) { 
                throw new Error("No score was found ");    
            }
            return rows
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAllScoreModality = async (modalityId: string): Promise<ModalityRanking> => {
        try {
          const scores = await scoreDatabase.getAllScoreModality(modalityId);
          const modality:any = await modalityDatabase.getById(modalityId);

          if (modality.length < 1) {
            throw new Error("No data was found"); 
          }
      
          const modalityName:any = { modalityData: modality };
      
          const sortOrder = modality[0].type === "100m" ? "asc" : "desc";
          const ranking = getRanking(scores, sortOrder);
          
          return { ...modalityName, ranking };
        } catch (error:any) {
          throw new Error(error.message);
        }
      };
}
import { ModalityDatabase } from "../data/ModalityDatabase";
import { modalityDTO } from "../models/ModalityDTO";
import { isValidModalityInput,lowerCase} from "../models/functions/functions";
import { GeneratorId } from "../models/GenerateId";
const idGenerator = new GeneratorId
export class ModaBusiness {

    private modalityDatabase: ModalityDatabase;

    constructor(modalityDatabase?: ModalityDatabase) {
        this.modalityDatabase = modalityDatabase || new ModalityDatabase();
      }
      
    insertModality = async(name:string, type:string) => {
        let typeInLower
        try {
            if (!name || !type) {
                throw new Error("Must fill all the fields: 'name', 'type'");
            }
            if (!isValidModalityInput(type)) {
                throw new Error("type must be : '100m' or 'dardos'");
            } else{
                typeInLower = lowerCase(type)
            }
            const id = idGenerator.generateId()
            
            const input:modalityDTO = {
                id,
                name,
                type:typeInLower
            }
            await this.modalityDatabase.insertModality(input)
            return true
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAll = async() => {
        try {
            let rows = await this.modalityDatabase.getAll("modalitys")
            if (rows.length < 1) {
                throw new Error("No competitions was found :/");    
            }
            return rows
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    finishModality = async (id: string) => {
        try {
          if (!id) {
            throw new Error("ID must be passed as query");
          }
          const modality:any = await this.modalityDatabase.getById(id);

          if (modality.length < 1) {
            throw new Error("Modality does not exist");
          }
          await this.modalityDatabase.finishModality(id);
          return true

        } catch (error:any) {
          throw new Error(error.message);
        }
      };

      deleteModalityById = async (id:string):Promise<boolean> => {
        try {
            const modality:any = await this.modalityDatabase.getById(id)
            if (modality.length < 1) {
                throw new Error("The modality does not exist");     
            }
            await this.modalityDatabase.deleteModalityById(id)
            return true
        } catch (error:any) {
            throw new Error(error.message);
            
        }
      }
}
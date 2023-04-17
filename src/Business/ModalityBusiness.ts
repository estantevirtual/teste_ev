import { ModalityDatabase } from "../data/ModalityDatabase";
import { modalityDTO, modality } from '../models/ModalityDTO';
import { lowerCase, isUnitValid,isValidModalityInput } from "../functions/functions";
import { IdGenerator } from "../services/IdGenerator";



const idGenerator = new IdGenerator()

export class ModalityBusiness {

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
                throw new Error("type only accept two arguments: '100m' or 'dardos'");
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
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAllData = async() => {
        try {
            let rows = await this.modalityDatabase.getAllData("modalitys")
            if (rows == null || rows == undefined) {
                console.log(rows);  
                throw new Error("No modalitys was found ");    
            }
            return rows
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    finishModality = async (id: string) => {
        try {
          if (!id) {
            throw new Error("ID must be passed as parameter");
          }
          const modality:any = await this.modalityDatabase.getById(id);
          console.log(modality); 
          if (modality.length < 1) {
            throw new Error("Modality does not exist");
          }
          await this.modalityDatabase.finishModality(id);
        } catch (error:any) {
          throw new Error(error.message);
        }
    }
      deleteModalityById = async (id:string):Promise<boolean> => {
        try {
            const modality:any = await  this.modalityDatabase.getById(id)
            if (modality.length < 1) {
                throw new Error("The modality does not exist");     
            }
            await this.modalityDatabase.deleteModalityById
            return true
        } catch (error:any) {
            throw new Error(error.message);
            
        }
      }
    }

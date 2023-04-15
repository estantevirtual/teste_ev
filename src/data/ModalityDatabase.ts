import { modalityDTO } from "../models/ModalityDTO";
import { db } from "./BaseDataBase";
export class ModalityDatabase {

    insertCompetition = async(input:modalityDTO):Promise<void> => {
        try {
            await db.run(`INSERT INTO modalitys (id, name, type) VALUES(?,?,?)`,[input.id, input.name, input.type])
        } catch (error:any) {
            throw new Error(error.message);
        }
    } 
    getAll(tableName: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM ${tableName}`;
          db.all(query, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      }

      getById = async (id: string) => {
        return new Promise((resolve, reject) => {
          db.all(`SELECT * FROM modalitys WHERE id = ?`, [id], (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      };

      finishModality = async (id: string) => {
        try {
          await new Promise<void>((resolve, reject) => {
            db.run(
              `UPDATE modalitys SET finished = ? WHERE id = ?`,
              [true, id],
              (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              }
            );
          });
        } catch (error:any) {
          throw new Error(error.message);
        }
      };

      deleteModalityById = async (id: string): Promise<void> => {
        try {
          await new Promise<void>((resolve, reject) => {
            db.run(
              `DELETE FROM modalitys WHERE id = ?`,
              [id],
              (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              }
            );
          });
        } catch (error:any) {
          throw new Error(error.message);
          
        }
      };

      clearTable = async() => {
        await db.run(`DELETE FROM modalitys`)
    }
      
}
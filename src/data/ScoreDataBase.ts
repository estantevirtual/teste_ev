import { scoreDTO } from "../models/ScoreDTO";
import { db } from "./BaseDataBase";

export class ScoreDatabase {
    NewScore = async (input: scoreDTO): Promise<void> => {
        try {
            await db.run(`INSERT INTO score (id, modality_id, athlete, value, unit) VALUES(?,?,?,?,?)`, [input.id, input.modalityId, input.athlete, input.value, input.unit])
        } catch (error: any) {
            throw new Error(error.message);
        }
    }


    getAllData(tableName: string): Promise<any[]> {
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

 
    checkOccurrence = (name: string) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT COUNT(*) AS count FROM score WHERE athlete = ?`;
            db.get(sql, [name], (err:any, row:any) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                }
                if (row.count >= 3) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    getAllScoreModality = async (foreignKey: string): Promise<any[]> => {
        const query = 'SELECT * FROM score WHERE modality_id = ?';
        return new Promise((resolve, reject) => {
          db.all(query, [foreignKey], (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      };

    clearTable = async() => {
        await db.run(`DELETE FROM score`)
    }
}
import { db } from "../data/BaseDataBase";
export function isValidModalityInput(input: string): boolean {
    const validInputs = ['100m', 'dardos'];
    return validInputs.includes(input.toLowerCase());
}

export function lowerCase(input:string):string{
    const setLowerCase = input.toLowerCase()
    return setLowerCase
}

export function isUnitValid(input:string):boolean {
    const validInputs = ["s", "m"];
    return validInputs.includes(input.toLowerCase())
}

export const getRanking = (values: any[], sortOrder: string) => {
    return values
      .map(({ athlete, value, unit }) => ({ athlete, value, unit }))
      .sort((a, b) => sortOrder === "asc" ? a.value - b.value : b.value - a.value);
  }
  export function runDB() {
    try {
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS modalitys (id VARCHAR(255) PRIMARY KEY NOT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, finished BOOLEAN DEFAULT false )');
            
            db.run('CREATE TABLE IF NOT EXISTS score (id VARCHAR(255) PRIMARY KEY NOT NULL, modality_id VARCHAR(255) NOT NULL, athlete VARCHAR(255) NOT NULL, value REAL NOT NULL, unit VARCHAR(2) NOT NULL, FOREIGN KEY(modality_id) REFERENCES modalitys(id))');
    
          });
        console.log("Tables created succesfully");       
    } catch (error:any) {
        console.log(error.message);
    }
}

export async function closeDB(): Promise<void> {
    db.close((err) => {
        if (err) {
          console.error(err.message);
        } 
      });
  }
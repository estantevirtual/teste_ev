import { runDB,closeDB } from "../src/functions/functions";
import { ModalityDatabase } from "../src/data/ModalityDatabase";
import { ScoreDatabase } from "../src/data/ScoreDataBase";
import { ScoreBusiness } from "../src/Business/ScoreBusiness";
import { scoreDTO } from "../src/models/ScoreDTO";




const modalityDatabase = new ModalityDatabase() as jest.Mocked<ModalityDatabase>;
const scoreDatabase = new ScoreDatabase() as jest.Mocked<ScoreDatabase>
const scoreBusiness = new ScoreBusiness() as jest.Mocked<ScoreBusiness>

describe("Score Business", () => {

    beforeAll(async () => {
        await runDB();
    });

    afterAll(async () => {
        await closeDB();
    });

    describe("register Score", () => {

        test("Should throw an error if all fields are not filled", async () => {
            const mockInput: any = {
                modality_id: "",
                athlete: "",
                value: "",
                unit: ""
            };
            await expect(scoreBusiness.registerScore(mockInput.modality_id, mockInput.athlete, mockInput.value, mockInput.unit)).rejects.toThrow(new Error("All fields must be filled: 'modalityId', 'athlete', 'value', 'unit'"));
        });

        test("Should throw an error if unit is not valid", async () => {
            const mockInput: any = {
                modality_id: "1",
                athlete: "Tio da fanta",
                value: 10,
                unit: "jrd"
            };
            await expect(scoreBusiness.registerScore(mockInput.modality_id, mockInput.athlete, mockInput.value, mockInput.unit)).rejects.toThrow(new Error("Unit field can only accept two arguments: 's' or 'm'"));
        });

        test("Should throw an error if the modality has been finished", async () => {
            const mockModality: any = {
                id: "1",
                name: "modality",
                type: "100m",
            };
            await modalityDatabase.insertModality(mockModality);
            await modalityDatabase.finishModality("1")
            const mockInput: any = {
                modality_id: "1",
                athlete: "Little dolly",
                value: 15,
                unit: "s"
            };
            await expect(scoreBusiness.registerScore(mockInput.modality_id, mockInput.athlete, mockInput.value, mockInput.unit)).rejects.toThrow(new Error("The modality has been finished"));
        });
        test("Should throw an error if the athlete has made all attempts", async () => {
            const mockModality: any = {
                id: "3",
                name: "modality",
                type: "dardos",
                finished: 0
            };
            await modalityDatabase.insertModality(mockModality);
            const mockScore1: any = {
                id: "1",
                modalityId: "3",
                athlete: "Kakatoa",
                value: 5,
                unit: "s"
            };
            const mockScore2: any = {
                id: "2",
                modalityId: "3",
                athlete: "mugiwarano",
                value: 11,
                unit: "s"
            };
            const mockScore3: any = {
                id: "3",
                modalityId: "4",
                athlete: "Padre quevedo",
                value: 12,
                unit: "s"
            };
            await scoreDatabase.NewScore(mockScore1);
            await scoreDatabase.NewScore(mockScore2);
            await scoreDatabase.NewScore(mockScore3);
        });
           
    describe("getAllData", () => {
        test("Should return an array with data if there are scores", async () => {

            const mockData: scoreDTO = { id: "teste", modalityId: "1", athlete: "Tio", value: 10, unit: "s" };

            await scoreDatabase.NewScore(mockData)

            const result = await scoreBusiness.getAllData();

            expect(result.some(item => item.id === mockData.id && item.athlete === mockData.athlete)).toEqual(true);
        });

        test("Should throw an error if no scores are found", async () => {

            await scoreDatabase.clearTable()

            await expect(scoreBusiness.getAllData()).rejects.toThrow(new Error("No score was found "));
        });
    });
    describe("get All Scores", () => {

        test('should return the modality ranking', async () => {
            await modalityDatabase.clearTable()
            
            const modality = { id: '1', name: 'Test modality', type: 'dardos' };
            await modalityDatabase.insertModality(modality);
          
            const scores: scoreDTO[] = [
              { id: '1', athlete: 'Fnata Tio', value: 11, unit: 's', modalityId: '1' },
              { id: '2', athlete: 'Dolly little', value: 10, unit: 's', modalityId: '1' }
            ];
            await scoreDatabase.NewScore(scores[0]);
            await scoreDatabase.NewScore(scores[1]);
          

            const result = await scoreBusiness.getAllScoreModality('1');
          
            expect(typeof result).toBe('object')
        }
        );
    })

})})
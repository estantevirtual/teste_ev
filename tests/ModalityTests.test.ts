import { ModalityBusiness } from "../src/Business/ModalityBusiness";
import { ModalityDatabase } from "../src/data/ModalityDatabase";
import {runDB, closeDB} from "../src/functions/functions"
import {modalityDTO} from "../src/models/ModalityDTO"

const modalityDatabase = new ModalityDatabase() as jest.Mocked<ModalityDatabase>;
const modalityBusiness = new ModalityBusiness();

describe("Modality Business tests",()=>{
    beforeAll(async ()=>{
        await runDB();
    });
    afterAll(async ()=>{
        await closeDB();
    });
    describe("insertModality", ()=>{
        test("inserts a new modality, show a error when the name is missing", async ()=>{
            expect.assertions(1);
            try{
                await modalityBusiness.insertModality("","dardos");
            } catch(error:any){
                expect(error.message).toBe("Modality name is required");
            }
    });
    test("Should throw an error when type is not valid", async () => {
        expect.assertions(1);
        try {
          await modalityBusiness.insertModality("newmodality", "powerlifting");
        } catch (error: any) {
          expect(error.message).toBe("type only accept two arguments: '100m' or 'dardos'");
        }
      });
      test("Should insert modality successfully", async () => {
        const mockInput: modalityDTO = {
          id: "123",
          name: "modality",
          type: "dardos",
        };
        await expect(modalityBusiness.insertModality(mockInput.name, mockInput.type)).resolves.toEqual(true);
      });
    });
    describe("getAllData", () => {
        test("Should return modality data if a modality is inserted", async () => {
          try {
            const result = await modalityBusiness.getAllData();
            expect(result.length).toBeGreaterThan(0);
          } catch (error: any) {
            expect(error.message).toEqual("No modalitys was found :/");
          }
        });
      });
      describe("finishModality", () => {
          test("Should throw an error if ID is not passed as query", async () => {
              expect.assertions(1);
              try {
                  await modalityBusiness.finishModality("");
              } catch (error:any) {
                  expect(error.message).toBe("ID must be passed as query");
              }
          });
          test("Should throw an error if there is no Data", async () => {
              expect.assertions(1);
              const idMock = "teste"
              try {
                  await modalityBusiness.finishModality(idMock);
              } catch (error:any) {
                  expect(error.message).toBe("modality does not exist")
              }
          })
          test("Should end modalitys successfully", async () => {
              const mockInput: modalityDTO = {
                  id: "123",
                  name: "modality",
                  type: "dardos",
                };
              await modalityDatabase.insertModality(mockInput)
              await expect(modalityBusiness.finishModality(mockInput.id)).resolves.toEqual(true)
          })
      });
      describe("delete ", () => {
          test("Should throw an error if the modality does not exist", async () => {
              const mockId = "teste"
              try {
                  await modalityBusiness.deletemodalityById(mockId)
              } catch (error:any) {
                  expect(error.message).toBe("The modality does not exist")
              }
          })
          test("Should end modality succesfully", async() => {
              const mockInput: modalityDTO = {
                  id: "123",
                  name: "modality",
                  type: "100m",
                };
                await modalityDatabase.insertModality(mockInput)
                await expect(MODALITYBusiness.deleteModalityById("123")).resolves.toEqual(true)
          })
      })
    });
    
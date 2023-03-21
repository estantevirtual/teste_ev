// modelos 
export enum Modality{
    TENMILEHIKE = "TENMILEHIKE",
    TOFIVESWIN = "TOFIVESWIN",
    POWERLIFTER = "POWERLIFTER",
    


}
export class CompetitionDTO {
    constructor(
        public readonly id: string,
        public readonly Modality: Modality
    ){
        this.id= id
        this.Modality = Modality
    }
}

export interface CompInputDTO{
    Modality:string
}
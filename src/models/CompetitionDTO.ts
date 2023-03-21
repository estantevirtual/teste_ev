// modelos 
export enum Cmodality{
    TENMILEHIKE = "TENMILEHIKE",
    TOFIVESWIN = "TOFIVESWIN",
    POWERLIFTER = "POWERLIFTER",
    


}
export class CompetitionDTO {
    constructor(
        public readonly id: string,
        public readonly modality: Cmodality
    ){
        this.id= id
        this.modality = modality
    }
}
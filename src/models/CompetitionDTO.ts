// modelos 

export class CompetitionDTO {
    constructor(
        public readonly id: string,
        public readonly name: string
    ){
        this.id= id
        this.name = name
    }
}

export interface CompInputDTO{
    name:string
}
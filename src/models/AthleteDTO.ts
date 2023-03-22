export enum unity{
    METROS = "m",
    SEGUNDOS = "s"
}
export class AthleteDTO{
    constructor (
        public readonly id: string,
        public readonly name: string,
        public readonly atletas: string,
        public readonly value: string,
        public readonly unidade: unity,
       

    ){
        this.id = id;
        this.name = name;   
        this.atletas = atletas;
        this.value = value;
        this.unidade = unidade;
        

    }
}
export interface AthleteInputDTO{
    name:string;
    atletas:string;
    value:string;
    unidade:string;

}
export interface GetAllAthleteValues{
    id:string;
    atletas:string;
    value:string;

}

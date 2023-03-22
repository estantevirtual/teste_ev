export enum unity{
    METROS = "m",
    SEGUNDOS = "s"
}
export enum modality{
    CEMRASOS = "100M RASOS",
    DARDOS = "DARDOS"
}
export class AthleteDTO{
    constructor (
        public readonly id: string,
        public readonly competicao: modality,
        public readonly atletas: string,
        public readonly value: string,
        public readonly unidade: unity,
       

    ){
        this.id = id;
        this.competicao = competicao;   
        this.atletas = atletas;
        this.value = value;
        this.unidade = unidade;
        

    }
}
export interface AthleteInputDTO{
    competicao:string;
    atletas:string;
    value:string;
    unidade:string;

}
export interface GetAllAthleteValues{
    id:string;
    atletas:string;
    value:string;

}

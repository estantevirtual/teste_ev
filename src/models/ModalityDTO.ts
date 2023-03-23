
export class ModalityDTO {
    constructor (
        public readonly id: string,
        public readonly competicao: string,
        public readonly atleta: string,
        public readonly value: string,
        public readonly unidade: string,
    ) {
        this.id = id
        this.competicao = competicao
        this.atleta = atleta
        this.value = value
        this.unidade = unidade     
    }
}
export interface inputModalityDTO {
    competicao: string,
    atleta: string,
    value: string,
    unidade: string,
    
}

export interface inputGetModalityDTO {
    id: string,
    competicao: string,
    atleta: string
    
}
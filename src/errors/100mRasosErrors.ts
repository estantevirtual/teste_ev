import { CustomError } from "./CustomError";
export class  InvalityModality extends CustomError {
    constructor () {
        super (422, "A competiçao necessita ser: 100m Rasos.")
    }
}
export class  InvalityUnity extends CustomError {
    constructor () {
        super (422, "A unidade nescessita ser: s (Segundos).")
    }
}
export class DuoName extends CustomError {
    constructor () {
        super (409, "Atleta ja registrado.")
    }
}
export class MissingNameOrId extends CustomError {
    constructor () {
        super (422, "Provide the id or the name of the band.")
    }
}
export class AthleteIdNotFound extends CustomError {
    constructor () {
        super (404, "Atleta não encontrado.")
    }
}
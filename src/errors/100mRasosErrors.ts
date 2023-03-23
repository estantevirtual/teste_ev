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

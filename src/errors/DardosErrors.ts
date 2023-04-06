import { CustomError } from "./CustomError";
export class  InvalityModalityD extends CustomError {
    constructor () {
        super (422, "A competiçao necessita ser: DARDOS.")
    }
}
export class  InvalityUnityD extends CustomError {
    constructor () {
        super (422, "A unidade nescessita ser: m (metros).")
    }
}
export class DuoNameD extends CustomError {
    constructor () {
        super (409, "Atleta ja registrado.")
    }
}

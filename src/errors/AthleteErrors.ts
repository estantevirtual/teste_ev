import { CustomError } from "./CustomError";
export class InvalidUnity extends CustomError {
    constructor () {
        super (422, "A unidade prescisa ser s(segundos) ou m(metros).")
    }
}
export class InvalidCompetition extends CustomError {
    constructor () {
        super (422, "A modalidade necessita ser 100m RASOS OU DARDOS.")
    }
}
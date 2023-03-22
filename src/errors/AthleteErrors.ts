import { CustomError } from "./CustomError";
export class InvalidUnity extends CustomError {
    constructor () {
        super (422, "A unidade prescisa ser s(segundos) ou m(metros).")
    }
}
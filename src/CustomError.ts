export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}
export class DuoCompetition extends CustomError {
    constructor () {
        super (409, "Competição ja registrada!")
    }
}
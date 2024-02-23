import { CustomError } from "./CustomError";

export class CompetitionAlreadyCompleted extends CustomError {
  constructor() {
    super(400, "Competition Already Completed.");
  }
}

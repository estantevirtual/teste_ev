import { CustomError } from "./CustomError";

export class CompetitionExists extends CustomError {
  constructor() {
    super(400, "Competition already exists.");
  }
}

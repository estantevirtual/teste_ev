import { CustomError } from "./CustomError";

export class CompetitionNotFound extends CustomError {
  constructor() {
    super(400, "Competition not found.");
  }
}

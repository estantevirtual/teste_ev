import { CustomError } from "./CustomError";

export class AthletesExists extends CustomError {
  constructor() {
    super(400, "Athletes already exists.");
  }
}
import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError {
  constructor() {
    super(400, "Invalid request, one or more empty fields.");
  }
}

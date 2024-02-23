import { CustomError } from "./CustomError";

export class InvalidTypeOf extends CustomError {
  constructor() {
    super(400, "Fields must receive data of type string");
  }
}

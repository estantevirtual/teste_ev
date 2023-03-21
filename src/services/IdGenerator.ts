import { v4 } from "uuid"
import { GeneratorId } from "../models/GenerateId"


export class IdGenerator implements GeneratorId {
    generateId (): string {
        return v4()
    }
}
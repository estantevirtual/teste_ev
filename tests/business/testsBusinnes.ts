import { CemMBusiness } from "../../src/Business/100mRasosBusiness";
import { DardosBusiness } from "../../src/Business/DardosBusiness";

const modalityTestsCem = new CemMBusiness(
    new cemMocks(),
    new genIdMock()
);
import { InputJsonValue } from "../../types";
import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";

export type SystemCreateInput = {
  clientId?: string | null;
  configuration?: InputJsonValue;
  domains?: DomainWhereUniqueInput | null;
  name?: string | null;
};

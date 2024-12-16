import { JsonValue } from "type-fest";
import { Domain } from "../domain/Domain";

export type System = {
  clientId: string | null;
  configuration: JsonValue;
  createdAt: Date;
  domains?: Domain | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};

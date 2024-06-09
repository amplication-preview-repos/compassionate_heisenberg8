import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SystemWhereInput = {
  clientId?: StringNullableFilter;
  configuration?: JsonFilter;
  domains?: DomainWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};

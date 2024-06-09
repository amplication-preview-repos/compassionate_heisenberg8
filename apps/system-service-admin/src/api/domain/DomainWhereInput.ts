import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SystemWhereUniqueInput } from "../system/SystemWhereUniqueInput";

export type DomainWhereInput = {
  domainName?: StringNullableFilter;
  id?: StringFilter;
  system?: SystemWhereUniqueInput;
};

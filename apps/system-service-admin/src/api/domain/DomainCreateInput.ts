import { SystemWhereUniqueInput } from "../system/SystemWhereUniqueInput";

export type DomainCreateInput = {
  domainName?: string | null;
  system?: SystemWhereUniqueInput | null;
};

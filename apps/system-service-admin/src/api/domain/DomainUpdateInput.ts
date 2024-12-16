import { SystemWhereUniqueInput } from "../system/SystemWhereUniqueInput";

export type DomainUpdateInput = {
  domainName?: string | null;
  system?: SystemWhereUniqueInput | null;
};

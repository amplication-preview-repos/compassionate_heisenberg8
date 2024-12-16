import { Domain as TDomain } from "../api/domain/Domain";

export const DOMAIN_TITLE_FIELD = "domainName";

export const DomainTitle = (record: TDomain): string => {
  return record.domainName?.toString() || String(record.id);
};

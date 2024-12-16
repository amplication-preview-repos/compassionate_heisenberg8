import { System as TSystem } from "../api/system/System";

export const SYSTEM_TITLE_FIELD = "name";

export const SystemTitle = (record: TSystem): string => {
  return record.name?.toString() || String(record.id);
};

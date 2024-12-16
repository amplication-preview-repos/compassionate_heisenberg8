import { System } from "../system/System";

export type Domain = {
  createdAt: Date;
  domainName: string | null;
  id: string;
  system?: System | null;
  updatedAt: Date;
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOMAIN_TITLE_FIELD } from "../domain/DomainTitle";

export const SystemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Systems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="clientID" source="clientId" />
        <TextField label="configuration" source="configuration" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Domains" source="domain.id" reference="Domain">
          <TextField source={DOMAIN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DOMAIN_TITLE_FIELD } from "../domain/DomainTitle";

export const SystemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="clientID" source="clientId" />
        <TextField label="configuration" source="configuration" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Domains" source="domain.id" reference="Domain">
          <TextField source={DOMAIN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

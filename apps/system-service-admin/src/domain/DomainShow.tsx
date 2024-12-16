import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SYSTEM_TITLE_FIELD } from "../system/SystemTitle";

export const DomainShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="domainName" source="domainName" />
        <TextField label="ID" source="id" />
        <ReferenceField label="System" source="system.id" reference="System">
          <TextField source={SYSTEM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DomainTitle } from "../domain/DomainTitle";

export const SystemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="clientID" source="clientId" />
        <div />
        <ReferenceInput source="domains.id" reference="Domain" label="Domains">
          <SelectInput optionText={DomainTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};

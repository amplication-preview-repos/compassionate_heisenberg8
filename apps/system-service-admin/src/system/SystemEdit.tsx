import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DomainTitle } from "../domain/DomainTitle";

export const SystemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="clientID" source="clientId" />
        <div />
        <ReferenceInput source="domains.id" reference="Domain" label="Domains">
          <SelectInput optionText={DomainTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SystemTitle } from "../system/SystemTitle";

export const DomainCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="domainName" source="domainName" />
        <ReferenceInput source="system.id" reference="System" label="System">
          <SelectInput optionText={SystemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

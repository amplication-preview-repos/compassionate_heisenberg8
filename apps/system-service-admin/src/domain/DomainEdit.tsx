import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SystemTitle } from "../system/SystemTitle";

export const DomainEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="domainName" source="domainName" />
        <ReferenceInput source="system.id" reference="System" label="System">
          <SelectInput optionText={SystemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SystemList } from "./system/SystemList";
import { SystemCreate } from "./system/SystemCreate";
import { SystemEdit } from "./system/SystemEdit";
import { SystemShow } from "./system/SystemShow";
import { DomainList } from "./domain/DomainList";
import { DomainCreate } from "./domain/DomainCreate";
import { DomainEdit } from "./domain/DomainEdit";
import { DomainShow } from "./domain/DomainShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"System Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="System"
          list={SystemList}
          edit={SystemEdit}
          create={SystemCreate}
          show={SystemShow}
        />
        <Resource
          name="Domain"
          list={DomainList}
          edit={DomainEdit}
          create={DomainCreate}
          show={DomainShow}
        />
      </Admin>
    </div>
  );
};

export default App;

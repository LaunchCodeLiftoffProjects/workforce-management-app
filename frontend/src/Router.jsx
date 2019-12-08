import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import listEmployer from './pages/listEmployer';
import Layout from './Layout';
import timeclock from './pages/timeclock';
import crudClients from "./pages/crudClients";
import addLocations from './pages/addLocations';
import listEmployer from './pages/listEmployer';
import Editlocations from './pages/editLocations';
import ListStaff from "./pages/ListStaff";
import AddStaff from "./pages/AddStaff";
import Layout from "./Layout";
import EditStaff from "./pages/EditStaff";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/" exact component={Page1} />
          <Route path="/ListStaff" exact component={ListStaff} />
          <Route path="/EditStaff/:id" exact component={EditStaff} />
          <Route path="/AddStaff" exact component={AddStaff} />
          <Route path="/crudClients" exact component={crudClients} />
           <Route path="/timeclock" exact component={timeclock} />
           <Route path="/addLocations" exact component={addLocations} />
           <Route path="/listEmployer" exact component={listEmployer} />
           <Route path="/editLocations" exact component={Editlocations} />
        </div>
      </Layout>
    </Router>
  );
};

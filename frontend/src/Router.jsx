import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import ListStaff from "./pages/ListStaff";
import AddStaff from "./pages/AddStaff";
import EditStaff from "./pages/EditStaff";
import Page5 from "./pages/page5";

import Layout from "./Layout";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
          <Route path="/page3" exact component={Page3} />
          <Route path="/ListStaff" exact component={ListStaff} />
          <Route path="/EditStaff/:id" exact component={EditStaff} />
          <Route path="/AddStaff" exact component={AddStaff} />
          <Route path="/page5" exact component={Page5} />
        </div>
      </Layout>
    </Router>
  );
};

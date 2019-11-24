import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import page1 from "./pages/page1";
import page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import page5 from "./pages/page5";
import Layout from "./Layout";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/page2" exact component={page2} />
          <Route path="/page1" exact component={page1} />
          <Route path="/page3" exact component={Page3} />
          <Route path="/page4" exact component={Page4} />
          <Route path="/page5" exact component={page5} />
        </div>
      </Layout>
    </Router>
  );
};

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageOne from "./pages/page1";
import PageTwo from "./pages/page2";
import PageThree from "./pages/page3";
import PageFour from "./pages/page4";
import PageFive from "./pages/page5";
import Layout from "./Layout";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/" exact component={PageOne} />
          <Route path="/page2" exact component={PageTwo} />
          <Route path="/page3" exact component={PageThree} />
          <Route path="/page4" exact component={PageFour} />
          <Route path="/page5" exact component={PageFive} />
        </div>
      </Layout>
    </Router>
  );
};

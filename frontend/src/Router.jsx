import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page1 from './pages/page1';
import Layout from './Layout';
import timeclock from './pages/timeclock';
import crudClients from "./pages/crudClients";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: '100px' }}>
          <Route path="/" exact component={Page1} />
          <Route path="/crudClients" exact component={crudClients} />
           <Route path="/timeclock" exact component={timeclock} />
        </div>
      </Layout>
    </Router>
  )
}
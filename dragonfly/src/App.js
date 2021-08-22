
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Layout from "../src/components/Layout"
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";


function App() {
  
  return (
    <BrowserRouter>
      {" "}
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/index" />
          </Route>
          <Route path="/index">
            <LandingPage />            
          </Route>
          <Route path="/results">
            <Results />            
          </Route>
          


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}



export default App;

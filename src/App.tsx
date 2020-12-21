import React from "react";
import { Navbar } from "./components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";

const App: React.FunctionComponent = () => {

  return (

    <BrowserRouter>

    <Navbar />
      <div className="container">
              <Switch>
                  <Route component={TodosPage} path={'/'} exact={true}/>
                  <Route component={AboutPage} path={'/about'} />
              </Switch>
      </div>
    </BrowserRouter>

  );
};

export default App;

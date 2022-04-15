import React from "react";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

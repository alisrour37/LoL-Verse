
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login"
import Register from "./views/Register"
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import { ProtectedRoute } from "./protected.routes";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Switch>
        <Router history={hist}>
          <Switch>
            <Route exact  path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute path="/admin" render={props => <AdminLayout {...props} />} />
          </Switch>
        </Router>
      </Switch>
    </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>
  ,
  document.getElementById("root")
);

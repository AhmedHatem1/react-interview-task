import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "./bootstrap.theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

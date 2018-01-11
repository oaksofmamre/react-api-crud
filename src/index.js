import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import UserList from "./Component/UserList";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<UserList />, document.getElementById("user-list"));
registerServiceWorker();

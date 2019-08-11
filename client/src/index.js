/*
// modules/index.js
export { Posts } from "./post";
export { User } from "./user";
export { Auth } from "./auth";
*/

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

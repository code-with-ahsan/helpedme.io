import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import useUserStore from "./store/user.store";
import { getAuth } from "@firebase/auth";

initializeApp(firebaseConfig);
const loadUser = useUserStore.getState().loadUser;

const auth = getAuth();

auth.onAuthStateChanged(() => {
  loadUser();
});

loadUser();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

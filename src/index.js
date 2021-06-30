import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from "firebase/app";
// this is the firebase config which we get when we make a database for our app
// also firebase is preferred because it is a real time data base so that if the state is changed heavily in future
// then those can be done directly in the database and correspondingly everywhere,where the app in open refreshing takes
// place automatically when we define the listener in are app namely onSnapshot

var firebaseConfig = {
  apiKey: "AIzaSyCkbplbZcrlRkmx0SC8zTu0yu7GcrdrRpE",
  authDomain: "ipod-1b4ea.firebaseapp.com",
  projectId: "ipod-1b4ea",
  storageBucket: "ipod-1b4ea.appspot.com",
  messagingSenderId: "1010637550540",
  appId: "1:1010637550540:web:ca64b682507e6990ede369",
};
// var firebaseConfig = {
//   apiKey: "AIzaSyAY1zwCXFTFM2IOY3mxRPSElxyUXP3kMBE",
//   authDomain: "ipod-c68e1.firebaseapp.com",
//   projectId: "ipod-c68e1",
//   storageBucket: "ipod-c68e1.appspot.com",
//   messagingSenderId: "102707414569",
//   appId: "1:102707414569:web:b98e4cfdf6c73763cafe38"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//here we added the app component inside the div with id root
ReactDOM.render(<App />, document.getElementById("root"));

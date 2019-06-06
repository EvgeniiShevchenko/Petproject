import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import NavBar from "./components/navbar/container";
import Body from "./components/body/container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path = "/" component = {NavBar} />
        <Route path = "/" component = {Body} />
      </BrowserRouter>
    </>
  );
}

export default App;

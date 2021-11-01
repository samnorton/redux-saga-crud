import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddEditUserPage from "./pages/AddEditUserPage";
import UserInfoPage from "./pages/UserInfoPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add-user" component={AddEditUserPage} />
          <Route path="/edit-user/:id" component={AddEditUserPage} />
          <Route path="/user-info/:id" component={UserInfoPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/homecomponent/Navbar";
import Home from "./components/homecomponent/Home";
import About from "./components/homecomponent/About";
import Contact from "./components/homecomponent/Contact";
import Services from "./components/homecomponent/Services";
import Footer from "./components/homecomponent/Footer";

import Login from "./components/logcomponent/Login";
import Signup from "./components/logcomponent/Signup";
import Logout from "./components/logcomponent/Logout";

import Dashboard from "./components/Admin/Dashboard";
import Adminmenu from "./components/Admin/Adminmenu";
import Feedback from "./components/Admin/Feedback";
import Report from "./components/Admin/Reports";
import Customer from "./components/Admin/Customers";
import Sellproducteditfrom from "./components/Admin/Sellproducteditfrom";
import Sellproduct from "./components/Admin/Sellproducts";

import Buysellmenu from "./components/BuySell/buysellmenu";
import Buy from "./components/BuySell/Buy";
import Sell from "./components/BuySell/Sell";
import Selleditfrom from "./components/BuySell/selleditfrom";
import Selledit from "./components/BuySell/Selledit";
import Message from "./components/BuySell/message";
import userContext from "./context/userContext";
const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post("/user/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenResponse.data) {
        const userRes = await axios.get("/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({ token, user: userRes.data });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <>
      <userContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route exact path="/contact">
            <Contact />
          </Route> */}
          {/* <Route exact path="/services">
            <Services />
          </Route> */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {/* <Route exact path="/adminmenu">
            <Adminmenu />
          </Route> */}
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/feedback">
            <Feedback />
          </Route>
          <Route exact path="/customer">
            <Customer />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route exact path="/sellproduct">
            <Sellproduct />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/editadmin/:id">
            <Sellproducteditfrom />
          </Route>
          <Route exact path="/buysellmenu">
            <Buysellmenu />
          </Route>
          <Route exact path="/buy">
            <Buy />
          </Route>
          <Route exact path="/sell">
            <Sell />
          </Route>
          <Route exact path="/edit/:id">
            <Selleditfrom />
          </Route>
          <Route exact path="/selledit">
            <Selledit />
          </Route>
          <Route exact path="/message">
            <Message />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </userContext.Provider>
    </>
  );
};
export default App;

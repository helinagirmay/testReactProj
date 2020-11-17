import React from "react";
import "./App.css";
import EnhanceLike from "./HOC/home";
import { Button, Card, Row, Col, Layout } from "antd";
import Nav from "./CommonComponent/nav";
import { BrowserRouter, Link, Route, Redirect, NavLink } from "react-router-dom";
import Login from "./HOC/login";
import MusicList from "./HOC/listOfSongs";

class Loggg extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Nav />
        <EnhanceLike />
        {/* <Login /> */}
        {/* <MusicList /> */}
      </Layout>
    );
  }
}
class Dash extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Nav isLoggedIn='true' />
        <MusicList />
      </Layout>
    );
  }
}
function App() {
  return (
    <div className="App" data-testid="AppTest">
     
      <BrowserRouter>
        <div className="sans-serif">
          <Route path="/" exact component={Loggg} />
          <Route path="/dashboard" component={Dash}></Route>
          <Route path="/Login" component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

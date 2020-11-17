import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

class Nav extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div data-testid="nav">
        <Header>
          <div className="logo" />
          <Menu data-testid="navMenu"
            theme="dark"
            mode="horizontal"
            style={{ float: "right" }}
            defaultActiveFirst={1}
          >
            <Menu.Item key="1">
              {/* Public Page */}
              <BrowserRouter>
              {this.props.isLoggedIn && this.props.isLoggedIn.length ? []:
                <Link to="/">Public Page</Link>
              }
              </BrowserRouter>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.login}>
               {/* <BrowserRouter>  */}
              
                {this.props.isLoggedIn && this.props.isLoggedIn.length ? 
                <Link to="/">Logout</Link>
                :
                <Link to="/Login">Login</Link>
              }
              {/* </BrowserRouter> */}
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import { Button, Card, Tabs, Form, Input, Checkbox } from "antd";


const { TabPane } = Tabs;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: props.visible,
      valueName: '',
      valuePass:'',
      path: [this.props.history]
    };
  }
  Cancel = () => {
    this.setState({
      visible: false,    
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  navigate = () => { 
      if(this.state.valueName.length && this.state.valuePass.length){
          this.props.history.push({
            pathname: "/dashboard",
            state: { Name: this.state.valueName }
          });         
      } 
  }

  handleChange = (event) => {
    this.setState({valueName: event.target.value});
  }

  handlePassChange = (event) => {
    this.setState({valuePass: event.target.value});
  }

  render() {
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    return (
      <div data-testid="login">
        <Card
          //   bordered={false}
          style={{
            maxWidth: window.innerWidth - 910,
            height: window.innerHeight - 110,
            display: "block",
            margin: "auto",
            // paddingTop: '3%',
            background: "#eeeeee",

            // marginRight: "auto",
          }}
        >
          <Tabs defaultActiveKey="2" centered>
            <TabPane tab="Sign-In" key="1">
              <Form
                style={{ paddingTop: "7%" }}
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input  value={this.state.value} onChange={this.handleChange}  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password value={this.state.value} onChange={this.handlePassChange} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item style={{ paddingTop: "3%" }} {...tailLayout}>
                  <Button
                  loading={this.state.loading}
                //   onClick={this.handleOk}
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "70%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block  ",
                    }}
                  onClick={this.navigate}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </Card>
        {/* </Modal> */}
      </div>
    );
  }
}

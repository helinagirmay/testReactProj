import React from "react";
import HOC from "./hoc";
import {
  Layout,
  Card,
  Switch,
  Table,
  Row,
  Col,
  Tag,
  Space,
  Modal,
  Form,
  Input,
  Button,
} from "antd";
import {
  DeleteOutlined,
  PlayCircleOutlined,
  CloseOutlined,
  CheckOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import "./style.css";

const { Content } = Layout;

const { Meta } = Card;

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      switch: false,
      valuePass: "",
      newComponent: false,
    };
  }

  handleClick = () => {
    console.log("propsssss", this.props.state.name);
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  switched = (checked) => {
    console.log("cjkk", checked);
    this.setState({
      switch: checked,
    });
  };
  handleChange = (event) => {
    this.setState({ valuePass: event.target.value });
  };

  password = () => {
    console.log("valuePass", this.state.valuePass);
    if (this.state.valuePass === "hello") {
      this.setState({
        newComponent: true,
        switch: false,
      });
    }
  };

  render() {
    console.log("props on list song", this.props, this.state.switch);
    const musicCardList = [
      {
        id: 1,
        catagory_id: 100,
        name: "ትዝታ",
        img: "./Assets/kirar.jpeg",
      },
      {
        id: 3,
        catagory_id: 100,
        name: "ባቲ",
        img: "./Assets/bati.jpeg",
      },
      {
        id: 2,
        catagory_id: 100,
        name: "አምባሠል",
        img: "./Assets/ambasel.jpeg",
      },
      {
        id: 4,
        catagory_id: 100,
        name: "አንቺ ሄዬ",
        img: "./Assets/anchiiHoye.jpeg",
      },
      {
        id: 5,
        catagory_id: 200,
        name: "አንቺ ሄዬ",
        img: "./Assets/bbatii.jpeg",
      },
    ];
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Artist Name",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            {/* <a>Invite {record.name}</a> */}
            <a>
              <PlayCircleOutlined />
            </a>
            {this.state.newComponent ? (
              <>
                <a>
                  <DeleteOutlined twoToneColor={"red"} />
                </a>
                <a>
                  <FolderAddOutlined />
                </a>
              </>
            ) : (
              []
            )}
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: "1",
        name: "Adwa",
        address: "Gigi",
      },
      {
        key: "2",
        name: "Ethiopia",
        address: "Teddy Afro",
      },
      {
        key: "3",
        name: "Monalisa",
        address: "Tilahun Gessese",
      },
    ];

    return (
      <div>
        <Content>
          <div className="site-layout-content">
            <Row style={{ marginLeft: "65%", paddingBottom: "1%" }}>
              <p>Get additional access</p>
              &nbsp; &nbsp;
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={this.switched}
              />{" "}
            </Row>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              style={{ width: "80%", paddingLeft: "16%" }}
            />
          </div>
        </Content>
        {this.state.switch &&
          (console.log("yesss0"),
          (
            <Modal
              title="Admin Password"
              visible={this.state.switch}
              onCancel={!this.state.switch}
              footer={[
                <>
                  <Button key="submit" onClick={this.password}>
                    OK
                  </Button>
                </>,
              ]}
            >
              <Form>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    // value={this.state.valuePass}
                    onChange={this.handleChange}
                  />
                </Form.Item>
              </Form>
            </Modal>
          ))}
      </div>
    );
  }
}

const MusicList = HOC(Song);

export default MusicList;

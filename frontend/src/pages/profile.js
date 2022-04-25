import React, { useState, useEffect, useContext } from "react";
import Default from "../components/Default";
import { AuthContext } from "../components/authContext";
import { useHistory } from "react-router-dom";
import { Table, Row, Col, Button, Modal, Form, Input, DatePicker } from "antd";
import "./profile.css";
export default function Profile() {
  const { auth, setAuth } = useContext(AuthContext);
  let history = useHistory();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    
    age:"",
    phone: "",
    driverLicense: "",
    expDate: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "车名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "价格",
      dataIndex: "rentPerHour",
      key: "rentPerHour",
    },
    {
      title: "订单创建时间",
      dataIndex: "cteateTime",
      key: "cteateTime",
    },
  ];

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const onCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = () => {};
  const getValueFromEvent = (e) => {
    let { value } = e.target;
    // const reg = /^\d+$/;
    // if (!reg.test(value.trim())) {
    //   return "";
    // }
    return value;
  };

  useEffect(() => {
    if (auth === false) {
      history.push("/");
    }
    const info = JSON.parse(sessionStorage.getItem("userInfo")) || {};
    console.log(3333333, info);
    // TODO:此处根据id获取个人详细信息，并设置setUserInfo
    setUserInfo({
      username: info.username,
      password: info.password,
      fullName: info.fullName,
      email: info.email,
      age: info.age,
      phone: info.phone,
      driverLicense: info.driverLicense,
      // 时间格式 YYYY-MM-DD
      expDate: info.expDate       ///YYYY-MM-DD/.test(info.expDate || "") ? info.expDate || "" : "",
    });

    // 获取表格数据TODO:
    const list = [
      {
        name: "车名",
        rentPerHour: 100,
        cteateTime: "2022-04-22",
      },
      {
        name: "车名",
        rentPerHour: 100,
        cteateTime: "2022-04-22",
      },
    ];
    setDataSource(list.map((item,index)=>{
        item.key = index;
        return item
    }))
  }, []);
  return (
    <Default>
      <div className="contain">
        <h2>个人信息</h2>
        <Row className="info-wrap">
          <Col span={6}>
            <span>username：</span>
            {userInfo.username}
          </Col>
          <Col span={6}>
            <span>password：</span>
            {userInfo.password}
          </Col>
          <Col span={6}>
            <span>fullName：</span>
            {userInfo.fullName}
          </Col>
          <Col span={6}>
            <span>email：</span>
            {userInfo.email}
          </Col>
        </Row>
        <Row className="info-wrap">
          <Col span={6}>
            <span>age：</span>
            {userInfo.age}
          </Col>
          <Col span={6}>
            <span>phone：</span>
            {userInfo.phone}
          </Col>
          <Col span={6}>
            <span>driver license：</span>
            {userInfo.driverLicense}
          </Col>
          <Col span={6}>
            <span>expiration date：</span>
            {userInfo.expDate}
          </Col>
        </Row>
        <Row>
          <Button
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            修改个人信息
          </Button>
        </Row>
        <h3>历史订单</h3>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <Modal
        title="修改个人信息"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={onCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ ...userInfo }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="username"
            name="username"
            rules={[{ required: true, message: "请输入username" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="password："
            name="password"
            getValueFromEvent={getValueFromEvent}
            rules={[{ required: true, message: "请输入password!" }]}
          >
            <Input maxLength={16} />
          </Form.Item>
          <Form.Item
            label="fullName："
            name="fullName"
            required
            getValueFromEvent={getValueFromEvent}
            rules={[{ required: true, message: "请输入 fullName!" }]}
          >
            <Input maxLength={16} />
          </Form.Item>
          <Form.Item
            label="email："
            name="email"
            required
            getValueFromEvent={getValueFromEvent}
            rules={[{ required: true, message: "请输入 email!" }]}
          >
            <Input maxLength={16} />
          </Form.Item>
          <Form.Item
            label="age："
            name="dob"
            required
            getValueFromEvent={getValueFromEvent}
            rules={[{ required: true, message: "请输入 age!" }]}
          >
            <Input maxLength={16} />
          </Form.Item>
          <Form.Item
            label="phone："
            name="phone"
            required
            getValueFromEvent={getValueFromEvent}
            rules={[{ required: true, message: "请输入 phone!" }]}
          >
            <Input maxLength={16} />
          </Form.Item>
          <Form.Item
            label="driver license："
            name="driverLicense"
            required
            getValueFromEvent={getValueFromEvent}
            rules={[{ required: true, message: "请输入 driver license!" }]}
          >
            <Input maxLength={16} />
          </Form.Item>
          <Form.Item
            label="expiration date："
            name="expDate"
            // getValueFromEvent={this.getValueFromTime}
            rules={[{ required: true, message: "请输入 expiration date!" }]}
          >
            <DatePicker value={userInfo.expDate}></DatePicker>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Default>
  );
}

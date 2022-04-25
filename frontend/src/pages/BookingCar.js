import React, { PureComponent, useState } from "react";
import Default from "../components/Default";
import { Row, Button,message, Modal, Col, DatePicker, Form, Input } from "antd";
import "./BookingCar.css";
import StripeCheckout from "react-stripe-checkout";

function onToken(token){
  //例子：https://github.com/azmenak/react-stripe-checkout 
  //如何用react stripe checkout
  //TO DO: token 
  console.log(token);
}

const { RangePicker } = DatePicker;
class BookingCar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      carInfo: props.location.state,
      startTime: "",
      endTime: "",
      days: 0,
      // 以下为表单元素
      money: 0,
      cardNo: "",
      validTime: "",
      cvs: "",
    };
  }
  createOrder = () => {
    if (!this.state.days) {
      message.error('请选择预定日期')
      return;
    }
    this.setState({
      ...this.state,
      isModalVisible: true,
    });
  };

  
  onChange = ([start, end]) => {
    const days = end.diff(start, "days");
    console.log(5555555,days)
    const price = this.state.carInfo.rentPerHour.match(/\d+/g)[0]
    this.setState({
      ...this.state,
      days,
      startTime:start.format('YYYY-MM-DD'),
      endTime:end.format('YYYY-MM-DD'),
      money: price * days,
    });
  };
  onCancel = () => {
    this.setState({ ...this.state, isModalVisible: false });
  };
  getValueFromEvent = (e) => {
    let { value } = e.target;
    const reg = /^\d+$/;
    if (!reg.test(value.trim())) {
      return "";
    }
    return value;
  };
  getValueFromTime = (e) => {
    return e.format('YYYY-MM-DD')
  };
  onValidCardNo = ({ getFieldValue }) => ({
    validator(_, value) {
      const reg = /^\d{16}$/;
      const val = getFieldValue('cardNo')
      if (val && reg.test(val)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('请输入16位数字的卡号'));
    },
  })
  onValidCvs = ({ getFieldValue }) => ({
    validator(_, value) {
      const reg = /^\d{3}$/;
      const val = getFieldValue('cvs')
      if (val && reg.test(val)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('输入3位cvs'));
    },
  })
  onFinish = (vals) => {
    // TODO:
    // 此处即可调用接口生成订单
    const order = {
      ...vals,
      carInfo:this.state.carInfo,
      startTime:this.state.startTime,
      endTime:this.state.endTime,
    }
    console.group(555, order);
  };
  disabledDate=(currentDate)=>{
   return currentDate.isBefore(this.state.startTime)
  }
  render() {
    const {
      isModalVisible,
      carInfo,
      money,
      cardNo,
      validTime,
      cvs,
    } = this.state;
    return (
      <Default>
        <div className="booking-wrap">
          <h1>Bookingpage</h1>
          <div className="order-info">
            <img className="car-img" src={carInfo.image} alt="car" />
            <div className="order-ctn">
              <Row className="info-wrap">
                <Col span={12}>车辆</Col>
                <Col span={12}>{carInfo.name}</Col>
                <Col span={12}>租金</Col>
                <Col span={12}>{carInfo.rentPerHour}</Col>
              </Row>
              <Row>
                <span>预定日期：</span> <RangePicker onChange={this.onChange} />
              </Row>
              <Row className="mt40">
                <span>总价：</span> <span>{money}</span>
              </Row>
              
              {/* 测试卡号：https://stripe.com/docs/testing#cards */}
              <StripeCheckout
                shippingAddress
                token={onToken}
                amount={money * 100}
                stripeKey="pk_test_51KrzBBGpc1kpCMR6qT7wLqzJfdKvmcfpUwB9GrPmTCEin38uvy7rJMbeMkuhPwnWEqvD1k34VOSLp7NYWjUvD5s800zeMupc3l"
              >
                  <button className="btn1">
                Book Now
              </button>
              </StripeCheckout>

              {/* <Row className="mt40">
                <Button onClick={this.createOrder} shape="round" type="primary">
                  Booking
                </Button>
              </Row> */}

              {/* <Modal
                title="支付"
                visible={isModalVisible}
                onOk={this.handleOk}
                onCancel={this.onCancel}
              >
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ money }}
                  onFinish={this.onFinish}
                  // onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="金额："
                    name="money"
                    rules={[{ required: true, message: "请输入金额" }]}
                  >
                    <Input value={money} disabled />
                  </Form.Item>

                  <Form.Item
                    label="卡号："
                    name="cardNo"
                    required
                    getValueFromEvent={this.getValueFromEvent}
                    rules={[this.onValidCardNo]}
                  >
                    <Input
                      value={cardNo}
                      maxLength={16}
                    />
                  </Form.Item>
                  <Form.Item
                    label="卡有效期："
                    name="validTime"
                    getValueFromEvent={this.getValueFromTime}
                    rules={[{ required: true, message: "请输入卡有效期" }]}
                  >
                    <DatePicker disabledDate={this.disabledDate} value={validTime}></DatePicker>
                  </Form.Item>
                  <Form.Item
                    label="cvs："
                    name="cvs"
                    required
                    getValueFromEvent={this.getValueFromEvent}
                    rules={[this.onValidCvs]}
                  >
                    <Input value={cvs} maxLength={3} />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Modal> */}
            </div>
          </div>
        </div>
      </Default>
    );
  }
}
export default BookingCar;

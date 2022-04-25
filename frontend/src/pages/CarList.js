import React, { useEffect, useContext, useState } from "react";
import Default from "../components/Default";
import { AuthContext } from "../components/authContext";
import { useHistory,NavLink  } from "react-router-dom";
import { Container } from "@mui/material";
import "./CarList.css";
import "animate.css";
import axios from "axios";
import { Col, Row, Divider, DatePicker, Checkbox } from "antd";
export default function CarList() {
  const { auth, setAuth } = useContext(AuthContext);
  let history = useHistory();
  const [carlist1, setCarlist] = useState([]);

  useEffect(() => {
    if (auth === false) {
      history.push("/");
    }
    axios({
      method: "get",
      url: "http://localhost:5000/CarList",
    })
      .then((res) => {
        setCarlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Default>
      <h1 className="animate__animated animate__bounce p-5">
        {" "}
        <span>Get our rental cars</span>
      </h1>
      <Container maxWidth="lg">
        <h2 className="kennth1">Enconmy</h2>
        <Row justify="center" gutter={16}>
          {carlist1.map((car) => {
            return (
              <Col lg={5} sm={24} xs={24} key={car._id}>
                <div className="car p-2 bs1">
                  <img src={car.image} className="carimg" />

                  <div className="car-content d-flex align-items-center justify-content-between">
                    <div className="text-left pl-2">
                      <p>{car.name}</p>
                      <p> Rent Per Hour {car.rentPerHour} /-</p>
                    </div>
                    <NavLink  to={{ pathname: `/bookingcar`, state: car}}>
                    <button
                      className="booking-btn"
                      onClick={() => {
                        // history.push(`/bookingcar?id=${car._id}`);
                      }}
                    >
                      booking
                    </button>
                    </NavLink>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Default>
  );
}

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { registerApi } from "../services/allApi";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Auth({ register }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(userDetails);

  const handleRegister = async () => {
    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
      alert("fill the form");
    } else {
      const result = await registerApi(userDetails);
      console.log(result);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "black",fontSize:'20px' }} />
        </Link>
      </div>
      <div
        className="justify-content-center align-items-center d-flex"
        style={{ width: "100%", height: "65vh" }}
      >
        <Row className="container">
          <Col sm={12} md={12}>
            <h4 className="justify-content-center align-items-center d-flex mb-5">
              Login to PixelPerfect
            </h4>
          </Col>
          <Row className="justify-content-center align-items-center d-flex ">
            <Col md={1}></Col>

            <Col md={4}>
              <form
                action=""
                className="d-flex w-75 ms-5 flex-column justify-content-center gap-3"
              >
                <TextField
                  id="standard-basic"
                  label="User name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />
                <button>login</button>
                <p>
                  Dont have a ccount? <Link to={"/register"}>Create Account..</Link>
                </p>
              </form>
            </Col>
            <Col
              md={1}
              className=""
              style={{
                backgroundColor: "red",
                width: "1px",
                height: "150px",
                color: "red",
              }}
            ></Col>

            <Col md={4} className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              ad voluptates. Accusamus cum laudantium hic nemo tenetur quae
              commodi natus officiis et quam dolor suscipit architecto quos,
              dignissimos pariatur? Labore?
            </Col>

            <Col md={1}></Col>
          </Row>
        </Row>
      </div>
      {register && (
        <form
          action=""
          className="d-flex w-75 ms-5 flex-column justify-content-center   gap-3"
        >
          <TextField
            id="standard-basic"
            label="User Name"
            variant="standard"
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
          <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <button type="button" onClick={handleRegister}>
            sign up
          </button>
        </form>
      )}
    </>
  );
}

export default Auth;

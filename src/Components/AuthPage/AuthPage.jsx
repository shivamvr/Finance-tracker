import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import finance from "../../img/finance.png";
import styled from "styled-components";
const AuthPage = ({ userHandler }) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <AuthStyled>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1rem",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "45px", marginRight: "1rem" }}
          src={finance}
          alt='logo'
        />{" "}
        <span style={{ fontWeight: 600 }}>Finance tracker</span>
      </div>
      {toggle ? (
        <Login userHandler={userHandler} toggleHandler={toggleHandler} />
      ) : (
        <Signup toggleHandler={toggleHandler} />
      )}
    </AuthStyled>
  );
};

const AuthStyled = styled.div`
  background: linear-gradient(180deg, yellow 50%, #b8ff4a 100%);
  filter: blur(400px);
`;

export default AuthPage;

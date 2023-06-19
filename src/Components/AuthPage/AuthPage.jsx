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
  padding: 0;
  min-height: 102vh;
  padding-top: 1rem;
  margin-top: -1rem;
  background: linear-gradient(180deg, #ffff0028 50%, #c2fc6c48 100%);
  /* filter: blur(400px); */
`;

export default AuthPage;

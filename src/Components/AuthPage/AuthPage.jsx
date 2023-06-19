import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import finance from "../../img/finance.png";
import banner from "../../img/banner.png";
import styled from "styled-components";
const AuthPage = ({ userHandler }) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const desc = ` The Finance Tracker is a platform designed to help users track and manage their finances effectively. It offers various features to assist users in monitoring their income, expenses, and overall financial health. The website provides an intuitive interface with interactive charts to visualize financial data and trends.`;

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

      <div style={{ display: "flex", alignItems: "start" }}>
        <p
          style={{
            width: "450px",
            padding: "10px",
            margin: "5rem",
            marginTop: "-3rem",
            fontSize: "15px",
          }}
        >
          <img style={{width: '400px'}} src={banner} />
          {desc}
        </p>

        {toggle ? (
          <Login userHandler={userHandler} toggleHandler={toggleHandler} />
        ) : (
          // lsfjlsjj
          <Signup toggleHandler={toggleHandler} />
        )}
      </div>
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

import React from "react";
import style from "../Css/landingPage.module.css";
import UserList from "../Components/UserList";

const LandingPage = () => {
  return (
    <div className={style.landing_body}>
      <div className={style.card}>
        <h3 className={style.card_title}>Select an account</h3>
        <UserList />
      </div>
    </div>
  );
};

export default LandingPage;

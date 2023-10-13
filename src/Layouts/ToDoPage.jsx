import React from "react";
import TopNavbar from "../Navbar/TopNavbar";
import ComingSoon from "../Components/ComingSoon";
import LeftNavbar from "../Navbar/LeftNavbar";
import style from "../Css/comingSoonPages.module.css";

const ToDoPage = () => {
  return (
    <div className={style.container}>
      <LeftNavbar />
      <div className={style.description}>
        <TopNavbar title={"ToDo"} />
        <hr />
        <ComingSoon />
      </div>
    </div>
  );
};

export default ToDoPage;

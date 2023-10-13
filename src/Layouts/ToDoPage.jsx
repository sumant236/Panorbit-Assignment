import React from "react";
import TopNavbar from "../Navbar/TopNavbar";
import ComingSoon from "../Components/ComingSoon";
import LeftNavbar from "../Navbar/LeftNavbar";
import style from "../Css/comingSoonPages.module.css";

const ToDoPage = () => {
  return (
    <div className={style.container}>
      {/* Left Navbar */}
      <LeftNavbar />
      <div className={style.description}>
        {/* Top Navbar */}
        <TopNavbar title={"ToDo"} />
        <hr />
        {/* Coming soon page */}
        <ComingSoon />
      </div>
    </div>
  );
};

export default ToDoPage;

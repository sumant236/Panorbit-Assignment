import React from "react";
import TopNavbar from "../Navbar/TopNavbar";
import ComingSoon from "../Components/ComingSoon";
import LeftNavbar from "../Navbar/LeftNavbar";
import style from "../Css/comingSoonPages.module.css";

const GalleryPage = () => {
  return (
    <div className={style.container}>
      <LeftNavbar />
      <div className={style.description}>
        <TopNavbar title={"Gallery"} />
        <hr />
        <ComingSoon />
      </div>
    </div>
  );
};

export default GalleryPage;

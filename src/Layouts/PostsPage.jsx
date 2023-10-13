import React from "react";
import LeftNavbar from "../Navbar/LeftNavbar";
import TopNavbar from "../Navbar/TopNavbar";
import ComingSoon from "../Components/ComingSoon";
import style from "../Css/comingSoonPages.module.css";

const PostsPage = () => {
  return (
    <div className={style.container}>
      <LeftNavbar />
      <div className={style.description}>
        <TopNavbar title={"Posts"} />
        <hr />
        <ComingSoon />
      </div>
    </div>
  );
};

export default PostsPage;

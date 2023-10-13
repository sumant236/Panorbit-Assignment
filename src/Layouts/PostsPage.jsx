import React from "react";
import LeftNavbar from "../Navbar/LeftNavbar";
import TopNavbar from "../Navbar/TopNavbar";
import ComingSoon from "../Components/ComingSoon";
import style from "../Css/comingSoonPages.module.css";

const PostsPage = () => {
  return (
    <div className={style.container}>
      {/* Left Navbar */}
      <LeftNavbar />
      <div className={style.description}>
        {/* Top Navbar */}
        <TopNavbar title={"Posts"} />
        <hr />
        {/* Coming soon page */}
        <ComingSoon />
      </div>
    </div>
  );
};

export default PostsPage;

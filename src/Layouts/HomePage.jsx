import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../Css/homePage.module.css";
import { UserContext } from "../Context/UserContext";
import LeftNavbar from "../Navbar/LeftNavbar";
import ProfileContainer from "../Components/ProfileContainer";
import ChatBox from "../Components/ChatBox";
import TopNavbar from "../Navbar/TopNavbar";

const HomePage = () => {
  const { userDetails, getUserDetails } = useContext(UserContext); // getting data from contest api
  const { id } = useParams();

  localStorage.setItem("userId", id);
  // getting data of the single user
  useEffect(() => {
    let userId = localStorage.getItem("userId") || 1;
    getUserDetails(Number(userId));
    console.log(userDetails);
  }, [id]);

  return (
    <div>
      <div className={style.homepage_box}>
        {/* Left Navbar */}
        <LeftNavbar />
        {/* Right Box */}
        {userDetails && (
          <div className={style.profile_header} key={userDetails.id}>
            {/* Top Navbar */}
            <TopNavbar title={"Profile"} />

            <hr />
            {/* Profile Container */}
            <div>
              <ProfileContainer />
            </div>
          </div>
        )}
      </div>
      <div>
        <ChatBox />
      </div>
    </div>
  );
};

export default HomePage;

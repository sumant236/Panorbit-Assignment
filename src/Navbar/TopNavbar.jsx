import React, { useContext, useEffect, useState } from "react";
import style from "../Css/homePage.module.css";
import ProfileInfo from "../Components/ProfileInfo";
import { UserContext } from "../Context/UserContext";
import { useParams } from "react-router-dom";

const TopNavbar = ({ title }) => {
  const { userDetails, getData } = useContext(UserContext); // getting data from contest api
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let userId = id ? id : localStorage.getItem("userId");
    getData(Number(userId));
  }, []);

  return (
    <div className={style.profile_details}>
      <h2>{title}</h2>
      <div>
        <div
          onClick={() => setShowProfileInfo(!showProfileInfo)}
          className={style.profile_info}
        >
          <img
            src={userDetails?.profilepicture}
            alt="user profile img"
            className={style.profile_pic}
          />
          <p>{userDetails?.name}</p>
        </div>
        <ProfileInfo
          setShowProfileInfo={setShowProfileInfo}
          showProfileInfo={showProfileInfo}
        />
      </div>
    </div>
  );
};

export default TopNavbar;

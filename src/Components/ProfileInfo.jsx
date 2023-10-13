import React, { useContext } from "react";
import style from "../Css/homePage.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import UserList from "./UserList";

const ProfileInfo = ({ showProfileInfo, setShowProfileInfo }) => {
  const { userDetails } = useContext(UserContext);

  return (
    <div
      className={style.profile_card}
      style={{ display: showProfileInfo ? "block" : "none" }}
    >
      <div className={style.info}>
        <img
          src={userDetails?.profilepicture}
          alt="profile"
          className={style.profile_image}
        />
        <p className={style.profile_name}>{userDetails?.name}</p>
        <p className={style.profile_name}>{userDetails?.email}</p>
      </div>
      <hr />
      {/* get user List */}
      <div
        className={style.user_list}
        onClick={() => setShowProfileInfo(false)}
      >
        <UserList />
      </div>

      {/* Sign Out Button */}
      <Link to="/">
        <button
          className={style.signout_btn}
          onClick={() => localStorage.clear()}
        >
          Sign out
        </button>
      </Link>
    </div>
  );
};

export default ProfileInfo;

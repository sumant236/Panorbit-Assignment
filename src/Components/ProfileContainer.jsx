import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import style from "../Css/homePage.module.css";

const ProfileContainer = () => {
  const { userDetails } = useContext(UserContext);

  console.log(userDetails);
  return (
    <div className={style.container}>
      <div className={style.details}>
        <img src={userDetails?.profilepicture} alt="profile img" />
        <p className={style.name}>{userDetails?.name}</p>
        <div className={style.user_info}>
          <div>
            <h3 style={{ marginTop: "0px" }}>Username :</h3>
            <h2 style={{ marginTop: "0px" }}>{userDetails?.username}</h2>
          </div>
          <div>
            <h3>e-mail :</h3>
            <h2>{userDetails?.email}</h2>
          </div>
          <div>
            <h3>Phone :</h3>
            <h2>{userDetails?.phone}</h2>
          </div>
          <div>
            <h3>Website :</h3>
            <h2>{userDetails?.website}</h2>
          </div>
        </div>
        <hr />
        <h2 className={style.company}>Company</h2>
        <div className={style.user_info}>
          <div>
            <h3 style={{ marginTop: "0px" }}>Name :</h3>
            <h2>{userDetails?.company?.catchPhrase}</h2>
          </div>
          <div>
            <h3>catchphrase :</h3>
            <h2 style={{ paddingTop: "3px" }}>{userDetails?.company?.name}</h2>
          </div>
          <div>
            <h3>Bs :</h3>
            <h2>{userDetails?.company?.bs}</h2>
          </div>
        </div>
      </div>
      <div className={style.vertical_line}></div>
      <div className={style.address_detail}>
        <h2>Address:</h2>
        <div className={style.address_info}>
          <div>
            <h3 style={{ marginTop: "0px" }}>Street :</h3>
            <h2 style={{ marginTop: "0px" }}>{userDetails?.address?.street}</h2>
          </div>
          <div>
            <h3>Suite :</h3>
            <h2>{userDetails?.address?.suite}</h2>
          </div>
          <div>
            <h3>City :</h3>
            <h2>{userDetails?.address?.city}</h2>
          </div>
          <div>
            <h3>Zipcode :</h3>
            <h2>{userDetails?.address?.zipcode}</h2>
          </div>
        </div>
        <iframe
          width="100%"
          height="50%"
          className={style.map}
          src={`https://maps.google.com/maps?q=${userDetails?.address?.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}
          title="Google map api"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <div className={style.lat_lng}>
          <p>
            Lat : <span>{userDetails?.address?.geo?.lat}</span>
          </p>
          <p>
            Lng : <span>{userDetails?.address?.geo?.lng}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;

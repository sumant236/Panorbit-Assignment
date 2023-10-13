import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import style from "../Css/landingPage.module.css";
import { Link, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const UserList = () => {
  const { getData, data, isLoading } = useContext(UserContext); // getting data from contest api

  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* if data is loading then it will show Loading else the data mapping */}
      {isLoading ? (
        <CircularProgress />
        ) : (
        <div className={style.card_data}>
          {data &&
            data.map((user) =>
              id ? (
                user.id !== id && (
                  <div key={user.id}>
                    <Link
                      to={`/homepage/${user.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className={style.user_list}>
                        <img src={user.profilepicture} alt="user profile img" />
                        <p>{user.name}</p>
                      </div>
                    </Link>
                    <hr />
                  </div>
                )
              ) : (
                <div key={user.id}>
                  <Link
                    to={`/homepage/${user.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className={style.user_list}>
                      <img src={user.profilepicture} alt="user profile img" />
                      <p>{user.name}</p>
                    </div>
                  </Link>
                  <hr />
                </div>
              )
            )}
        </div>
      )}
    </>
  );
};

export default UserList;

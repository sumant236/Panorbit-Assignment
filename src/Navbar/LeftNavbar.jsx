import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import style from "../Css/homePage.module.css";

const LeftNavbar = () => {
  const [userId, setUserId] = useState("1");
  const { id } = useParams();

  useEffect(() => {
    id ? setUserId(id) : setUserId(localStorage.getItem("userId"));
  }, [id]);
  return (
    <div className={style.left_nav}>
      <NavLink
        to={`/homepage/${userId}`}
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
        style={{ textDecoration: "none" }}
      >
        <p>Profile</p>
      </NavLink>

      <hr />

      <NavLink
        to="/post"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
        style={{ textDecoration: "none" }}
      >
        <p>Posts</p>
      </NavLink>

      <hr />

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
        style={{ textDecoration: "none" }}
      >
        <p>Gallery</p>
      </NavLink>

      <hr />

      <NavLink
        to="/todo"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
        style={{ textDecoration: "none" }}
      >
        <p>ToDo</p>
      </NavLink>
    </div>
  );
};

export default LeftNavbar;

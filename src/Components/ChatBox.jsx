import React, { useEffect, useState } from "react";
import style from "../Css/homePage.module.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { CircularProgress } from "@mui/material";

const ChatBox = () => {
  const { data, getData, isLoading } = useContext(UserContext); // getting data from contest api
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={show ? style.show_chat : style.hide_chat}>
      <div onClick={() => setShow(!show)} className={style.chat_header}>
        <div className={style.icon_text}>
          {/* Chat Icon */}
          <ModeCommentOutlinedIcon />
          <p>Chats</p>
        </div>
        {show ? (
          // Down Arrow Icon
          <KeyboardArrowDownOutlinedIcon />
        ) : (
          // Up arrow Icon
          <KeyboardArrowUpOutlinedIcon />
        )}
      </div>
      {/* users list */}
      {show &&
        (isLoading ? (
          // Loader if data is loadin
          <CircularProgress />
        ) : (
          <div className={style.chat_list}>
            {data &&
              data.map((user) => (
                <div key={user.id}>
                  <div className={style.users}>
                    <img src={user.profilepicture} alt="profile image" />
                    <div>
                      <p>{user.name}</p>
                      <p style={{ fontSize: "8px" }}>🟢</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default ChatBox;

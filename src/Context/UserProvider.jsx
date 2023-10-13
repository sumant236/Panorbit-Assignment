import axios from "axios";
import React, { useState } from "react";
import { UserContext } from "./UserContext";

// Create a UserProvider component
const UserProvider = ({ children }) => {
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  // Function to get user data from API endpoint
  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => setData(res.data.users))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  //   function to get specific user details
  const getUserDetails = (id) => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        const user = res.data.users.filter((el) => el.id === Number(id));
        setUserDetails(user[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <UserContext.Provider
      value={{ data, userDetails, getData, getUserDetails, isloading }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Export UserProvider component
export default UserProvider;

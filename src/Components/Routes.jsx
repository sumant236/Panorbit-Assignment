import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="homepage/:id" element={<HomePage />} />
      <Route path="post" element={<Posts />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="todo" element={<Todo />} /> */}
    </Routes>
  );
};

export default AllRoutes;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Layouts/LandingPage";
import HomePage from "./Layouts/HomePage";
import PostsPage from "./Layouts/PostsPage";
import GalleryPage from "./Layouts/GalleryPage";
import ToDoPage from "./Layouts/ToDoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="homepage/:id" element={<HomePage />} />
        <Route path="post" element={<PostsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="todo" element={<ToDoPage />} />
      </Routes>
    </div>
  );
}

export default App;

import Post from "./page/Post";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Album from "./page/Album";
import DetailAlbum from "./page/DetailAlbum";
import DetailPost from "./page/DetailPost";
import User from "./page/User";
import UserPost from "./page/userPost";

function App() {
  return (
    <>
      <div className="h-full bg-neutral-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/album" element={<Album />} />
          <Route path="/user" element={<User />} />
          <Route path="/detail-album/:id" element={<DetailAlbum />} />
          <Route path="/detail-post/:id" element={<DetailPost />} />
          <Route path="/user-post/:id" element={<UserPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

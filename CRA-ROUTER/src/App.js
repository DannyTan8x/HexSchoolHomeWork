import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumPhoto from "./pages/AlbumPhoto";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<AlbumLayout />}>
            {/* 直接寫 index 是預設為主頁面*/}
            <Route index element={<AlbumIndex />}></Route>
            {/* 動態路由 傳入：id 上網站，可以任意命名*/}
            <Route path=":id" element={<AlbumPhoto />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

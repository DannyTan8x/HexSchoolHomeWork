import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"; //動態路由 Outlets

const accessID = process.env.REACT_APP_UNSPLASH_ACCESS;
const api = "https://api.unsplash.com/search/photos";
export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accessID}&query=animals`
      );
      const results = response.data.results;
      setList(results);
    })();
  }, []);
  return (
    <div className="row">
      <div className="col-4">
        <p>
          <Link to="search">搜尋頁面</Link>
        </p>
        <Link to="/album">相簿首頁</Link>
        <nav className="nav flex-column">
          {list.map((item) => {
            return (
              <Link key={item.id} className="nav-link" to={item.id}>
                {item.id}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="col-8">
        <Outlet context={list}></Outlet>
      </div>
    </div>
  );
}

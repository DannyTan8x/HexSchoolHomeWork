import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";

const accessID = process.env.REACT_APP_UNSPLASH_ACCESS;
const api = "https://api.unsplash.com/search/photos";
export default function AlbumSearch() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   console.log(searchParams.get("query"));
  //   setSearchParams({ query: "bulding" });
  // }, [search]);

  useEffect(() => {
    if (search !== "") {
      (async () => {
        const response = await axios.get(
          `${api}?client_id=${accessID}&query=${search}`
        );
        const { results } = response.data;
        setList(results);
      })();
    }
  }, [search]);

  useEffect(() => {
    setSearch(searchParams.get("query"));
  }, [searchParams]);

  return (
    <>
      搜尋頁面
      <input
        type="text"
        className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            // setSearch(e.target.value);
            setSearchParams({ query: e.target.value });
            // console.log(search);
          }
        }}
      />
      <div className="row">
        <CardList list={list} />
      </div>
    </>
  );
}

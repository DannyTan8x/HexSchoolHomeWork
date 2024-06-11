import { useOutletContext } from "react-router-dom";
import CardList from "../components/CardList";

export default function AlbumIndex() {
  const list = useOutletContext();
  return (
    <>
      這是首頁
      <div className="row ">
        <CardList list={list} />
      </div>
    </>
  );
}

import { useNavigate, useParams } from "react-router-dom"; //useParams 接受網址的 ：id
import axios from "axios";
import { useEffect, useState } from "react";

//獨立針對 ID 再次 get 資料 api 是photos (不需 search 字眼)
const api = "https://api.unsplash.com/photos";
const accessID = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumPhoto() {
  const [photo, setPhoto] = useState({});
  const { id } = useParams(); //從useParams 解構 id 出來
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}/${id}?client_id=${accessID}`);
      setPhoto(response.data);
    })();
    // console.log("photo:", photo?.urls?.regular);
  }, [id]);
  return (
    <>
      這是單張圖片:{id}
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      <p>{photo.description}</p>
      <img
        // 因為定義photo是空物件{}，所以內層會是undefined. 最快解決方式是加上問號 ？
        src={photo?.urls?.regular}
        className="img-fluid"
        alt={photo.description}
      />
    </>
  );
}

import { useParams } from "react-router-dom"; //useParams 接受網址的 ：id
import axios from "axios";
import { useEffect, useState } from "react";

const api = "https://api.unsplash.com/photos";
const accessID = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumPhoto() {
  const [photo, setPhoto] = useState({});
  const { id } = useParams(); //

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
      <p>{photo.description}</p>
      <img
        src={photo?.urls?.regular}
        className="img-fluid"
        alt={photo.description}
      />
    </>
  );
}

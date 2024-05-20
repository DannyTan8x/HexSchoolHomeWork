import { useOutletContext, Link } from "react-router-dom";

export default function AlbumIndex() {
  const list = useOutletContext();
  return (
    <>
      這是首頁
      <div className="row ">
        <div className="row row-cols-2">
          {list.map((item) => {
            console.log(item);
            return (
              <>
                <div className="card">
                  <img
                    src={item?.urls?.regular}
                    className="card-img-top object-fit-cover"
                    alt={item?.description}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link className="nav-link" to={item.id}>
                        {item.id}
                      </Link>
                    </h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

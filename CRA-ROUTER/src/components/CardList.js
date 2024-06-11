import { Link } from "react-router-dom";

export default function CardList({ list }) {
  return (
    <div className="row row-cols-3">
      {list.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img
              src={item?.urls?.regular}
              className="card-img-top object-fit-cover"
              alt={item?.description}
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link className="nav-link" to={`/album/${item.id}`}>
                  {item.id}
                </Link>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link } from "react-router-dom";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FeaturedProperties = ({ list }) => {
  const { data, loading, error } = useFetch("/hotels?featured=true");
  const handleSearch = () => {};
  return (
    <>
      <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data?.map((list) => (
              <div className="fpItem" key={list?._id}>
                <Link to={`/hotels/${list?._id}`}>
                  <img src={list.photos[0]} alt="" className="fpImg" />
                </Link>
                <div className="fpTitle">
                  <span className="fpName">{list?.name}</span>
                  <br></br>
                  <span className="fpCity">
                    <bold>
                      <FontAwesomeIcon icon={faLocationDot} />
                      {list?.city}
                    </bold>{" "}
                  </span>
                  <br></br>
                  <span className="fpPrice">
                    <bold>Price: N{list?.cheapestPrice}</bold>
                  </span>
                  <br></br>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default FeaturedProperties;

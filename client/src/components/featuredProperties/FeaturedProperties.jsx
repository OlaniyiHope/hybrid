import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link } from "react-router-dom";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");

  const handleSearch = () => {};

  return (
    <>
      <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data &&
              data.map((item) => (
                <div className="fpItem" key={item?._id}>
                  <Link to={`/hotels/${item?._id}`}>
                    <img src={item?.photos[0]} alt="" className="fpImg" />
                  </Link>
                  <div className="fpTitle">
                    <span className="fpName">{item?.name}</span>
                    <br></br>
                    <span className="fpCity">
                      <bold>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {item?.city}
                      </bold>
                    </span>
                    <br></br>
                    <span className="fpPrice">
                      <bold>Price: N{item?.cheapestPrice}</bold>
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

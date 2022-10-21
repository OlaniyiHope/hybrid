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
            {data.map((data) => (
              <div className="fpItem" key={data?._id}>
                <Link to={`/hotels/${data?._id}`}>
                  <img src={data?.photos[0]} alt="" className="fpImg" />
                </Link>
                <div className="fpTitle">
                  <span className="fpName">{data?.name}</span>
                  <br></br>
                  <span className="fpCity">
                    <bold>
                      <FontAwesomeIcon icon={faLocationDot} />
                      {data?.city}
                    </bold>{" "}
                  </span>
                  <br></br>
                  <span className="fpPrice">
                    <bold>Price: N{data?.cheapestPrice}</bold>
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

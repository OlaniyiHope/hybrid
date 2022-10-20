import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import { Link } from "react-router-dom";
const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");

  return (
    <div className="pList" style={{margin: "auto"}}>
     
      {loading ? (
        "Loading"
      ) : (
        <>
         
          {data.map((item) => (
            <div className="pListItem" key={item._id}>

<Link to={`/hotels/${item._id}`}>
              <img 
                src={item.photos[0]}
                alt=""
                className="pListImg"
              />
              </Link>
              <span className="pListTitles">{item.name}</span><br></br>
              <span className="pListTitles">{item.city}</span><br></br>
              <span className="pListTitles">Starting from ${item.cheapestPrice}</span><br></br>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
      
    </div>
  );
};

export default PropertyList;

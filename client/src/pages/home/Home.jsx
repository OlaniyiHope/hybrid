import Navbar from "../../component/global-component/navbar";
import Page_header from "../../component/global-component/page-header";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import MailList2 from "../../components/mailList2/MailList2";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhyChooseUs from "../../component/section-component/why-choose-us";
import Featureds from "../../component/section-component/featured-properties";
import PropertiesByCities from "../../component/section-component/properties-by-cities";
import { Helmet } from "react-helmet-async";

const Home = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/properties", { state: { destination, dates, options } });
  };

  return (
    <>
      <Helmet>
        <title>Hybrid Home and Properties</title>
        <meta
          name="description"
          content="Hybrid Homes and Properties"
          data-rh="true"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div style={{ backgroundColor: "#F6F7FB" }}>
        <Navbar />
        <div></div>
        <Page_header headertitle="home" />
        <div className="headerSearch">
          <div className="headerSearchItem">
            <input
              type="text"
              placeholder="Property Location?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <WhyChooseUs />
        <MailList />

        <h6 style={{ textAlign: "center" }} className="ok">
          Latest Properties
        </h6>
        <Featureds />
        <div className="homeContainer">
          <PropertiesByCities />

          <MailList2 />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

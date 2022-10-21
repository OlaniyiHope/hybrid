import "./hotel.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import Navbar from "../../component/global-component/navbar";

const Hotel = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  //const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  //const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Navbar />

      {loading ? (
        "loading"
      ) : (
        <>
          <div className="property-details-area" style={{ paddingTop: "0" }}>
            <div className="bg-gray pd-top-100 pd-bottom-90">
              <div className="container">
                <h3>
                  <span className="say">{data?.name}</span>
                </h3>
                <button className="hey">
                  For Sale - N{data?.cheapestPrice}{" "}
                </button>

                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{data?.address}</span>
                </div>
                <span className="hotelDistance">
                  Excellent location – {data?.distance}m from center
                </span>
                <div className="row ">
                  <div className="col-xl-9 col-lg-8">
                    {data && (
                      <img
                        src={data?.photos?.[0]}
                        alt=""
                        className="hotelImg"
                      />
                    )}

                    <div className="hotelDetails">
                      <div className="hotelDetailsTexts">
                        <h1
                          style={{
                            fontSize: 20,
                            fontWeight: 700,
                            color: "black",
                          }}
                        >
                          Description
                        </h1>
                        <h1 className="hot">{data?.detail}</h1>
                        <h1
                          style={{
                            fontSize: 20,
                            marginTop: 20,
                            fontWeight: 700,
                            color: "black",
                          }}
                        >
                          Details
                        </h1>
                        <p className="hot">{data?.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                    <div className="widget widget-owner-info mt-lg-0 mt-5">
                      <div className="owner-info text-center"></div>

                      <div>
                        <div className="contact">
                          <h6>Contact Us</h6>
                          <div className="rld-single-input">
                            <input type="text" placeholder="Full Name" />
                          </div>
                          <div className="rld-single-input">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="rld-single-input">
                            <input type="text" placeholder="Messages" />
                          </div>
                          <a className="btn btn-yellow" href="#">
                            Send Messages
                          </a>
                        </div>
                        <div className="contact-info">
                          <h6 className="mb-3">Contact Info</h6>
                          <div className="media">
                            <div className="media-body">
                              <p>Address</p>
                              <span>Long Island, NY 11355, USA</span>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-left">
                              <i className="fa fa-phone" />
                            </div>
                            <div className="media-body">
                              <p>Phone</p>
                              <span>+00 111 222 333</span>
                            </div>
                          </div>
                          <div className="media mb-0">
                            <div className="media-left">
                              <i className="fa fa-envelope" />
                            </div>
                            <div className="media-body">
                              <p>Email</p>
                              <span>info@example.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MailList />
          <Footer />
        </>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;

import "./mailList.css";
import { Link } from "react-router-dom";
const MailList2 = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">
        Become a realtor with hybrid homes and properties
      </h1>
      <span className="mailDesc">Begin your journey to become a realtor</span>
      <div className="mailInputContainer">
        <button>
          <Link to="/login" style={{ color: "#fff" }}>
            {" "}
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MailList2;

import { Link } from "react-router-dom";
const MailList = () => {
  return (
    <div className="call-to-action-area pd-top-20">
      <div className="container">
        <div className="call-to-action">
          <div className="cta-content">
            <h3 className="title">
              Begin your journey to become a property owner today
            </h3>
            <Link className="btn btn-white" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailList;

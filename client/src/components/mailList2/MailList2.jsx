import { Link } from "react-router-dom";
const MailList2 = () => {
  return (
    <div className="call-to-action-area pd-top-20">
      <div className="container">
        <div className="call-to-action">
          <div className="cta-content">
            <h3 className="title">Become a Hybrid realtor</h3>
            <Link className="btn btn-white" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailList2;

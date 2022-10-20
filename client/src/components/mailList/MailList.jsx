import "./mailList.css"
import {Link} from "react-router-dom"
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Hybrid Home! The largest real estate company</h1>
      <span className="mailDesc">Begin your journey to become a property owner today</span>
      <div className="mailInputContainer">
       
        <button><Link to="/contact" style={{color: "#fff" }}> Contact Us</Link></button>
      </div>
    </div>
  )
}

export default MailList
import React from "react";
import PageHeader from "../../component/global-component/page-header";
import Footer from "../../component/global-component/footer";
import Navbar from "../../component/global-component/navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contact" />
      <div className="contact-area pd-top-100 pd-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126827.54056982225!2d3.2513516036333256!3d6.6020257923176215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOgba%20Multipurpose%20Hall%20adjacent!5e0!3m2!1sen!2sng!4v1677383873864!5m2!1sen!2sng"
                  style={{ width: "100%", height: "450", border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4">
              <form className="contact-form-wrap contact-form-bg">
                <h4>Contact Now</h4>
                <div className="rld-single-input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="rld-single-input">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="rld-single-input">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="rld-single-input">
                  <textarea rows={10} placeholder="Message" defaultValue={""} />
                </div>
                <div className="btn-wrap text-center">
                  <button className="btn btn-yellow">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row pd-top-92">
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-phone" />
                  Call Us:
                </p>
                <h5>08038763637</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-fax" />
                  Fax:
                </p>
                <h5>08146437416</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-envelope" />
                  Have any Question?
                </p>
                <h5>hybridhomesandproperties@gmail.com</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-phone" />
                  Address
                </p>
                <h5>
                  i201, i202 Ogba Multipurpose Hall adjacent Sunday market,
                  along wempco, Ogba, Ikeja lagos
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

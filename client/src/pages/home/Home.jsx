import Navbar from "../../component/global-component/navbar";
import Page_header from "../../component/global-component/page-header";
import WhyChooseUs from "../../component/section-component/why-choose-us";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import MailList2 from "../../components/mailList2/MailList2";

const Home = ({ type }) => {
  return (
    <div style={{ backgroundColor: "#F6F7FB" }}>
      <Navbar />
      <Page_header headertitle="home" className="ona" />

      <WhyChooseUs />
      <MailList />
      <div className="homeContainer">
        <Featured />

        <h6 style={{ textAlign: "center" }} className="ok">
          Latest Properties
        </h6>
        <FeaturedProperties />
        <MailList2 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

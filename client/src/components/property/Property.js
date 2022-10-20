import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import Page_header from '../../component/global-component/page-header';
import Footer from '../../component/global-component/footer';
import Navbar from '../../component/global-component/navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Property = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    let data = sectiondata.property

    return(
      
    <div className="property-area pd-top-100">
          <Navbar />
        <Page_header headertitle="Property" />
              <div className="container">
                <div className="row custom-gutter">
                  <div className="col-lg-12">
                    <div className="property-filter-menu-wrap">
                      <div className="property-filter-menu portfolio-filter text-center">
                        <button data-filter="*" className="active" style={{marginTop: 20}}>Other Properties</button>
                      
                      </div>
                    </div>
                  </div>
                </div>
                {/*Property filter Start*/}
                <div className="property-filter-area row custom-gutter">
                  <div className="gallery-sizer col-1" />
                  {/*property item Start*/}
                  { data.items.map( ( item, i )=>
                      <div key={ i } className={"rld-filter-item  col-lg-3 col-sm-6 "+item.cat}>
                        <div className="single-feature">
                          <div className="thumb">
                             <img src={ publicUrl+item.image } alt="img" />
                          </div>
                          <div className="details">
                            <a href="#" className="feature-logo">
                               <img src={ publicUrl+item.icon } alt={ imagealt } />
                            </a>
                            <p className="author"><FontAwesomeIcon icon={faLocationDot} />{ item.authorname }</p>
                            <h6 className="title readeal-top"><Link to="">{ item.title }</Link></h6>
                            <h6 className="price">{ item.newerprice }</h6><del>{ item.olderprice }</del>
                        
                        
                          </div>
                        </div>
                      </div>
                   ) }
                </div>
              </div>
              <Footer />
            </div>

    );
}

export default Property
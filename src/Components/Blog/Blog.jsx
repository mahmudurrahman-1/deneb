import React, { Component } from "react";
import profiles from "./Blog_data";
import Blogs from "./Blog_item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Blog extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="blog-section" id="blog">
        <div className="container blog-body">
          <h2 className="section-title center">
            Meet the team behind Slider Revolution
          </h2>
          <p className="paragraph center">
            We Couldn’t Find A Tool That Could Do Everything We Wanted. So We
            Created Slider Revolution.
          </p>
          <Slider {...settings}>
            {profiles.map((prof, index) => (
              <Blogs key={index} profile={prof} />
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default Blog;

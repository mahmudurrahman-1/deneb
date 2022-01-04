import React, { Component } from "react";
import { ReadMore } from "../Sub Components/btn_components";

export default class Blogs extends Component {
  render() {
    const {
      profile: { image, profession, title, description, link },
    } = this.props;

    return (
      <div className="blogg">
        <div className="blog-img">{image}</div>
        <div className="blog-textpart">
          <div className="blog-first-text">
            <span className="profession">{profession}</span>
            <a className="blog-links" href={link}>
              {title}
            </a>
          </div>

          <p className="description">{description}</p>

          <div className="blog-left-align">
            <ReadMore link={link} />
          </div>
        </div>
      </div>
    );
  }
}

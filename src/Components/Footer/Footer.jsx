import React from "react";

import { LinkButton } from "../Sub Components/btn_components";
import img26 from "../Images/img26.png";
import img27 from "../Images/img27.png";
import img28 from "../Images/img28.png";
import img29 from "../Images/img29.png";
import img30 from "../Images/img30.png";
import img31 from "../Images/img31.png";

export function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container footer-body">
          <div className="footer-sec">
            <h4 className="subheader-footer">Slider Revolution</h4>
            <ul className="footer-list footer-list-1">
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Build Visually
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Pro-Level Design
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Templates
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Advanced Transitions
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Addons
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Upgrade To Premium
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Affiliate Program
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-sec">
            <h4 className="subheader-footer">Support</h4>
            <ul className="footer-list footer-list-2">
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Help Center
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Documentation
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  FAQs
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Open a Ticket
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-sec">
            <h4 className="subheader-footer">Versions</h4>
            <ul className="footer-list footer-list-3">
              <li className="footer-items">
                <a href="#" className="footer-links">
                  HTML <span>V5</span>
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  CSS <span>V3</span>
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Javascript
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  jQuery <span>V6x</span>
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Python <span>V3.9</span>
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Django <span>V4</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-sec">
            <h4 className="subheader-footer">Resources</h4>
            <ul className="footer-list footer-list-4">
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Pricing
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Use Terms
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Legal Dusclosure
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Privacy Policy
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Licensing
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Blog
                </a>
              </li>
              <li className="footer-items">
                <a href="#" className="footer-links">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <FooterCta />
      </footer>
    </div>
  );
}

export function FooterCta() {
  return (
    <div className="footer-cta-section">
      <div className="foot-bar">
        <div className="foot-container">
          <div className="foot-section-1">
            <a
              className="tp-footer-social tp-yt"
              href="https://www.youtube.com/user/"
              target="_blank"
            >
              <img src={img26} alt="youtube" />
            </a>
            <a
              className="tp-footer-social tp-fb"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img src={img27} alt="facebook" />
            </a>
            <a
              className="tp-footer-social tp-tw"
              href="https://twitter.com/"
              target="_blank"
            >
              <img src={img28} alt="twitter" />
            </a>
            <a
              className="tp-footer-social tp-ig"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img src={img29} alt="instagram" />
            </a>
            <a
              className="tp-footer-social tp-pi"
              href="https://www.pinterest.com/"
              target="_blank"
            >
              <img src={img30} alt="pinterest" />
            </a>
            <a
              className="tp-footer-social tp-dr"
              href="https://www.dribbble.com/"
              target="_blank"
            >
              <img src={img31} alt="dribble" />
            </a>
          </div>

          <div className="foot-section-2">
            <div className="copyright">
              © Copyright 2021 by Mahmudur Rahman. Don't claim it as your.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

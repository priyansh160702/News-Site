import { Link } from "react-router-dom";
import logo from "../img/logo_light.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer-container">
      <div className="container">
        <div>
          <img src={logo} alt="logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non et
            sequi impedit facere nam cupiditate, omnis vitae praesentium
            temporibus doloremque.
          </p>
        </div>
        <div className="links">
          <h3>Site Links</h3>
          <Link>Help and Support</Link>
          <Link>Privacy Policy</Link>
          <Link>Contact</Link>
        </div>
        <div className="footer-join">
          <h3>Join Our Club</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            cupiditate?
          </p>
          <Link to="join">Join Now</Link>
        </div>
        <div>
          <p>Copyright &copy; 2019 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

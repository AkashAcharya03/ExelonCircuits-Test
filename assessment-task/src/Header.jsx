import "./index.css";
import Logo from "./assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={Logo} alt="Company Logo" />
        <span className="email">/</span>
        <span className="email">support@grew.mail</span>
      </div>
      <nav className="nav-links">
        <a href="#">Automation</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Email Templates</a>
      </nav>
      <div className="cta-buttons">
        <a href="#" className="faq">
          FAQ
        </a>
        <a href="#" className="other">
          En <FontAwesomeIcon icon={faGlobe} />
          </a>
        <a href="#" className="other">
          Login
        </a>
        <button className="try-now">Try Now</button>
        <button className="try-demo">
          Try Demo <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </header>
  );
}

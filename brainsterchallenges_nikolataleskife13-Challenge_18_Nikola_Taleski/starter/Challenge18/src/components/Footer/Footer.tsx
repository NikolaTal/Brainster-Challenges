import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const eventInfo = [
    "Enter Now",
    "Event info",
    "Course Maps",
    "Race Pack",
    "Results",
    "FAQs",
    "Am I Registered?",
  ];

  const registration = [
    "Volunteers",
    "Gallery",
    "Press",
    "Results",
    "Privacy Policy",
    "Service Plus",
    "Contscts",
  ];

  const schedule = [
    "Gallery",
    "About",
    "Videos",
    "Results",
    "FAQs",
    "Results",
    "Volunteers",
  ];
  return (
    <div className="row footer py-5">
      <div className="col-3">
        <h4>Social share</h4>
        <a href="www.facebook.com" className="href">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2x"
            className="iconsSocialMedia"
          />{" "}
        </a>
        <a href="www.instagram.com">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="iconsSocialMedia"
          />
        </a>
        <a href="www.twitter.com">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="iconsSocialMedia"
          />
        </a>
        <a href="www.linkedin.com">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            className="iconsSocialMedia"
          />
        </a>
      </div>
      <div className="col-3">
        <h4>Event info</h4>
        {eventInfo.map((paragraph, index) => (
          <a href="www.instagram.com" className="href">
            <p key={index} className="m-0">
              {paragraph}
            </p>
          </a>
        ))}
      </div>
      <div className="col-3">
        <h4>Registration</h4>
        {registration.map((paragraph, index) => (
          <a href="www.twitter.com" className="href">
            <p key={index} className="m-0">
              {paragraph}
            </p>
          </a>
        ))}
      </div>
      <div className="col-3">
        <h4>Schedule</h4>
        {schedule.map((paragraph, index) => (
          <a href="www.linkedin.com" className="href">
            <p key={index} className="m-0">
              {paragraph}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;

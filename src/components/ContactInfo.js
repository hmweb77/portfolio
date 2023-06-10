import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = ({ name, email, location }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Contact Information</h4>
      <p className="infoDescription">
        Open for opportunities. Let's connect and build something awesome
        together!{" "}
      </p>
      <ul className="listInfo">
        <li>
          <div className="personalContactInfo">
            <PersonIcon sx={{ fontSize: 40 }} />
            <div className="mediaWrap">
              <h6 className="infoType">Name</h6>
              <span className="infoValue">{name}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <LocationOnIcon sx={{ fontSize: 40 }}/>
            <div className="mediaWrap">
              <h6 className="infoType">Location</h6>
              <span className="infoValue">{location}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <EmailIcon sx={{ fontSize: 40 }}/>
            <div className="mediaWrap">
              <h6 className="infoType">Email</h6>
              <span className="infoValue">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactInfo;

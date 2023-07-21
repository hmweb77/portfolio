import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Home = ({ name }) => {
  const styles = {
    landing: {
      height: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      color: "#fff",
    },

    name: {
      padding: "30px 40px 70px",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      {/* <Draw />  */}
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
        <FontAwesomeIcon icon={faChevronLeft} style={{paddingRight: "25",color:"#f5f5f5ab"}}  />
        Full Stack Developer 
        <FontAwesomeIcon icon={faChevronRight} style={{paddingLeft: "25",color:"#7b0606e2"}} />

        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("Building solutions")
                .pauseFor(1500)
                .deleteChars(9)
                .typeString("future")
                .pauseFor(1500)
                .deleteAll()
                .typeString("The next generation of web technologies")
                .start();
            }}
          />
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Home;
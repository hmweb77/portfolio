import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";

const Home = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
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
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      {/* <Draw />  */}
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a Developer")
                .pauseFor(1500)
                .deleteChars(9)
                .typeString("Designer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("The next generation of web technology")
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
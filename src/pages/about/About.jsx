import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import Skills from "../Skills"
const About = ({ name, location, brand, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="About" description="Let me introduce me" />
      <Skills/>
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
    
    </section>
  );
};

export default About;



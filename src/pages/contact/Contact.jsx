import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

import { Grid } from "@mui/material";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <Grid container spacing={1} sx={{ padding: '10px' }} >
        <Grid item xs={12} md={6}>
          <Form />
        </Grid>
        <Grid item xs={12} md={6} >
          <ContactInfo name={name} location={location} email={email} />
        </Grid>
      </Grid>
      <SocialIcons />
    </section>
  );
};

export default Contact;

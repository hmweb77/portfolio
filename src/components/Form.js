import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


const initialValues = {
  Name: "",
  Email: "",
  Subject: "",
  Message: "",
};

const Form = () => {
  const form = useRef();
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
  
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your email were send succesfully, we will reach you as soon as possible. Thank you");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);

  //     // Convert the FormData to JSON
  //     const jsonData = {};
  //     for (const [key, value] of data.entries()) {
  //       jsonData[key] = value;
  //     }

  //     console.log(jsonData);

  // Make the POST request using Axios

  // axios.post('http://localhost:3000', jsonData)
  //   .then(response => {
  //     // Handle the response data
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     // Handle any errors
  //     console.error(error);
  //   });
  //   };

  //   const [success, setSuccess] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const data = JSON.stringify(formData);

  //     fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setSuccess(true);
  //         setFormData({
  //           ...formData,
  //           name: "",
  //           email: "",
  //           subject: "",
  //           message: "",
  //         });
  //         setTimeout(() => {
  //           setSuccess(false);
  //         }, 3000);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  const CssTextField = {
    "& label.Mui-focused": {
      color: "#950101",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInputLabel-root": {
      color: "#950101",
    },
    "& .MuiInputBase-input": {
      color: "white", // Add the desired input color here
    },
  };

//   const CssButton = {
//     // stule button
//   };

  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Message Me</h4>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={CssTextField}
                variant="standard"
                required
                fullWidth
                label="Name"
                name="Name"
                id="Name"
                onChange={handleInputChange}
                value={values.Name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={CssTextField}
                variant="standard"
                required
                fullWidth
                id="Email"
                label="Email"
                name="Email"
                onChange={handleInputChange}
                value={values.Email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={CssTextField}
                required
                fullWidth
                variant="standard"
                id="Subject"
                label="Subject"
                name="Subject"
                onChange={handleInputChange}
                value={values.Subject}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // sx={{ input: { color: "white" } }}
                sx={CssTextField}
                required
                fullWidth
                variant="standard"
                id="Message"
                name="Message"
                label="Message"
                onChange={handleInputChange}
                value={values.Message}
              />
            </Grid>
          </Grid>
          <button className="btn sendButton " type="submit">
            Send
            {/* {success ? "Message Sent" : "Send Message"} */}
          </button>
        </form>
      </Container>
    </motion.div>
  );
};

export default Form;

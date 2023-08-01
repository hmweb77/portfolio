
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/hmweb77"
        target="_blank" rel="noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/oussamahamdani/"
        target="_blank" rel="noreferrer"
      >
       <LinkedInIcon />
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="mailto:hmweb77@gmail.com"
        target="_blank" rel="noreferrer"
      >
        <EmailIcon />
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://wa.me/212660059899"
        target="_blank" rel="noreferrer"
      >
       <WhatsAppIcon />
      </a>
    </div>
  );
};

export default SocialIcons;

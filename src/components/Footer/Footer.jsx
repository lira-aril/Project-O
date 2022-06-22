import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/lira-aril"><GitHubIcon/></a> 
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; {new Date().getFullYear()} Все права защищены</p>
    </div>
  );
}

export default Footer;


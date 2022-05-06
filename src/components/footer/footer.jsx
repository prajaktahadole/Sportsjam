import CardGiftcard from "@mui/icons-material/CardGiftcard";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GppGoodIcon from "@mui/icons-material/GppGood";
import BrightnessAutoOutlinedIcon from "@mui/icons-material/BrightnessAutoOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import styles from  "./footer.module.css";
export const Footer = () => {
  const Fone = [
    "About Us",
    "Contact Us",
    "Inquiry / Feedback",
    "Our Stores",
    "Sportsjam Team",
  ];
  const Ftwo = [
    "Register / Login ",
    "Delivery &amp; Charges",
    "Payment Options",
    "Returns Policy",
    "Track My Order",
    "Buy in Bulk",
  ];

  return (
    <div className={styles.footermain}>
      <div className={styles.footerdiv1}>
        <div>
          <CardGiftcard style={{ fontSize: 70 }}></CardGiftcard>
          <a href="#">E-gift Voucher</a>
        </div>
        <div>
          <WorkspacePremiumOutlinedIcon
            style={{ fontSize: 70 }}
          ></WorkspacePremiumOutlinedIcon>
          <a href="#">Reward Points</a>
        </div>
        <div>
          <MenuBookIcon style={{ fontSize: 70 }}></MenuBookIcon>
          <a href="#">Buyers Guide</a>
        </div>
        <div>
          <LocalShippingIcon style={{ fontSize: 70 }}></LocalShippingIcon>
          <a href="#">Express Shipping</a>
        </div>
        <div>
          <GppGoodIcon style={{ fontSize: 70 }}></GppGoodIcon>
          <a href="#">Secure Shopping</a>
        </div>
        <div>
          <BrightnessAutoOutlinedIcon
            style={{ fontSize: 70 }}
          ></BrightnessAutoOutlinedIcon>
          <a href="#">100% Authentic</a>
        </div>
      </div>

      <div className={styles.footerdiv2}>
        <div className={styles.footercol1}>
          <h6>GET TO KNOW US</h6>

          {Fone.map((e) => (
            <div>
              <a href="#">{e}</a>
            </div>
          ))}
        </div>

        <div className="footer-col2">
          <h6>HERE TO HELP</h6>

          {Ftwo.map((e) => (
            <div>
              <a href="#">{e}</a>
            </div>
          ))}
        </div>

        <div className="footer-col3">
          <h6>PAYMENTS</h6>
          <img src="https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Payments.png"></img>
        </div>

        <div className="footer-col4">
          <h6>SIGN UP FOR NEWSLETTER</h6>

          <br />
          <h6>CONNECT WITH US</h6>
          <li class="soc-icon">
            <a href="https://www.facebook.com/Sportsjam.in" target="_blank">
              <FacebookIcon></FacebookIcon>
            </a>
            <a href="https://twitter.com/SportsJamIn" target="_blank">
              <TwitterIcon></TwitterIcon>
            </a>
            <a href="https://www.instagram.com/sportsjam.in/" target="_blank">
              <InstagramIcon></InstagramIcon>
            </a>
            <a
              href="https://www.youtube.com/channel/UC-eZWeqy5zPUea1ykX7PWAg"
              target="_blank"
            >
              <YouTubeIcon></YouTubeIcon>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

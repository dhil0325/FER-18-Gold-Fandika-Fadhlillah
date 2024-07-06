import "./style.css"
import img_logo from '../../assets/logo-car-rent.png'
import { navbarLink } from '../../utils/data'
import FBIcon from '../../assets/icon_facebook.png'
import IGIcon from '../../assets/icon_instagram.png'
import TWIcon from '../../assets/icon_twitter.png'
import MailIcon from '../../assets/icon_mail.png'
import TwitchIcon from '../../assets/icon_twitch.png'
const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-nav">
            {navbarLink.map((item, index) => (
            <a key={index} href={'#' + item.id_name}>
              {item.title}
            </a>
        ))}                
            </div>
            <div className="footer-social-container">
                <div className="footer-social-text">
                    <p>Connect with us</p>
                </div>
                <div className="footer-social-icon">
                    <img src={FBIcon} alt="" />
                    <img src={IGIcon} alt="" />
                    <img src={TWIcon} alt="" />
                    <img src={MailIcon} alt="" />
                    <img src={TwitchIcon} alt="" />
                </div>
            </div>
            <div className="footer-logo">
                <div className="footer-logo-text">
                    <p>Copyright Binar 2022</p>
                </div>
                <img src={img_logo} alt="" />
            </div>

        </div>
)}

export default Footer
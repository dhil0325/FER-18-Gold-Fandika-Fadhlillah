import "./style.css"
import img_logo from '../../assets/logo-car-rent.png'

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-nav">
                <a href="">Our Services</a>
                <a href="">Why Us</a>
                <a href="">Testimonial</a>
                <a href="">FAQ</a>
            </div>
            <div className="footer-social">
                <p>Connect with us</p>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
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
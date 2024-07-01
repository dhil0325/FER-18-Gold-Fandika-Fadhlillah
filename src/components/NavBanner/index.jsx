import './style.css'
import img_car from '../../assets/img_car.png'
import RentButton from '../RentButton'
function NavBanner({ id, isButtonShow = true }) {
    return (
        <div className="navbanner-container">
            <div id={id} className="navbanner-content">
                <div className="navbanner-title">
                    <h1>Sewa & Rental Mobil Terbaik di <br /> 
                    kawasan Jakarta</h1>
                </div>
                <div className="navbanner-subtitle">
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br /> 
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br /> 
                    untuk sewa mobil selama 24 jam.</p>
                </div>
                {isButtonShow && <RentButton link={'/search'} />}
            </div>
            <img src={img_car} alt="" />
        </div>
    )
}

export default NavBanner
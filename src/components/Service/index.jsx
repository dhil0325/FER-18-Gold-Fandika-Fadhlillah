import "./style.css"
import img_service from "../../assets/img_service.png"
import { serviceDetail } from "../../utils/data"
function Service({id}) {

    return (
        <div id={id} className="service-container">
            <div className="service-content">
                <img src={img_service} alt="" />
                <div className="service-container-text">
                    <div className="service-text-title">
                        <h1>Best Car Rental for any kind of trip in <br />
                        Jakarta!</h1>
                    </div>
                    <div className="service-text-subtitle">
                        <div className="service-text-subtitle1">
                            <p>
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga <br />
                            lebih murah dibandingkan yang lain, kondisi mobil baru, serta <br />
                            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, <br />
                            meeting, dll.
                            </p>
                        </div>
                        {serviceDetail.map((item) => (
                        <div key={item.id} className="service-text-subtitle2-item">
                            <img src={item.icon} alt="" />
                            <p>{item.description}</p>
                        </div>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
import "./style.css"
import { whyusData } from "../../utils/data"
import WhyUsCard from "../WhyUsCard"
function WhyUs() {
    return (
        <div className="why-us-container">
            <div className="why-us-content">
                <div className="why-us-title">  
                    <h1>
                        Why Us?
                    </h1>
                    <p>
                        Mengapa harus pilih Jakarta Car Rental?
                    </p>
                </div>
                <div className="why-us-card">
                    {whyusData.map((item) => (
                        <WhyUsCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyUs
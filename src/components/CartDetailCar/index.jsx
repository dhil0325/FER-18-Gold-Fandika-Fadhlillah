import React from "react";
import "./style.css";
import { formatRupiah, formatSizeCar } from "../../utils/formatUtil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import NoImgCart from "../../assets/Image_not_available.png";
import { detailCar } from "../../utils/data";

// Modify the CartDetailCar component to receive detailCar as a prop
const CartDetailCar = ({ data }) => {
    return (
        <div className="cart-detail-car-container">
            <div className="cart-detail-car">
                <div className="cart-detail-car-text">
                    <h3>{detailCar.title}</h3>
                    <div>
                        <p>{detailCar.include.title}</p>
                        <ul>
                            {detailCar.include.data.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>{detailCar.exclude.title}</p>
                        <ul>
                            {detailCar.exclude.data.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>
                            {detailCar.refund.title}
                        </p>
                        <ul>
                            {detailCar.refund.data.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="cart-detail-car-image">
                    <div className="cart-detail-car-image-detail">
                        <img src={data.image ? data.image : NoImgCart} alt="" />
                    </div>
                    <p>
                        {data.name ? data.name : "No Data"}
                    </p>
                    <div>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        <p>{formatSizeCar(data.category)}</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>{formatRupiah(data.price)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartDetailCar;
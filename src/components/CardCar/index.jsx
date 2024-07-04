import React from "react";
import { useNavigate } from "react-router-dom";
import { formatRupiah } from "../../utils/formatUtil";
import './style.css'
import NoImgcar from '../../assets/Image_not_available.png'

const CardCar = ({ id, name, price, desc, image }) => {
    const navigate = useNavigate();

    const altDesc = 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.';

    const handleClick = () => {
        navigate(`/car/${id}`);
    };

    return (
        <div className="card-car">
            <div className="card-car-content">
                <div className="card-car-image">
                    <img src={image || NoImgcar} alt="" />
                </div>
                <div className="card-car-description">
                    <h3>{name || 'No Name'}</h3>
                    <h3>{formatRupiah(price)} / hari</h3>
                    <p>{desc || altDesc}</p>
                </div>
            </div>
            <button onClick={handleClick}>Pilih Mobil</button>
        </div>
    );
};

export default CardCar;
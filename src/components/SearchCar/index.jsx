import React, {useState} from "react";
import './style.css'

const SearchCar = ({isDisabled = false, onSearch}) => {
    const [isFormFocus, setIsFormFocus] = useState(false)
    const [carName, setCarName] = useState('')
    const [carCapacity, setCarCapacity] = useState('')
    const [carPrice, setCarPrice] = useState('')
    const [carStatus, setCarStatus] = useState('')

    const handleInputName = (e) => {
        setCarName(e.target.value)
    }
    const handleSelectCapacity = (e) => {
        setCarCapacity(e.target.value)
    }
    const handleSelectPrice = (e) => {
        setCarPrice(e.target.value)
    }
    const handleSelectStatus = (e) => {
        setCarStatus(e.target.value)
    }

    const sendQuery = (e) => {
        onSearch({
            carName,
            carCapacity,
            carPrice,
            carStatus
        })
    }

    return (
        <div className="search-car-container">
            <div className="search-car-content">
                <form 
                className="search-car-bar"
                onFocus={() => setIsFormFocus(true)}
                onBlur={() => setIsFormFocus(false)}
                onSubmit={(e) => {
                    e.preventDefault() 
                    sendQuery()}}
                    >
                        <div className="group-form">
                            <label htmlFor="car_name">Nama Mobil</label>
                            <input type="text" placeholder="Ketik Nama/tipe mobil"
                            className="input-field"
                            onChange={handleInputName}
                            disabled={isDisabled} 
                            />
                        </div>
                        <div className="group-form">
                            <label htmlFor="car_category">Kategori</label>
                            <select className="input-field" 
                            onChange={handleSelectCapacity} 
                            disabled={isDisabled} 
                            id="car_category"
                            >
                                <option value={''} className="">
                                    Masukkan Kapasitas Mobil
                                </option>
                                <option value={'small'} className="">
                                    2 - 4 orang
                                </option>
                                <option value="medium" className="">
                                    4 - 6 orang
                                </option>
                                <option value="large" className="">
                                    6 - 8 orang
                                </option>
                            </select>
                        </div>
                        <div className="group-form">
                            <label htmlFor="car_price">Harga</label>
                            <select className="input-field" 
                            onChange={handleSelectPrice} 
                            disabled={isDisabled} 
                            id="car_price"
                            >
                                <option value={''} className="">
                                    Masukkan Harga Sewa
                                </option>
                                <option value={'lt_400'} className="">
                                    &lt; Rp 400.000
                                </option>
                                <option value={'400_600'} className="">
                                    Rp 400.000 - Rp 600.000
                                </option>
                                <option value={'gt_600'} className="">
                                    &gt; Rp 600.000
                                </option>
                            </select>
                        </div>
                        <div className="group-form">
                            <label htmlFor="car_status">Status</label>
                            <select className="input-field" 
                            onChange={handleSelectStatus} 
                            disabled={isDisabled} 
                            id="car_status"
                            >
                                <option value={''} className="">
                                    Masukkan Status
                                </option>
                                <option value={true} className="">
                                    Tersedia
                                </option>
                                <option value={false} className="">
                                    Tidak Tersedia
                                </option>
                            </select>
                        </div> 
                        <button
                        type="submit"
                        style={{display: isDisabled ? 'none' : ''}}
                        className="search-car-button"
                        >
                        Cari Mobil
                        </button>   
                    </form>
            </div>
            <div
            className="black-screen"
            style={{display: isFormFocus ? 'block' : 'none'}}
            ></div>    
        </div>
    )
}

export default SearchCar
import React from "react"
import './style.css'
import CardCar from "../CardCar"

const ListCar = ({data}) => {
    return (
        <div className="list-car-container">
            <div className="list-car-content">
                {Array.isArray(data) && data.length === 0 && (
                    <h2 style={{alignSelf: 'center'}}>Data not found</h2>
                )}
                {Array.isArray(data) && data.map((item, index) => (
                    <CardCar
                        key={index}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        desc={item.desc}
                        image={item.image}
                    />
                ))} 
            </div>
        </div>
    )
}

export default ListCar
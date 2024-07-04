import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CartDetailCar from "../../components/CartDetailCar";
import NavHome from "../../components/NavHome";
import SearchCar from "../../components/SearchCar";
import Footer from "../../components/Footer";
import CarPadding from "../../components/CarPadding";

const CarDetail = () => {
    const { id } = useParams();
    const [detailCarData, setDetailCarData]=useState({})

    const getCarDetail = async (idCar) => {
        try {
            const apiUrl = `https://api-car-rental.binaracademy.org/customer/car/${idCar}`
            const response = await axios.get(apiUrl)
            setDetailCarData(response.data)
        } catch (error) {
            console.log('Data get error:', error)
        }
    }

    useEffect(() => {
        getCarDetail(id)
    }, [])

    return (
        <div>
            <NavHome style={{paddingBottom: "100px"}} />
            <CarPadding />
            <SearchCar isDisabled={true} />
            <CartDetailCar data={detailCarData} />
            <Footer />
        </div>
    )}

export default CarDetail
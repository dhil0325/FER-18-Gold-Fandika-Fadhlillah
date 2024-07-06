import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { priceValue } from "../../utils/formatUtil";
import NavHome from "../../components/NavHome";
import NavBanner from "../../components/NavBanner";
import SearchCar from "../../components/SearchCar";
import ListCar from "../../components/ListCart";
import PaginationNumber from "../../components/Pagination";
import Footer from "../../components/Footer";
import Spinner from "../../components/SpinnerLoading";

const Car = () => {
    const location =useLocation()
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [apiQuery, setApiQuery] = useState({})
    const [loading, setLoading] = useState(true)
    

    const handleSearch = async (query, page=1) => {
        try {
        const {carName, carCapacity, carPrice, carStatus} = query;
        const [minPrice, maxPrice] = priceValue(carPrice)
        const response = await axios.get(
            "https://api-car-rental.binaracademy.org/customer/v2/car",
            {
                params: {
                    name: carName,
                    category: carCapacity,
                    isRented: carStatus,
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    page,
                    pageSize: 9,
                },
                timeout: 10000,
            }
        );
        // console.log(response.data)
        setData(response.data.cars)
        setCurrentPage(response.data.page)
        setTotalPage(response.data.pageCount);
        setLoading(false);
    } catch (error) {
        console.error(
            "Error fetching data",
            error.response ? error.response.data : error.message);
    }
    setLoading(false);
};

useEffect(() => {
    if (location.state) {
        setApiQuery(location.state);
        handleSearch(location.state, 1);
    }
}, [location.state]);

    const handlePage = (page) => {
        setLoading(true);
        handleSearch(apiQuery, page);
        setCurrentPage(page)
    };

    const searchCar = (q) => {
        setApiQuery(q);
        handleSearch(q, 1);
    }
    return (
        <div>
            <NavHome />
            <NavBanner isButtonShow={false}/>
            <SearchCar onSearch={searchCar}/>
            {loading ? <Spinner /> : <ListCar data={data} />}
            <PaginationNumber
            total={totalPage}
            active={currentPage}
            onPageChange={handlePage} />
            <Footer />
        </div>
    )
}

export default Car
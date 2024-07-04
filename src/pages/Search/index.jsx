import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBanner from "../../components/NavBanner";
import SearchCar from "../../components/SearchCar";
import Footer from "../../components/Footer"; // Import the Footer component
import NavHome from '../../components/NavHome';

const Search = () => {
    const navigate = useNavigate();

    const navigateToCarPage = (queries) => {
        navigate('/car', {state: queries})
    }

    return (
        <div>
            <NavHome />
            <NavBanner isButtonShow={false} />
            <SearchCar onSearch={navigateToCarPage} />
            <Footer /> 
        </div>
    )
}

export default Search;
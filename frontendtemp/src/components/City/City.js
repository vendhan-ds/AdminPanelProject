import React from "react";
import Axios from "axios";
import "./city.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const City = (props) => {
    const history = useNavigate()
    //const history2 = useHistory();
    const {_id, displayName, country /* countryCode, countryName, countryCurrencyCode, countryCurrencyName, countryTimeZone */, ThumbnailSrc } = props.city

    const updateHandler=async()=>{
        var input
        await axios.get(`http://localhost:4000/cities/${_id}`)
        .then((res)=>history("/AddCity",{state:{
                id:res.data.city._id,
               cityname:res.data.city.displayName,
               countrycode:res.data.city.country.code,
               countryname:res.data.city.country.displayName,
               currencycode:res.data.city.country.currency.code,
               currencyname:res.data.city.country.currency.currencyName,
               timezone:res.data.city.country.timeZone, 
            }})) 
    }

    const deleteHandler = async () =>{
        await Axios.delete(`http://localhost:4000/cities/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/cities"))
    }
    return (
        <div>
            <div className="cityCard">
            <h3>City Name:{displayName} </h3>
            <h6>Details</h6>
            <ol>
                <li>Country Code: {country.code}</li>
                <li>Country Name: {country.displayName}</li>
                <li>Country Currency Code: {country.currency.code}</li>
                <li>Country Currency Name: {country.currency.currencyName}</li>
                <li>Country Time Zone: {country.timeZone}</li>
            </ol>
            <img src={ThumbnailSrc} alt="Display" />
            <button><a onClick={updateHandler}/* {`/cities/${_id}`} */>Update</a></button>
            <button onClick={deleteHandler}>Delete</button>
            </div>

        </div>
    )
}
export default City
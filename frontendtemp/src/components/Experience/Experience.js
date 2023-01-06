import React from "react";
import Axios from "axios";
//import "./city.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Experience = (props) => {
    const history = useNavigate()
    //const history2 = useHistory();
    //console.log(props)
    const {_id,cityId, displayName,startingPrice,highlights,nextAvailable,duration /* countryCode, countryName, countryCurrencyCode, countryCurrencyName, countryTimeZone */, ThumbnailSrc } = props.experience

    const updateHandler=async()=>{
        var input
        await axios.get(`http://localhost:4000/experience/${_id}`)
        .then((res)=>history("/AddExperience",{state:{
            id:res.data.experience._id,
            displayName:res.data.experience.displayName,

            duration:res.data.experience.duration,

            nextAvailable:res.data.experience.nextAvailable,

            startingPrice:res.data.experience.startingPrice,
            
            highlights:res.data.experience.highlights  
            }})) 
    }

    const deleteHandler = async () =>{
        await Axios.delete(`http://localhost:4000/experience/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/experience"))
    }
    return (
        <div>
            <div className="cityCard">
            <h3>City Name:{displayName} </h3>
            <h6>Details</h6>
            <ol>
                <li>Starting Price: {startingPrice}</li>
                <li>Next Available: {nextAvailable}</li>
                <li>highlights: {highlights}</li>
                <li>Duration: {duration}</li>
                
            </ol>
            <img src={ThumbnailSrc} alt="Display" />
            <button><a onClick={updateHandler}/* {`/cities/${_id}`} */>Update</a></button>
            <button onClick={deleteHandler}>Delete</button>
            </div>

        </div>
    )
}
export default Experience
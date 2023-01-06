import React, {useEffect, useState} from "react";
import Axios from "axios";
import City from "./City.js";

const fetchHandler = async () =>{
    return await Axios.get("http://localhost:4000/cities").then((res) => res.data);
};
const Cities = () => {
    const [cities, setCity] = useState();
    useEffect(() => {
        fetchHandler().then((data) => {
            setCity(data.cities);
            console.log(data.cities)
        });
    },[]);
    console.log(cities)
    return (
        <div>
        {/* headerSection */}
            <ul>
                <li><a href="/">Back to Home</a></li>
                <li><a href="/AddCity">Add a City</a></li>
            </ul>
            <hr/>
        {/* headerSectionClose */}
            <ul>
                {cities && cities.map((city, i) =>(
                    <li key ={i}>
                        <City city={city} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cities;
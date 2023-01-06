import React, {useEffect, useState} from "react";
import Axios from "axios";
import Experience from "./Experience.js";

const fetchHandler = async () =>{
    return await Axios.get("http://localhost:4000/experience").then((res) => res.data);
};
const Experiences = () => {
    const [experiences, setExperiences] = useState();
    useEffect(() => {
        fetchHandler().then((data) => {
            console.log(data)
            setExperiences(data.experiences);
        });
    },[]);
    //console.log(cities)
    return (
        <div>
        {/* headerSection */}
            <ul>
                <li><a href="/">Back to Home</a></li>
                <li><a href="/AddExperience">Add an Experience</a></li>
            </ul>
            <hr/>
        {/* headerSectionClose */}
            <ul>
                {experiences && experiences.map((exp, i) =>(
                    <li key ={i}>
                        <Experience experience={exp} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experiences;
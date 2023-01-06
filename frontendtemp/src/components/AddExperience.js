
import { useState } from 'react';
import React from 'react'
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import axios from 'axios';


function AddExperience() {
  var exist=1
  var id;
  const location = useLocation();
  var props=location.state
  console.log(props)
  if(props!=null){var id=props.id;exist=0;console.log("hit")}
  /* var id=props.id
  console.log(id)
  if(props=={}){console.log("hit");exist=0} */
  const [inputs, setInputs] = useState(props||{});
    
    
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(exist)
    if(exist==1){
    await axios.post('http://localhost:4000/experience/',inputs).then(alert("experience added to database"))}
    else{
      await axios.post(`http//localhost:4000/experience/update`,inputs).then(alert("experience updated in database"))
    }
    
  }

  return (
    <div>
        <h3>ADD EXPERIENCE</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Display Name:
                <input type="text" 
                value={inputs.displayName||""}
                name="cityname"
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Starting Price:
                <input type="text"
                value={inputs.startingPrice||""}
                 name="countryname"
                 onChange={handleChange}/>
            </label>
            <br/>
            <label>
                duration:
                <input type="text" 
                value={inputs.duration||""}name="countrycode"
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Next available:
                <input type="text" 
                value={inputs.nextAvailable||""}name="currencyname"
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Highlights:
                <input type="text" 
                value={inputs.highlights||""}name="currencycode"
                onChange={handleChange}/>
            </label>
            <br/>
            
            <br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default AddExperience
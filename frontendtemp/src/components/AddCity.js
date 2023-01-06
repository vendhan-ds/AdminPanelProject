
import { useState } from 'react';
import React from 'react'
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import axios from 'axios';


function AddCity() {
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
    await axios.post('http://localhost:4000/cities/',inputs).then(alert("city added to database"))}
    else{
      await axios.put(`http//localhost:4000/cities/${id}`,inputs).then(alert("city updated in database"))
    }
    
  }

  return (
    <div>
        <h3>ADD CITY</h3>
        <form onSubmit={handleSubmit}>
            <label>
                DisplayName:
                <input type="text" 
                value={inputs.cityname||""}
                name="cityname"
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                CountryName:
                <input type="text"
                value={inputs.countryname||""}
                 name="countryname"
                 onChange={handleChange}/>
            </label>
            <br/>
            <label>
                CountryCode:
                <input type="text" 
                value={inputs.countrycode||""}name="countrycode"
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                CurrencyName:
                <input type="text" 
                value={inputs.currencyname||""}name="currencyname"
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                CurrencyCode:
                <input type="text" 
                value={inputs.currencycode||""}name="currencycode"
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                TimeZone:
                <input type="text" 
                value={inputs.timezone||""}name="timezone"
                onChange={handleChange}/>
            </label>
            <br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default AddCity
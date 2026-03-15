import {useState} from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import "./search.css";



export default function SearchBox({updateInfo}){
   let [city,setcity] = useState("")
   let [error,seterror] = useState();
 const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "95ddd7827ee94d5626296a82d5f471e5";

  let getWeatherInfo = async () =>{
    try{
 let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
 let jsonResponse  =   await response.json();

 let result = {
  city:city,
  temp: jsonResponse.main.temp,
  tempMin: jsonResponse.main.tempMin,
  tempMax: jsonResponse.main.tempMax,
  humidity: jsonResponse.main.humidity,
  feelsLike: jsonResponse.main.feelsLike,
  weather: jsonResponse.weather[0].description,
 }
 console.log(result);
 return  result;
    }catch(err){
      seterror("No such place in our API");
    }
   
  };
 

  let handleChange = (evt)=>{
  setcity(evt.target.value);
  }

  let handleSubmit = async (evt) =>{
    try{
evt.preventDefault();
   console.log(city);
   setcity("")
   let newInfomation =await  getWeatherInfo();
   updateInfo(newInfomation)
    }catch(err){

    }
   
  }

  return (
    <div className='search'>
      
     <form onSubmit = {handleSubmit}>
       <TextField
        id="city"
        label="city name"
        variant="outlined"
        required 
        value = {city}
        onChange ={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type = "submit" >search</Button>
     </form>
    
    </div>
  )
}
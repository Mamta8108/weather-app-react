import {useState} from "react";
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
  const [weatherInfo,setweatherInfo] = useState({
    city:"Delhi",
    feelsLike:24.84,
    temp:25.05,
    tempMax:25.05,
    tempMin:25.05,
    humidity:47,
    weather:"haze",
  })

  let updateInfo = (newInformation) =>{
    setweatherInfo(newInformation)
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Weather App</h1>
      <SearchBox updateInfo = {updateInfo}/>
    <InfoBox info = {weatherInfo}/>
    </div>
  )
}
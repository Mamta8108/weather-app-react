import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css";

export default function InfoBox({info}){
  const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      
      <div className = "Card"><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={INIT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" component={"span"}>
          <div><h1>{info.city}</h1>
            <p>Temperature {info.temp}&deg;C</p>
          <p>Humidity {info.humidity}</p>
          <p>Min Temp = {info.tempMax}&deg;C</p>
          <p>Max Temp = {info.tempMin}&deg;C</p>
          <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>

          </div>
        </Typography>
      </CardContent>
    </Card></div>
      
    </div>
  )
}
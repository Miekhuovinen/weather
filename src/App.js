import './App.css';
import { useState,useEffect } from 'react'
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setIsLoading(false)
        console.log(position)
      },(error) => {
        console.log(error)
        alert("Paikannus epäonnistui!")
      })
    } else {
      alert("Selaimesi ei tue paikannusta!")
    }
  }, [])
  
  if(isLoading) {
    return <p>Ladataan sijaintia...</p>
  } else {
    return (
      <div className="App">
        <h2>Sijaintisi on</h2>
        <p>Sijainti: {lat.toFixed(3)},{lng.toFixed(3)}</p>
        <Weather lat={lat} lng={lng}/>
      </div>
    );
  }
 
}

export default App;

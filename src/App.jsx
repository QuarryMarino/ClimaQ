import { useEffect, useState } from "react";
import "./App.css";
import Number1 from "./components/Number1/Number1";
import Number2 from "./components/Number2/Number2";
import Number3 from "./components/Number3/Number3";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [city, setCity] = useState("Paris");
  const [dato, setDato] = useState("");
  const [type, setType] = useState("place");
  useEffect(() => {
    getData();
  }, [city]);
  const getData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f26a1d2c7387a78efdda84903fecbb7f`
    );
    
    const datos = await res.json();

    setDato(datos);
  };
 

  return (
    <div className="principal">
      <div className="cont1">
        <SideBar city={setCity} ciudad={city} dato={dato}
        setType={city}
        lat={dato ? dato.coord.lat : "0"}
        lon={dato ? dato.coord.lon : "0"}/>
      </div>
      <div className="cont2">
      
    
        <Number3
          lat={dato ? dato.coord.lat : "0"}
          lon={dato ? dato.coord.lon : "0"}
        />
         <Number2
          pressure={dato ? dato.main.pressure : "0"}
          visibility={dato ? dato.visibility : "0"}
          humidity={dato ? dato.main.humidity : "0"}
          wind={dato ? dato.wind.speed : "0"}
        />
      </div>
    </div>
  );
}

export default App;




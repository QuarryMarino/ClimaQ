import { useState } from "react";
import "./SideBar.css";
import Number1 from "../Number1/Number1";

const SideBar = ({ city, dato, ciudad }) => {
  const [mobile, setMobile] = useState(false);
  const myLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    setType("latlon");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    city(e.target[0].value);
    setMobile(false);
  };
  console.log(mobile);

  const place = (place) => {
    setPlace(place);
    setType("place");
    setMobile(false);
  };
  return (
    <div className="Container">
      <img
        className="image"
        src="/img/Cloud-background.png"
        width={500}
        height={326}
        alt="background"
      />

      <div className="cont3">
        <img
          rel="icon"
          type="image/svg+xml"
          href="./public/img/Cloud-background.png"
        />

        <div className="cont4">
          <button className="btnSearch" onClick={() => setMobile(true)}>
            Search for places
          </button>
          <span className="material-symbols-outlined local">my_location</span>
        </div>
        {/* poner aqui   */}
        <div>
          <img
            className="image1"
            src={`/img/${
              dato ? dato.weather[0].icon.replace("n", "d") : "01d"
            }.png`}
            width={200}
            height={220}
            alt=""
          />
        </div>
        <Number1
          city={ciudad}
          temp={dato ? dato.weather[0].main : ""}
          temperatura={dato ? dato.main.temp : "0"}
        />
      </div>
      <div className={`container2 ${mobile ? "aparece" : ""}`}>
        <span
          className="material-symbols-outlined cerrar"
          onClick={() => setMobile(false)}
        >
          close
        </span>
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="search">
            <span className="material-symbols-outlined buscar">search</span>
            <input type="text" id="search" placeholder="search location" />
          </label>
          <button>Search</button>
        </form>
        <button
          className="btn"
          onClick={() => {
            city("london");
            setMobile(false);
          }}
        >
          <span>London</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        <button
          className="btn"
          onClick={() => {
            city("barcelona");
            setMobile(false);
          }}
        >
          <span>Barcelona</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        <button
          className="btn"
          onClick={() => {
            city("long beach");
            setMobile(false);
          }}
        >
          <span>Long Beach</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;

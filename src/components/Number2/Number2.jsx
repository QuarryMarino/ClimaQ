import "./Number2.css";

function Number2({ wind, humidity, visibility, pressure }) {
  return (
    <>
      <div className="central">
        <h1 className="titulo">Today's Hightlights</h1>
        <section className="layout">
          <div className="windSatatus">
            <p>Wind satatus</p>
            <p className="test">{wind} <span className="a"> mph</span></p>
            <span
              className="material-symbols-outlined"
              style={{ transform: `rotate(${wind ? wind : 0}deg)`}}
            >
              <span className="posi">WSW</span>
              assistant_navigation
            </span>
          </div>
          <div className="Humidity">
            <p>Humidity</p>
            <p className="test">
              {humidity} <span className="a"> % </span>
            </p>
            <div className="humidity">
              <span className="num">0</span>
              <span className="num">50</span>
              <span className="num">100</span>
              <div
                style={{
                  background: `linear-gradient(to right, #FFEC65 0% ${humidity}% , #E7E7EB ${humidity}% 100%)`,
                }}
              ></div>
              <span className="por">%</span>
            </div>
          </div>
          <div className="Visibility">
            <p>Visibility</p>
            <p className="test">
              {visibility} <span className="a">miles</span>{" "}
            </p>
          </div>
          <div className="AirPressure">
            <p>Air Pressure</p>
            <p className="test">
              {pressure} <span className="a">mb</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Number2;

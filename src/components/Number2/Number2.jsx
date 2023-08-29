import "./Number2.css"

function Number2({ wind, humidity, visibility, pressure }) {
  return (
    <>
      <h1>Today's Hightlights</h1>
      <div className="windSatatus">
        <h2>Wind satatus</h2>
        <h1>{wind} mph</h1>
      </div>
      <div className="indSatatus">
        <h2>Humidity</h2>
        <h2>{humidity} %</h2>
      </div>
      <div className="indSatatus">
        <h2>Visibility</h2>
        <h2>{visibility} miles</h2>
      </div>
      <div className="indSatatus">
        <h2>Air Pressure</h2>
        <h2>{pressure} mb</h2>
      </div>
    </>
  );
}

export default Number2;

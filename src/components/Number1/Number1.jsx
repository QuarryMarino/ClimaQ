import "./Number1.css";

function Number1({ temperatura, temp, city}) {
  const dia = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
console.log(city)
  return (
    <>
      <div className="central">
        <h1 className="temperatura">{temperatura}°C</h1>
        <h2 className="tempo">{temp}</h2>
        <h2 className="dia">{dia}</h2>
        <div className="cont6">
        <span class="material-symbols-outlined iconelocal"> location_on </span>
        <h2 className="ciudad">{city}</h2>
</div>
      </div>
    </>
  );
}

export default Number1;

import { useEffect, useState } from "react";
import "./Number3.css";

function Number3({ lon, lat }) {
  const [dato, setDato] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=3fb11bd030ed476b78ea9bf08e32c698`

    );
    const datos = await res.json();

    setDato(datos);
  };


  const stringDate = (data) => {
    const str = new Date(data)
      .toLocaleDateString("en-us", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
      .replace(",", "")
      .split(" ");
    const weekday = str[0].slice(0, 3);
    const month = str[1].slice(0, 3);
    return `${weekday}, ${str[2]} ${month}`;
  };

  return (
    <div className="divtest">
      {dato &&
        dato.list.map((e, i) => {
          if (i % 8 === 0) {
            return (
              <section key={i} className="todoD">
                <div  className="card">
                  <h3 className="h3t">{stringDate(e.dt_txt)}</h3>
                  <img
                    className="img"
                    src={`/img/${e.weather[0].icon.replace("n", "d")}.png`}
                    alt="icon"
                  />
                  <div className="h1">
                    <h1 className="max">{e.main.temp_max.toFixed(1)}°C</h1>
                    <h1 className="min">{e.main.temp_min.toFixed(0)}°C</h1>
                  </div>
                </div>
              </section>
            );
          }
        })}
    </div>
  );
}

export default Number3;

import { useEffect, useState } from "react";
import "./Number3.css"

function Number3({ lon, lat }) {
  const [dato, setDato] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=f26a1d2c7387a78efdda84903fecbb7f`
    );
    const datos = await res.json();

    setDato(datos);
  };
  console.log(dato);

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
    <>
      {dato &&
        dato.list.map((e, i) => {
          if (i % 8 === 0) {
            return (
              <section className="todoD">
              <div key={i} className="card">
                <h3>{stringDate(e.dt_txt)}</h3>
                <img
                  className="img"
                  src={`/img/${e.weather[0].icon.replace("n", "d")}.png`}
                  alt="icon"
                />
                <h1 className="max">{e.main.temp_max.toFixed(0)}°C</h1>
                <h1 className="min">{e.main.temp_min.toFixed(0)}°C</h1>
              </div>
              </section>
            );
          }
        })}
    </>
  );
}

export default Number3;

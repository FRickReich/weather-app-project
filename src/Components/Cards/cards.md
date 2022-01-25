{/* Tagesansicht */}
<p>
    TagesAnsicht:
    
</p>
<hr />
{/* 10 Tage vorhersage */}
<p>
    Vorhersage: <br />
    morgen:
    { location.forecast.forecastday[1].day.mintemp_c.toFixed() }° -&nbsp;
    { location.forecast.forecastday[1].day.maxtemp_c.toFixed() }° -
    { location.forecast.forecastday[1].day.condition.text }
    <img src={ location.forecast.forecastday[1].day.condition.icon } alt="" />
    <br />
    übermorgen:
    { location.forecast.forecastday[2].day.mintemp_c.toFixed() }° -&nbsp;
    { location.forecast.forecastday[2].day.maxtemp_c.toFixed() }° -
    { location.forecast.forecastday[2].day.condition.text }
    <img src={ location.forecast.forecastday[2].day.condition.icon } alt="" />
    <br />
</p>
<hr />
{/* Luftqualität */}
<p>
    Luftqualität: 
</p>
<hr />
{/* Temperaturkarte */}
<p>
    TemperaturKarte:
</p>
<hr />
{/* UV index | Sonnenuntergang */}
<p>
    UV Index: { location.current.uv }
    <br />
    SonnenUntergang: { location.forecast.forecastday[0].astro.sunset }
</p>
<hr />
{/* Wind | Regenmenge */}
<p>
    Windgeschwindigkeit: { location.current.wind_kph } km/h <br />
    Windrichtung: { location.current.wind_dir } <br />
    Windrichtung in grad: { location.current.wind_degree }° <br /> 
    Regenmenge: { location.current.precip_mm } mm in den letzten 2 Std.
    {/* Einen vergleich schreiben um herauszufinden an welchem tag regen kommt, und wie hoch. */}
</p>
<hr />
{/* Gefühlte temperatur | Feuchtigkeit */}
<p>
    Gefühlte Temperatur:  <br />
    Feuchtigkeit: 
</p>
<hr />
{/* Sichtweite | Luftdruck */}
<p>
    Sichtweite: { location.current.vis_km }km <br />
    Luftdruck: { location.current.pressure_mb }hPa
</p>
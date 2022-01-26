import { useContext } from 'react';

import { faSun } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';
import SunDownChart from '../SunDownChart/SunDownChart';

const SunDown = () =>
{
    const { location } = useContext(LocationContext);
    
    const formatTime = (time) =>
    {
        let timeHour = Number(time.substring(0,2));
        let timeMinute = Number(time.substring(3,5));
        const isNoon = time.substring(6,8) === "PM" ? true : false;

        timeHour = isNoon ? timeHour + 12 : timeHour;
        timeHour = timeHour < 10 ? "0" + timeHour.toString() : timeHour;
        timeMinute = timeMinute < 10 ? "0" + timeMinute.toString() : timeMinute;

        return(timeHour + ":" + timeMinute)
    }

    const sunData =
    {
        sunset: formatTime(location.forecast.forecastday[0].astro.sunset.toString()),
        sunrise: formatTime(location.forecast.forecastday[0].astro.sunrise.toString())
    }

    return(
        <Card
            size="half"
            title="Sonnenuntergang"
            icon={ faSun }
        >
            <h1>
                { sunData.sunset }
            </h1>
            <SunDownChart data={ location.forecast.forecastday[0].astro }/>
            <p>
                Sonnenaufgang: { sunData.sunrise }
            </p>
        </Card>
    );
}

export default SunDown;

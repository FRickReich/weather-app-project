import { useContext } from 'react';

import { LocationContext } from '../../LocationContext';

import './Header.scss';

const Header = () =>
{
    const { location } = useContext(LocationContext);

    const locationData =
    {
        name: location.location.name,
        currentTemp: location.current.temp_c,
        maxTemp: location.forecast.forecastday[0].day.maxtemp_c,
        minTemp: location.forecast.forecastday[0].day.mintemp_c,
        condition: location.current.condition.text
    }

    return(
        <div className="Header">
            <h2 className='city'>{ locationData.name }</h2>
            <h1 className='temperature'>{ locationData.currentTemp.toFixed() }°</h1>
            <p className='overview'>
                { locationData.condition.charAt(0).toUpperCase() + locationData.condition.slice(1) }
                <br />
                H:{ locationData.maxTemp.toFixed() }°&nbsp;
                T:{ locationData.minTemp.toFixed() }°
            </p>
        </div>
    )
}

export default Header;

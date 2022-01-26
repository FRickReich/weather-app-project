import Card from '../Card/Card';
import {
    Humidity, 
    Feelslike,
    Distance,
    Rain,
    UV,
    SunDown,
    Wind,
    Pressure,
    TemperatureMap,
    AirQuality,
    ForeCast
} from '../Cards/';

import './CardGrid.scss';

const CardGrid = () =>
{
    return(
        <div className="CardGrid">
            <div className="row">
                <Card size="full"></Card>
            </div>
            <div className="row">
                <ForeCast/>
            </div>
            <div className="row">
                <AirQuality/>
            </div>
            <div className="row">
                <TemperatureMap/>
            </div>
            <div className="row">
                <UV/>
                <SunDown/>
            </div>
            <div className="row">
                <Wind/>
                <Rain/>
            </div>
            <div className="row">
                <Feelslike/>
                <Humidity/>
            </div>
            <div className="row">
                <Distance/>
                <Pressure/>
            </div>
        </div>
    )
}

export default CardGrid;

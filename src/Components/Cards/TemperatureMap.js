import { useContext } from 'react';

import { faTachometerAlt, faTemperatureHigh, faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

const TemperatureMap = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="full"
            title="Temperatur"
            icon={ faTemperatureHigh }
        >
            
        </Card>
    );
}

export default TemperatureMap;

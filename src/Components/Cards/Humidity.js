import { useContext } from 'react';

import { faWater } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

const Humidity = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Feuchtigkeit"
            icon={ faWater }
        >
            <h1>
                { location.current.humidity }%
            </h1>
            <p>
                Der Taupunkt liegt derzeit bei 1°.
            </p>
        </Card>
    )
}

export default Humidity;

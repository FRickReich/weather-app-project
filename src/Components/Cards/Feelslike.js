import { useContext } from 'react';

import { faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

const FeelsLike = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Gefühlt"
            icon={ faThermometerThreeQuarters }
        >
            <h1>
                { location.current.feelslike_c.toFixed() }°
            </h1>
            <p>
                Ähnelt der aktuellen Temperatur.
            </p>
        </Card>
    );
}

export default FeelsLike;

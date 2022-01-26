import { useContext } from 'react';

import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

import PressureChart from '../PressureChart/PressureChart';

const Pressure = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Luftdruck"
            icon={ faTachometerAlt }
        >
            <PressureChart data={ location.current.pressure_mb }/>
        </Card>
    );
}

export default Pressure;

import { useContext } from 'react';

import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

const Pressure = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Luftdruck"
            icon={ faTachometerAlt }
        >
            
        </Card>
    );
}

export default Pressure;

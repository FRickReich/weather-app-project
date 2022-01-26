import { useContext } from 'react';

import { faWind } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';
import WindDirection from '../WindDirection/WindDirection';

const Wind = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Wind"
            icon={ faWind }
        >
            <WindDirection
                speed={ location.current.wind_kph }
                direction={ location.current.wind_dir }
                degree={ location.current.wind_degree }
            />
        </Card>
    );
}

export default Wind;

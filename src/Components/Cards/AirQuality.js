import { useContext } from 'react';

import { faDotCircle, faQuestion, faTemperatureLow, faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';
import { faDigitalOcean } from '@fortawesome/free-brands-svg-icons';

const AirQuality = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="full"
            title="Luftqualität"
            icon={ faDotCircle }
        >
            
        </Card>
    );
}

export default AirQuality;

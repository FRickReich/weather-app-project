import { useContext } from 'react';

import { faCalendarAlt, faDotCircle, faQuestion, faTemperatureLow, faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';
import { faDigitalOcean } from '@fortawesome/free-brands-svg-icons';

const Forecast = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="full"
            title="10-Tage-Vorhersage"
            icon={ faCalendarAlt }
        >
            
        </Card>
    );
}

export default Forecast;

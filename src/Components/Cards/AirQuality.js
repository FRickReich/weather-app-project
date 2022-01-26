import { useContext } from 'react';

import { faChevronRight, faDotCircle, faQuestion, faTemperatureLow, faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LocationContext } from './../../LocationContext';

import UVChart from '../UVChart/UVChart';

const AirQuality = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="full"
            title="Luftqualität"
            icon={ faDotCircle }
        >
            <h1>
                Mäßig
            </h1>
            <span className="info">Die Luftqualität ist genauso wie gestern zu dieser Zeit.</span>
            <UVChart amount={ 12 } />
            <br />
            <br />
            <a className="bottomlink" href="#">Mehr anzeigen <FontAwesomeIcon className="icon" icon={ faChevronRight } /></a>
        </Card>
    );
}

export default AirQuality;

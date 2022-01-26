import { useContext } from 'react';

import { faSun } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

const SunDown = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Sonnenuntergang"
            icon={ faSun }
        >
            
        </Card>
    );
}

export default SunDown;

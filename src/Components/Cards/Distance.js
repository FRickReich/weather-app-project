import { useContext } from 'react';

import { faEye } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

const Distance = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Sichtweite"
            icon={ faEye }
        >
            <h1>
                { location.current.vis_km } km
            </h1>
            <p>
                Leichter Dunst schränkt die Sichtweite ein.
            </p>
        </Card>
    );
}

export default Distance;

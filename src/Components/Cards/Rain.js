import { useContext } from 'react';

import { faTint } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';

const Rain = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="Regenmenge"
            icon={ faTint }
        >
            <h1>
                { location.current.precip_mm } mm
            </h1>
            <h3>
                In den letzten 24 Std.
            </h3>
            <p>
                0 mm in den nächsten 24 Std. erwartet.
            </p>
        </Card>
    );
}

export default Rain;

import { useContext } from 'react';

import { faSun, faTint } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

import { LocationContext } from './../../LocationContext';
import UVChart from '../UVChart/UVChart';

const UV = () =>
{
    const { location } = useContext(LocationContext);

    return(
        <Card
            size="half"
            title="UV-Index"
            icon={ faSun }
        >
            <h1>
                { location.current.uv }
            </h1>
            <h3>
                Niedrig
            </h3>
            <UVChart amount={ location.current.uv } />
            <p>
                Ganztägig niedrige Werte.
            </p>
        </Card>
    );
}

export default UV;

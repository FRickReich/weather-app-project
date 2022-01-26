import { useState, useEffect, useContext } from 'react';

import { CardGrid, Footer, Header, LoadingSpinner } from '../';
import { LocationContext } from './../../LocationContext';

import './Overview.scss';

const apiKey = "32cf1fdd0c5c4deeb2b141821222401";

const Overview = ({ loc }) =>
{
    const [ loading, setLoading ] = useState(true);

    const { setLocation } = useContext(LocationContext);

    useEffect(() =>
    {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${ apiKey }&&q=${ loc }&days=10&aqi=yes&lang=de&alerts=no`)
        .then(data => data.json())
        .then(json =>
        {
            if(json.location.name !== "Null")
            {
                setLocation(json);
                setLoading(false);
                console.log(json);
            }
        });
    }, [ loc ]);

    return(
        <div className="Overview">
            {
                !loading ?
                (
                    <>
                        <Header/>
                        <CardGrid/>
                        <Footer/>
                    </>
                )
                :
                (
                    <LoadingSpinner/>
                )
            }
        </div>
    )
}

export default Overview;

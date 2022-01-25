import { useState, useEffect } from "react";
import { Overview } from "../Components";

const Home = () =>
{
    const [ location, setLocation ] = useState(null);

    const success = (pos) =>
    {
        let crd = pos.coords;

        setLocation(`${crd.latitude},${crd.longitude}`);
    }

    useEffect(() =>
    {
        navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result)
        {
            if (result.state === "granted")
            {
                navigator.geolocation.getCurrentPosition(success);
            }
            else if (result.state === "prompt") {
                navigator.geolocation.getCurrentPosition(success, err => console.log(err), {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                });
            } else if (result.state === "denied") {
                //If denied then you have to show instructions to enable location
            }
      
            result.onchange = function ()
            {
                console.log(result.state);
            };
        });
    }, []);

    return(
        <>
            {
                location !== null ?
                (
                    <>
                        <Overview loc={ location } />
                    </>
                )
                :
                (
                    <>
                        NO HOME LOCATION SET
                    </>
                )
            }
            
        </>
    )
}

export default Home;

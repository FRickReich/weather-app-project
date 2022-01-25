import { useParams } from "react-router-dom";
import { Overview } from "../Components";

const Location = () =>
{
    const { selected } = useParams();

    // console.log(selected);

    return(
        <>
            <Overview loc={ selected }/>
        </>
    )
}

export default Location;

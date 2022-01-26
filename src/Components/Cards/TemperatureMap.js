import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

const TemperatureMap = () =>
{
    return(
        <Card
            size="full"
            title="Temperatur"
            icon={ faTemperatureHigh }
        >
            
        </Card>
    );
}

export default TemperatureMap;

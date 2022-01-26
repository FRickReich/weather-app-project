import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

const Forecast = () =>
{
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

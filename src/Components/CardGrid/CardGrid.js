import Card from '../Card/Card';
import {
    Humidity, 
    Feelslike,
    Distance
} from '../Cards/';

import './CardGrid.scss';

const CardGrid = () =>
{
    return(
        <div className="CardGrid">
            <div className="row">
                <Card size="full"></Card>
            </div>
            <div className="row">
                <Card size="full"></Card>
            </div>
            <div className="row">
                <Card size="full"></Card>
            </div>
            <div className="row">
                <Card size="full"></Card>
            </div>
            <div className="row">
                <Card size="half"></Card>
                <Card size="half"></Card>
            </div>
            <div className="row">
                <Card size="half"></Card>
                <Card size="half"></Card>
            </div>
            <div className="row">
                <Feelslike/>
                <Humidity/>
            </div>
            <div className="row">
                <Distance/>
                <Card size="half"></Card>
            </div>
        </div>
    )
}

export default CardGrid;

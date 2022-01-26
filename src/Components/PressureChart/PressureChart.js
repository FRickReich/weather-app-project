import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './PressureChart.scss';

const PressureChart = ({ data }) =>
{
    return(
        // <div>{ data.toLocaleString() }</div>
        <div className="PressureChart">
            <div className="circle">
                <div className="flow"></div>
                {
                    [...Array(30).keys()].map((el, i) =>
                    {
                        return (
                            <div
                                key={ i }
                                className="element"
                                style={{ transform: `rotate(${ el * 6 }deg)` }}
                            ></div>
                        )
                    })
                }
            </div>
            <div className="safeline"></div>
            <div className="mask"></div>
            <div className="mask2"></div>

            <div className="data">
                <div className="arrow">
                    <FontAwesomeIcon className="icon" icon={ faArrowDown } />
                </div>
                <div className="number">{ data }</div>
                <div className="subtitle">hPa</div>
            </div>

            <div className="arrows">
                <FontAwesomeIcon className="icon right" icon={ faArrowDown } />
                <FontAwesomeIcon className="icon left" icon={ faArrowUp } />
            </div>
        </div>
    )
}

export default PressureChart;

import './SunDownChart.scss';

const SunDownChart = ({ data }) =>
{
    return(
        <div className="SunDownChart">
            <div className="line"></div>
            <div className="rise up">
                <div className="box top"></div>
            </div>
            <div className="sundot"></div>
            <div className="rise down">
                <div className="box left"></div>
                <div className="box right"></div>
            </div>
        </div>
    )
}

export default SunDownChart;

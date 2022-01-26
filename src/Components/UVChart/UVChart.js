import './UVChart.scss';

const UVChart = ({ amount }) =>
{
    return(
        <div className="UVChart">
            <div className="circle" style={{ left: amount * 10.75 }}></div>
        </div>
    );
}

export default UVChart;

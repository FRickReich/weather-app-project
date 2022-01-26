import './WindDirection.scss';

const WindDirection = ({ speed, degree }) =>
{
    return(
        <div className="WindDirection">
            <div className='ring'>
                {
                    [...Array(120).keys()].map((el, i) =>
                    {
                        return (
                            <div
                                key={ i }
                                className={`element ${ el % 10 === 0 && "main" } ${ el % 30 === 0 && "quarter"}`}
                                style={{ transform: `rotate(${ el * 3 }deg)` }}
                            ></div>
                        )
                    })
                }
                <div className="mask"></div>
            </div>
            <div className="directions">
                <div className="triangle">▲</div>
                <div className="n">N</div>
                <div className="o">O</div>
                <div className="s">S</div>
                <div className="w">W</div>
            </div>
            <div className="text">
                <div className="header">
                { speed.toFixed() }
                </div>
                <div className="subheader">km/h</div>
            </div>
            <div className='arrow' style={{ transform: `rotate(${ degree + 90 }deg)`}}>
                <div className="tip">▲</div>
                <div className="end"></div>
                <div className="mask"></div>
            </div>
        </div>
    );
}

export default WindDirection;

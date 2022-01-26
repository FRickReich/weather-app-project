import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle, faLocationArrow, faMap } from '@fortawesome/free-solid-svg-icons';

import './BottomBar.scss';

const BottomBar = () =>
{
    const locations = [ 'dortmund', 'berlin', 'bochum', 'gelsenkirchen' ];

    return(
        <div className="BottomBar">
            <div className="left">
                <FontAwesomeIcon className="icon" icon={ faMap } />
            </div>
            <div className="center">
                <NavLink to="/">
                    <FontAwesomeIcon className="icon" icon={ faLocationArrow } />
                </NavLink>
                {
                    locations.length > 0 && locations.map((location, i) =>
                    {
                        return(
                            <NavLink to={`/location/${ location }`} key={ i }>
                                <FontAwesomeIcon className="icon" icon={ faCircle }/>
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className="right">
                <FontAwesomeIcon className="icon" icon={ faBars } />
            </div>
        </div>
    )
}

export default BottomBar;

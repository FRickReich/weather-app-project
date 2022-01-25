import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Card.scss';

const Card = ({ children, size = "full", title, icon }) =>
{
    return(
        <div className={`Card ${ size }`}>
            <div className="title">
                {
                    icon && <><FontAwesomeIcon className="icon" icon={ icon } />&nbsp;&nbsp;&nbsp;</>
                }
                { title }
                &nbsp;
            </div>
            <div className="body">
                { children }
            </div>
        </div>
    )
}

export default Card;

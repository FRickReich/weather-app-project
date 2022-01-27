
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss';

const Footer = () =>
{
    return(
        <div className="Footer">
            <ul>
                <li>
                        Problem melden
                        <FontAwesomeIcon className="icon" icon={ faCommentAlt } />
                </li>
                <li>
                        In "Karten" öffnen
                        <FontAwesomeIcon className="icon" icon={ faExternalLinkSquareAlt } />
                </li>
            </ul>
            <p className="position">
                Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
            </p>
            <div className="social">
                <a href="http://github.com/FRickReich/">
                    <FontAwesomeIcon className="icon" icon={ faGithub } />
                </a>
            </div>
        </div>
    )
}

export default Footer;
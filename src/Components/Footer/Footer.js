import { useContext } from 'react';

import { LocationContext } from '../../LocationContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss';

const Footer = () =>
{
    const { location } = useContext(LocationContext);

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
                Wetter für { location.location.name }
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
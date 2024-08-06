import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faSearch, faEnvelope, faGear, faBell, faSmile } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const icons = [faEnvelope, faGear, faBell, faSmile];
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='active'>
                    <FontAwesomeIcon icon={faAppleAlt} />
                </div>
                <div className="search-box">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className='header-right'>
                <ul>
                    {icons.map((icon, index) => (
                        <li key={index}>
                            <FontAwesomeIcon icon={icon} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;

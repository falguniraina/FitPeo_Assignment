

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSquarePollVertical, faCalendarCheck, faWallet, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const icons = [faHome, faSquarePollVertical, faCalendarCheck, faWallet];
  return (
    <aside className="sidebar">
      <ul className="icon-list">
        {icons.map((icon, index) => (
          <li key={index} className={index === 0 ? 'active' : ''}>
            <FontAwesomeIcon icon={icon} />
          </li>
        ))}
      </ul>
      <div className="logout">
        <ul className="logout-list">
          <li>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

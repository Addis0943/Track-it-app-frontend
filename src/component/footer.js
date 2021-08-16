import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare, faChartLine, faChartPie, faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = (path) => {
  if (path === '/') {
    return '';
  }
  return (
    <div className="footer">

      <Link to="/addMeasurment">
        <div>
          <FontAwesomeIcon icon={faPlusSquare} />
          <p>Add Measure</p>
        </div>

      </Link>
      <Link to="/track">
        <div>
          <FontAwesomeIcon icon={faChartLine} />
          <p>Track</p>

        </div>
      </Link>
      <Link to="/Progress">
        <div>
          <FontAwesomeIcon icon={faChartPie} />
          <p>Progress</p>
        </div>
      </Link>
      <Link to="/">
        <div>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <p>Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;

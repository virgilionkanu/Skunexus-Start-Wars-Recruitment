import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './GridPages.css';

function GridPages({ data: { header = [], values = [] } }) {
  const navigate = useNavigate();

  return (
    <div>
      <table className='gridTable'>
        <thead>
          <tr>
            {header.map(colName => <th key={colName}>{colName}</th>)}
          </tr>
        </thead>
        <tbody>
          {values.map((row, index) => (
            <tr key={index}>
              {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Previous page</button>
    </div>
  );
}

GridPages.propTypes = {
  data: PropTypes.object
}

export default GridPages;

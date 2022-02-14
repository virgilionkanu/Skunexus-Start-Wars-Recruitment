import PropTypes from 'prop-types';

import './GridHome.css';
function GridHome({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
            {!!actions.length &&
              <td className='gridActions'>
                {actions.map(({ label, action }) =>
                  <button key={label} onClick={() => {
                    action(row)
                  }}
                  >
                    {label}
                  </button>)
                }
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

GridHome.propTypes = {
  data: PropTypes.object
}

export default GridHome;

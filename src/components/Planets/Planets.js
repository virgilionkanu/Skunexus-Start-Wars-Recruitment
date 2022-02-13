import React, { useState, useEffect } from 'react';

import './Planets.css';
import Grid from '../Grid';
import { findAllPlanets } from '../../services/resource/planets';

function Planets() {

  const [values, setValues] = useState([]);

  useEffect(() => {
    async function onFindAllPlanets() {
      const { error, results } = await findAllPlanets()
      if (!error) {
        setValues(results)
      }
    }
    onFindAllPlanets()
  }, []);

  const dataForGrid = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    values,
    actions: [
      {
        label: 'Go to Films',
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`) }
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`) }
      }
    ]
  }

  return (
    <div className='App'>
      <Grid data={dataForGrid} />
    </div>
  );
}

export default Planets;

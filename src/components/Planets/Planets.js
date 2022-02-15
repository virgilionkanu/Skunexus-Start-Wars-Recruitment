import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Planets.css';
import GridHome from '../GridHome';
import { findAllPlanets } from '../../services/resource/planets';

function Planets() {

  const [values, setValues] = useState([]);
  const navigate = useNavigate();

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
        label: 'Details',
        action: (row) => {
          navigate('/planetDetail', { state: row.url })
        }
      },
      {
        label: 'Go to Films',
        action: (row) => {
          navigate('/films', { state: row.films })
        }
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          navigate('/residents', { state: row.residents })
        }
      }
    ]
  }

  return (
    <div className='App'>
      <GridHome data={dataForGrid} />
    </div>
  );
}

export default Planets;

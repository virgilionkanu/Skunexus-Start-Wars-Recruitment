import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './PlanetsDetails.css';
import GridPages from '../GridPages';

function PlanetsDetails() {
  const { state } = useLocation();
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get(`${state}`)
      .then(resp => {
        setValues([resp.data])
      }).catch(error => {
        console.log(error)
      })
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
  }

  return (
    <div className='App'>
      <h1>Planet Details</h1>
      <GridPages data={dataForGrid} />
    </div>
  );
}

export default PlanetsDetails;

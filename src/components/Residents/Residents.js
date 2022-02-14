import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';

import './Residents';
import GridPages from '../GridPages';

function Residents() {

  const { state } = useLocation();
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get(`${state[0]}`)
      .then(resp => {
        setValues([resp.data])
      }).catch(error => {
        console.log(error)
      })
  }, []);

  const dataForGrid = {
    header: [
      'birth_year',
      'eye_color',
      'gender',
      'hair_color',
      'height',
      'mass',
      'skin_color',
    ],
    values,
  }

  return (
    <div className='App'>
      <h1>Star Wars Residents</h1>
      <GridPages data={dataForGrid} />
    </div>
  );
}

export default Residents;

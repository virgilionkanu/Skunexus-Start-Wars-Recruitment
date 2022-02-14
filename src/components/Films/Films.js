import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './Films.css';
import GridPages from '../GridPages/GridPages';

function Films() {
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
      'director',
      'producer',
      'release_date',
      'title'
    ],
    values,
  }

  return (
    <div className='App'>
      <h1>Star Wars Films</h1>
      <GridPages data={dataForGrid} />
    </div>
  );
}

export default Films;

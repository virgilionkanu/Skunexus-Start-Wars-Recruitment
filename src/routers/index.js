import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../components/App';
import Films from '../components/Films/Films';
import NotFoundPage from '../components/NotFoundPage';
import PlanetsDetails from '../components/PlanetsDetails/PlanetsDetails';
import Residents from '../components/Residents/Residents';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path='/planetDetail' element={<PlanetsDetails />} />
                <Route path='/films' element={<Films />} />
                <Route path='/residents' element={<Residents />} />
                <Route element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

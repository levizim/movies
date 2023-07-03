import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import TVPage from './components/TVPage';
import IndividualTitle from './components/IndividualTitle';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/tv" element={<TVPage />} />
                <Route path="/title/:mediaType/:id" element={<IndividualTitle />} />
            </Routes>
        </Router>
    );
}

export default App;

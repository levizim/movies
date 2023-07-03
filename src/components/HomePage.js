import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&page=1`
            );
            setMovies(response.data.results);
        };

        const fetchShows = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/tv/popular?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&page=1`
            );
            setShows(response.data.results);
        };

        fetchMovies();
        fetchShows();
    }, []);

    return (
        <div className="container">
            <h1>Welcome to Movie Finder!</h1>
            <p>Discover popular movies and TV shows</p>
            
            <h2>Popular Movies</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-sm-3 mb-4" key={movie.id}>
                        <div className="card h-100">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="card-img-top" />
                            <div className="card-body">
                                <Link to={`/title/movie/${movie.id}`}>
                                    <h5 className="card-title">{movie.title}</h5>
                                </Link>
                                <p className="card-text">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <h2>Popular TV Shows</h2>
            <div className="row">
                {shows.map((show) => (
                    <div className="col-sm-3 mb-4" key={show.id}>
                        <div className="card h-100">
                            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} className="card-img-top" />
                            <div className="card-body">
                                <Link to={`/title/tv/${show.id}`}>
                                    <h5 className="card-title">{show.name}</h5>
                                </Link>
                                <p className="card-text">{show.overview}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
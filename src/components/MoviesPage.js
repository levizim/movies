import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
    // Declare state variables for movies and search query
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Fetch movies
        const fetchMovies = async () => {
            const response = await fetch(
                search
                ? `https://api.themoviedb.org/3/search/movie?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&query=${search}&page=1&include_adult=false`
                : `https://api.themoviedb.org/3/movie/popular?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&page=1`
            );
            const data = await response.json();
            setMovies(data.results);
        };

        // Call the fetchMovies function when search changes
        fetchMovies();
    }, [search]);

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    return (
        <div className="container">
            <div className="mb-3">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search Movies..."
                    className="form-control"
                />
            </div>
            <h2>Popular Movies</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-sm-3 mb-4" key={movie.id}>
                        <div className="card h-100">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="card-img-top"
                            />
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
        </div>
    );
};

export default MoviesPage;

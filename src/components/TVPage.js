import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TVPage = () => {
    // Declare state variables for TV shows and search query
    const [shows, setShows] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Fetch TV shows
        const fetchShows = async () => {
            const response = await fetch(
                search
                ? `https://api.themoviedb.org/3/search/tv?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&query=${search}&page=1&include_adult=false`
                : `https://api.themoviedb.org/3/tv/popular?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&page=1`
            );
            const data = await response.json();
            setShows(data.results);
        };

        // Call the fetchShows function when search changes
        fetchShows();
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
                    placeholder="Search TV Shows..."
                    className="form-control"
                />
            </div>
            <h2>Popular TV Shows</h2>
            <div className="row">
                {shows.map((show) => (
                    <div className="col-sm-3 mb-4" key={show.id}>
                        <div className="card h-100">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                alt={show.name}
                                className="card-img-top"
                            />
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

export default TVPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IndividualTitle = () => {
    // Declare state variables for title details and reviews
    const [title, setTitle] = useState({});
    const [reviews, setReviews] = useState([]);

    // Get the id and mediaType from the URL parameters using the useParams hook
    const { id, mediaType } = useParams();

    useEffect(() => {
        // Fetch title details
        const fetchTitleDetails = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=76222a968c469d597af4f8040683e1ae&language=en-US`
            );
            const data = await response.json();
            setTitle(data);
        };

        // Fetch reviews
        const fetchReviews = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&page=1`
            );
            const data = await response.json();
            setReviews(data.results);
        };

        // Call the fetchTitleDetails and fetchReviews functions
        fetchTitleDetails();
        fetchReviews();
    }, [id, mediaType]);

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-sm-4">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${title.poster_path}`} 
                        alt={title.title} 
                        className="img-fluid" 
                    />
                </div>
                <div className="col-sm-8">
                    <h1>{mediaType === 'movie' ? title.title : title.name}</h1>
                    <p>{title.overview}</p>
                </div>
            </div>
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id} className="card mb-3">
                    <div className="card-header">
                        <h3>{review.author}</h3>
                    </div>
                    <div className="card-body">
                        <p>{review.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IndividualTitle;

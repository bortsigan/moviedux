import React from 'react';
import '../styles.css';

export default function MovieCard( { movie, isWatchlisted, toggleWatchlist }) {

    const handleError = (e) => {
        e.target.src = "images/default.jpg";
    }

    const getRatingColor = (rating) => 
        rating >= 8 ? "rating-good" : rating >= 5 ? "rating-ok" : "rating-bad";

    return (
        <div>
            <div key={movie.id} className="movie-card">
                <img src={`images/${movie.image}`}  alt={movie.title}  onError={handleError} />
                <div className="movie-card-info">
                    <h3 className="movie-card-title">{ movie.title }</h3>
                    <p className="movie-card-genre">{ movie.genre }</p>
                    <p className={`movie-card-rating ${getRatingColor(movie.rating)}`}>{ movie.rating }</p>
                </div>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        checked={isWatchlisted} 
                        onChange={() => toggleWatchlist(movie.id)}
                    />

                    <span className="slider">
                        <span className="slider-label">
                            { isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
                        </span>
                    </span>
                </label>
            </div>
        </div>
    )
}
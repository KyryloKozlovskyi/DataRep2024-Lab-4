import React from 'react';
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

// Logs new movie data to the console
function MovieItem(props) {
    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
    }, [props.myMovie]); // Only run this effect when the mymovie prop changes
    // Returns a Bootstrap Cards with the movie title as the header, 
    // the poster image in the body, and the year at the footer.
    return (
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem; // Exports the component
import React from 'react';
import Movies from './Movies';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

// Read Component
const Read = () => {
    // Adds state variables to functional components
    // Stores data returned from an API and manages the state of the application by updating movies
    const [movies, setMovies] = useState([]);

    // React hook, useEffect, to synchronize a component with an external system
    // HTTP GET call returns the JSON data from
    useEffect(() => {
        axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872").then((responce) => { // API Call
            console.log(responce.data); // Log Obj to the console
            setMovies(responce.data.movies) // Sets the state
        }).catch()
    }, []);

    // Returns the relevant message and the movie array
    return (
        <div>
            <h3>Hello from the Read component</h3>
            <Movies myMovies={movies} />
        </div>
    );
}

export default Read; // Exports the component
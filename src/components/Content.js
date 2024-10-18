import React from 'react';

// Content component
const Content = () => {
    // Returns "Hello World" and current time
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content; // Exports the component
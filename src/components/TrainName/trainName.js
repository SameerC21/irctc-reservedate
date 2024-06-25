import React from 'react';
import "./trainName.css"

const TrainName = ({ train }) => {

    if (!train) {
        return <div>No train details available.</div>;
    }
    return (
        <div>
            <h2>Train Details</h2>
            <p><strong>Number:</strong> {train.number}</p>
            <p><strong>Name:</strong> {train.name}</p>
            <p><strong>Route:</strong> {train.route}</p>
        </div>
    );
};

export default TrainName;

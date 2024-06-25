import React, { useState } from 'react';
import axios from 'axios';

const PnrStatus = () => {
  const [pnr, setPnr] = useState('');
  const [pnrDetails, setPnrDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPnrStatus = () => {
    setLoading(true);
    setError(null);

    // Example endpoint. Replace with the actual PNR status API endpoint.
    const endpoint = `https://api.example.com/pnr/${pnr}`;

    axios.get(endpoint)
      .then(response => {
        setPnrDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Check PNR Status</h1>
      <input
        type="text"
        value={pnr}
        onChange={(e) => setPnr(e.target.value)}
        placeholder="Enter PNR Number"
      />
      <button onClick={fetchPnrStatus}>Check Status</button>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {pnrDetails && (
        <div>
          <h2>PNR Status</h2>
          <p>Train Number: {pnrDetails.train_number}</p>
          <p>Train Name: {pnrDetails.train_name}</p>
          <p>Boarding Point: {pnrDetails.boarding_point}</p>
          <p>Reservation Upto: {pnrDetails.reservation_upto}</p>
          <p>Journey Date: {pnrDetails.journey_date}</p>
          <h3>Passenger Details</h3>
          {pnrDetails.passengers.map((passenger, index) => (
            <div key={index}>
              <p>Passenger {index + 1}:</p>
              <p>Booking Status: {passenger.booking_status}</p>
              <p>Current Status: {passenger.current_status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PnrStatus;

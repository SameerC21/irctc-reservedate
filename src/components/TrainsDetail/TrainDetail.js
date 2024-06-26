import React, { useState } from 'react';
import { getTrain } from '../apiService';

const TrainDetails = () => {
  const [trainNo, setTrainNo] = useState('');
  const [trainDetails, setTrainDetails] = useState(null);

  const fetchTrainDetails = async () => {
    const data = await getTrain(trainNo);
    setTrainDetails(data);
  };

  return (
    <div>
      <h2>Get Train Details</h2>
      <input
        type="text"
        value={trainNo}
        onChange={(e) => setTrainNo(e.target.value)}
        placeholder="Enter Train Number"
      />
      <button onClick={fetchTrainDetails}>Get Details</button>
      {trainDetails && (
        <div>
          <h3>Train Details</h3>
          <pre>{JSON.stringify(trainDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TrainDetails;

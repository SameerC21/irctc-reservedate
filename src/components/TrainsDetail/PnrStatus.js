import React, { useState } from 'react';
import { getPnrStatus } from '../apiService';

const PnrStatus = () => {
  const [PnrNo, setPnrNo] = useState('');
  const [PnrDetails, setPnrDetails] = useState(null);

  const fetchPnrDetails = async () => {
    const data = await getPnrStatus(PnrNo);
    setPnrDetails(data);
  };

  return (
    <div>
      <h2>Get PNR Details</h2>
      <input
        type="text"
        value={PnrNo}
        onChange={(e) => setPnrNo(e.target.value)}
        placeholder="Enter PNR Number"
      />
      <button onClick={fetchPnrDetails}>GetPnr Status</button>
      {PnrDetails && (
        <div>
          <h3>Pnr Details</h3>
          <pre>{JSON.stringify(PnrDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PnrStatus;

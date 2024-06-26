import axios from 'axios';

const BASE_URL = 'http://your-server-url'; // replace with your server URL

export const getTrain = async (trainNo) => {
  const response = await axios.get(`https://erail.in/getTrains.aspx?TrainNo=${trainNo}`, { params: { trainNo } });
  return response.data;
};

export const getTrainsBetweenStations = async (from, to) => {
  const response = await axios.get(`${BASE_URL}/betweenStations`, { params: { from, to } });
  return response.data;
};

export const getTrainOn = async (from, to, date) => {
  const response = await axios.get(`${BASE_URL}/getTrainOn`, { params: { from, to, date } });
  return response.data;
};

export const getRoute = async (trainNo) => {
  const response = await axios.get(`${BASE_URL}/getRoute`, { params: { trainNo } });
  return response.data;
};

export const getStationLive = async (code) => {
  const response = await axios.get(`${BASE_URL}/stationLive`, { params: { code } });
  return response.data;
};

export const getPnrStatus = async (pnr) => {
  const response = await axios.get(`https://www.confirmtkt.com/pnr-status`, { params: { pnr } });
  return response.data;
};

// import React,{ useState } from 'react'
import React from 'react';
import '../App.css'
import '../Responsive.css';
import DateCalc from './DateCalc';
import Today from './Today';
// import TrainName from './TrainName/trainName';
// import PnrStatus from './PnrStatus/pnrStatus';
import banner from '../assets/banner-1.jpg'


function Main() {

  // const [trainNumber, setTrainNumber] = useState('');
  // const [trainDetails, setTrainDetails] = useState(null);

  // const handleInputChange = (event) => {
  //   setTrainNumber(event.target.value);
  // };

  // const fetchTrainDetails = () => {
  //   // Replace with your actual API endpoint
  //   fetch(`https://api.example.com/trains/${trainNumber}`)
  //     .then(response => response.json())
  //     .then(data => setTrainDetails(data))
  //     .catch(error => {
  //       console.error('Error fetching train data:', error);
  //       setTrainDetails(null);
  //     });
  // };

  return (
    <section className='mainpage'>
    <div className='banner'>
        <img src={banner} alt='banner' />
    </div>
    <div className="irctc-date">
        <div className="content">
            {/*<h2>IRCTC TICKET DATE CALCULATOR</h2> */}
            <div className="today-reservation">
                <h3>Today you can book tickets for journey till <span id="date"><Today /></span></h3>
                <p>General reservation counter is open at 8:00am</p>
                <p>The above date is calculated assuming the train starts from the starting station on the same day</p>
                <p>The date on which the particular train starts from the starting station should be mentioned as Date of Journey</p>
            </div>
            <form>
                <label>Enter the DATE of Journey:
                    <DateCalc />
                </label>
            </form>
            <p>Book tickets at <a href="http://www.irctc.co.in/" target='_blank' rel="noreferrer">IRCTC</a> and Enjoy the journey.</p>
    
            {/* <PnrStatus /> */}

            {/* <div>
              <h1>Train Information</h1>
              <input
                type="text"
                value={trainNumber}
                onChange={handleInputChange}
                placeholder="Enter train number"
                className='train-input'
                max-length={5}
              />
              <button onClick={fetchTrainDetails}>Get Train Details</button>
              
              <TrainName train={trainDetails} />
            </div> */}
        </div>
    </div>
    <p className='publish'>Copyright ©2024</p>
    {/*<p className='publish'>Developed By Sameer Chalke. &#128516;</p> */}
    </section>
  )
}


export default Main;

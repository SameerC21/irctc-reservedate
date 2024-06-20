import React from 'react'
import '../App.css'
import '../Responsive.css';
import DateCalc from './DateCalc';
import Today from './Today';
import banner from '../assets/banner-1.jpg'


function Main() {
  return (
    <section className='mainpage'>
        <div className='banner'>
        <img src={banner} alt='banner'/>
        </div>
        <div className="irctc-date">
        <div className="content">
            <h2>IRCTC TICKET DATE CALCULATOR</h2>
            <p>Book tickets at <a href= "http://www.irctc.co.in/"  target='_blank' rel="noreferrer">IRCTC</a>, Ticket date CALCULATOR.</p>
            <div className= "today-reservation">
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
        </div>
        </div>
        <p className='publish'>Copyright ©2024</p>
      {/* <p className='publish'>Developed By Sameer Chalke. &#128516;</p> */}
    </section>
  )
}


export default Main;

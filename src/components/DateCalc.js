import React,{ useState } from 'react'
import DatePicker from 'react-datepicker'
// import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css'


function DateCalc() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const [reservationDate, setReservationDate] = useState(null);

  const handleCheckInDate = (date) => {
    setSelectedDate(date);
    const reservationDate = new Date(date.getTime() - 120 * 24 * 60 * 60 * 1000);  //get reverve date from selected date

    const formattedReservationDate = `${reservationDate.getDate()}-${reservationDate.getMonth() + 1}-${reservationDate.getFullYear()}`; //date format
    setReservationDate(formattedReservationDate.toLocaleString()); 
  }

  const minDate = new Date();
  minDate.setDate(minDate.getDate() - 120);


  return (
    <>
        <DatePicker
        selected={selectedDate}
        onChange={handleCheckInDate}
        dateFormat='dd/MM/yyyy'
        placeholderText='Please Select Date'
        minDate={new Date()}
         />
        {/* <p>{reserveDate()}</p> */}
        
        {
          reservationDate && (
            <div className="summary">
            <p>
              You book a Ticket on  
              <span className='bold'> {reservationDate} </span> 
              at 8:00am.
            </p>
          </div>
          )
        }
    </>
  )
}


export default DateCalc;

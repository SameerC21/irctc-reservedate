import React,{useEffect} from 'react'

function Today() {
    useEffect(() => {
    var Reservedate = new Date();

    // var reserveDate = document.getElementById('reserve_date');
    var todResv = document.getElementById('to_resv');

    //todays date reservation
    Reservedate.setDate(Reservedate.getDate() + 120);
    todResv.innerText = Reservedate.toDateString();
    // console.log(todResv.innerText);
    }, [])
  return (
    <>
      <span id="to_resv"></span> 
    </>
  )
}

export default Today

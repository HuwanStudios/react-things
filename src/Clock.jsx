// function ClockOne({ time }) {
//     let hours = time.getHours();
//     if (hours >= 0 && hours <= 6) {
//       document.getElementById('time').className = 'night';
//     } else {
//       document.getElementById('time').className = 'day';
//     }
//     return (
//       <h1 id="time">
//         {time.toLocaleTimeString()}
//       </h1>
//     );
//   }
// //Challenge #1

  export default function Clock({time}){
    const hours = time.getHours();
    console.log(hours);
    const isNight = hours >= 0 && hours <= 6;
    console.log(nightAndDay);

    return(
        <h1 className={isNight ? 'night' : 'day'}>
            {time.toLocaleTimeString()}
        </h1>
    );
  }

  //To add the class we would have to push or createElement.add. . . 
  //"night" during the time from midnight to six hours in the morning
  //"night" =  hours <=6
  //"day" at all other times.
  //"day" = hours > 0
  // Date object's prototype, and getHours it's used to retrieve the hour for the specified date,
  // Date object's prototype, and time.toLocaleTimeString() is called every time React re-renders. 
  // sIt formats the time object to a string
  // it's night (between midnight and 6 AM) or day (at all other times)
  //_“if `isPacked`, then (`&&`) render the checkmark, otherwise, render nothing”_.
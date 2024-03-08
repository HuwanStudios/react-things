// import { Fragment } from "react";

// const poem = {
//     lines: [
//       'I write, erase, rewrite',
//       'Erase again, and then',
//       'A poppy blooms.'
//     ]
//   };
  
//   export default function Poem() {
//     let itemContent = name;

//     return (
//       <section>
//         {poem.lines.map((line, index) =>
//           <p key={index}>
//             {line}<hr/>
//           </p>
//         )}
//       </section>
//     );
//   }
  
//   // Attemp #1

//   import { Fragment } from 'react';

// const poem = {
//   lines: [
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };

// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, i) =>
//         <Fragment key={i}>
//           {i > 0 && <hr />}
//           <p>{line}</p>
//         </Fragment>
//       )}
//     </article>
//   );
// }


//   // Attemp #2

// const poem = {
//     lines: [
//       'I write, erase, rewrite',
//       'Erase again, and then',
//       'A poppy blooms.'
//     ]
//   };
  
//   export default function Poem() {
//     let output = [];
  
//     // Fill the output array
//     poem.lines.forEach((line, i) => {
//       output.push(
//         <hr key={i + '-separator'} />
//       );
//       output.push(
//         <p key={i + '-text'}>
//           {line}
//         </p>
//       );
//     });
//     // Remove the first <hr />
//     output.shift();
  
//     return (
//       <article>
//         {output}
//       </article>
//     );
//   }

  
//   // Attemp #3

// return (
//   <article>
//     // console.log(index);
//       // console.log(array.length);
//       console.log(line);
// {poem.lines.map((line, index, array) => {
     
//       return (
//         <div>
//           <p className="line" key={index}>
//             {
//                (index !== array.length - 1) 
//                ?  ( 
//                <p>{line}</p> 
//                <hr /> 
//                )
//                : <p>{line}<p>
//             }
//           </p>
//         </div>
//       );
//     }
//   </article>
// );

// ____


//  poem.lines.map((line, index, arr) => (

//         { (index !== arr.length - 1)
//           ? ( 
//             <p key={index}>{line}</p>
//             )
//           : ( <p key={index}>{line}</p>)
//         }
     


//     ))
//    </div>
//  // Attempt #4


///////////////////

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

// const night = {(bg-white)}
// const day =

// export default function Clock({time}){
// const hours = time.getHours();
// console.log(hours);
// const isNight = hours >= 0 && hours <= 6;
// console.log(isNight);

// return(
//     <h1 className={isNight ? 'night' : 'day'}>
//         {time.toLocaleTimeString()}
//     </h1>
// );
// }

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

// function Avatar ({person, size = 70}){
//     // person and size available 
//     return(
//         <img
//             className="avatar"
//             src={getImageUrl(person.imageId)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//         );
// }

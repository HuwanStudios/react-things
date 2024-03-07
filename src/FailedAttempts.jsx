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
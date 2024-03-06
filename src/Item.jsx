// function Item({ name, isPacked, importance }) {
//     return (
//       <li className="item">
//         {/* {isPacked ? name + '✔' : name + '❌'} */}
//         {name} {isPacked ? '✔' : '❌'}
//         {name}{importance > 0 && <i>(Importance:{importance})</i>}

//       </li>
//     );
//   }

//   export default Item;
  //Challenge #2

function Item({ name, isPacked, importance}) {
    return (
      <li className="item">
        {name}{importance > 0 && <i>(Importance:{importance})</i>}{isPacked ? '✔' : '❌'}
      </li>
    );
  }

  export default Item;
  //Challenge #1 & 2
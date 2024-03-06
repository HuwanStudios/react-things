// function Item(name, importance){
//     return(
//         <li className="item">
//                   {name} {importance > 0 && ''}
//                    
//         </li>
//     );
// }

// export default PackingList;
// //CHALLENGE #2

import Item from  "./Item";
  
  function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
            importance={9}
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
            importance={0}

          />
          <Item 
            isPacked={false} 
            name="Photo of Tam"
            importance={6}
 
          />
        </ul>
      </section>
    );
  }
  

export default PackingList;
//CHALLENGE #1
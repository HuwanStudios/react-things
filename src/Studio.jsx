import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Studio() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
        console.log(index);
        if (index === sculptureList.length - 1) {
            setIndex(0);
        }
        // if (index === index.length - 1){
        // }
    }
    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ( {index + 1} of {sculptureList.length} )
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
//11-state-a-components-memory- Challenge 1 of 4: Complete the gallery

// I wa
// When I am setting my index how do I check I am not at the end of the array
// When I am at an undefined array how
// When my ind
// I want to keep track of my array
// I want to stop updating the state
// Add a console.log to NEXT - inside HandleNext Click (Before 1 gets added)
// I do not want to add 1 when I am at the maximum of my array
// Find the added index number

import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
        alert(!walk ? 'Walk, Stop is next' : 'Stop, Walk is next');
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{
                color: walk ? 'darkgreen' : 'darkred'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}
//13-state-as-a-snapshot - Challenge 1 of 1: Implement a traffic light
// export function getFinalState(baseState, queue) {
//     // const [baseState, setBaseState] = useState(0);
//     // const
//     let finalState = baseState;
//
//     // TODO: do something with the queue...
//
//     return finalState(
//       <>
//         <button onClick={() => {
//           setNumber(1);
//           setNumber(1);
//           setNumber(1);
//         }}>+3</button>
//       </>
//       <>
//       <button onClick={() => {
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//       }}>+3</button>
//     </>
//       <>
//       <button onClick={() => {
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//       }}>+3</button>
//     </>
//       <>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//       }}>Increase the number</button>
//     </>
//     <>
//       <button onClick={() => {
//       setNumber(number + 5);
//       setNumber(n => n + 1);
//       setNumber(42);
//     }}>
//     </>
//     );
// }

export function getFinalState(baseState, queues) {
    return queues.map(queue => {
        let finalState = baseState;

        // Apply each action in the queue to the baseState
        queue.map(action => {
            finalState = typeof action === 'function' ? action(finalState) : finalState + action;
        });

        // Expected result for the current test case
        const expectedResult = finalState;

        return { finalState, expectedResult };
    });
}

// Test cases
const baseState = 0;
const queues = [
    [1, 1, 1],
    [n => n+1, n => n+1, n => n+1],
    [5, n => n+1],
    [5, n => n+1, 42]
];

// Run the tests
const testResults = getFinalState(baseState, queues);
console.log(testResults);

//15-Queuing a series of state updates - Challenge 2 of 2: Implement the state queue yourself
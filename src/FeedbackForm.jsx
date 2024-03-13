// import { useState } from 'react';
//
// export default function FeedbackForm() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('');
//     if (isSent) {
//         return <h1>Thank you!</h1>;
//     } else {
//         // eslint-disable-next-line
//         return (
//             <form onSubmit={e => {
//                 e.preventDefault();
//                 alert(`Sending: "${message}"`);
//                 setIsSent(true);
//             }}>
//         <textarea
//             placeholder="Message"
//             value={message}
//             onChange={e => setMessage(e.target.value)}
//         />
//                 <br />
//                 <button type="submit">Send</button>
//             </form>
//         );
//     }
// }
// // 11-state-a-components-memory - Challenge 3 of 4: Fix a crash
//

import { useState } from 'react';

export default function FeedbackForm() {
    const [name, setName] = useState('');
    //onSubmit grab name
    function handleFirstNameChange(e) {
        setName(e.target.value);
    }
    function handleClick() {
        const newName = (prompt('What is your name?'));
        setName(newName);
        alert(`Hello, ${newName}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}
//11-state-a-components-memory - - Challenge 4 of 4: Remove unnecessary state
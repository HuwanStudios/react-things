import { useState } from 'react';

export default function Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        // Correcting the score update by using the setter function
        setPlayer({
            ...player,
            score: player.score + 1,
        });
    }

    function handleFirstNameChange(e) {
        // Updating the first name without losing other properties
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        // Updating the last name without losing other properties
        setPlayer({
            ...player,
            lastName: e.target.value,
        });
    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b>
                {' '}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                First name:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}
// 11-updating-objects-in-state - Challenge 1 of 3: Fix incorrect state updates


import { useState } from 'react';

export default function Form() {
    const [applicants, setApplicants] = useState([{ firstName: 'fName', lastName: 'lName' }]);
    const [firstName, setFirstName] = useState('fName');
    const [lastName, setLastName] = useState('lName');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    const handleAddApplicant = () => {
        const allNewApplicants = [...applicants, { firstName, lastName }];
        console.log('Adding Applicant:', firstName, lastName);
        console.log(allNewApplicants);
        setApplicants(allNewApplicants);
    };

    return (
        <>
            <div>
                {applicants.map((applicant, index) => (
                    <div key={index}>
                        <h4>{applicant.firstName}, {applicant.lastName}</h4>
                    </div>
                ))}
                <form onSubmit={(e) => e.preventDefault()}>
                    <input placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
                    <input placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
                    <h1>Hi, {firstName} {lastName}</h1>
                    <button onClick={handleAddApplicant}> Add Applicant</button>
                    <button onClick={handleReset}>Reset</button>
                </form>
            </div>
        </>
    );
}
////11-state-a-components-memory - Challenge 2 of 4: Fix stuck form inputs
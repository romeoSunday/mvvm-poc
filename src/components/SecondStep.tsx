import React from 'react';

const SecondStep = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                console.log('second step submitted');
            }}
            style={{display: "flex", flexDirection: "column", margin: "20px", justifyContent: "space-between", height: "100px"}}
        >
            <label htmlFor="password">Your password</label>
            <input id="password" name="password" type="text" />
            <button type="submit">Next</button>
        </form>
    )
};

export default SecondStep;
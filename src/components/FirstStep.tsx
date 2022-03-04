import React from 'react';

const FirstStep = () => {

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                console.log('first step submitted');
            }}
            style={{display: "flex", flexDirection: "column", margin: "20px", justifyContent: "space-between", height: "100px"}}
        >
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="text" />
            <button type="submit">Next</button>
        </form>
    )
};

export default FirstStep;
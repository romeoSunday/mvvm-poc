import React from 'react';

const ThirdStep = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                console.log('third step submitted');
            }}
            style={{display: "flex", flexDirection: "column", margin: "20px", justifyContent: "space-between", height: "100px"}}
        >
            <label htmlFor="dessert">Your favorite dessert</label>
            <input id="dessert" name="dessert" type="text" />
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <button type="submit">Skip</button>
                <button type="submit">Next</button>
            </div>
        </form>
    )
};

export default ThirdStep;
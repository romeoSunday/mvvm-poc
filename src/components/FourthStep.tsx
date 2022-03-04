import React from 'react';

const FourthStep = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                console.log('fourth step submitted');
            }}
            style={{display: "flex", flexDirection: "column", margin: "20px", justifyContent: "space-between", height: "100px"}}
        >
            <label htmlFor="bounties">Do you like Bounties ?</label>
            <input id="bounties" name="bounties" type="checkbox" />
            <button type="submit">Finish</button>
        </form>
    )
};

export default FourthStep;
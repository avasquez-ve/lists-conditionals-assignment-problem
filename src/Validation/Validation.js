import React from 'react';

const Validation = (props) => {
    const {strLength} = props;
    let validationOutput = strLength < 7 ? "Your PJ name is too short" : "PJ name long enough";

    return(
        <p>{validationOutput}</p>
    )
}

export default Validation;
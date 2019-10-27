import React from 'react';

const Validation = (props) => {
    const {strLength} = props;
    let validationMessage = strLength < 7 ? "Your PJ name is too short" : "PJ name long enough";

    return(
        <p>{validationMessage}</p>
    )
}

export default Validation;
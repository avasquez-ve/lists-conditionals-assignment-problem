import React from 'react';
import './Char.css';

const Char = (props) => {
    // variables
     const { character, clicked } = props;

    return(
        <div className="listContainer" onClick={clicked} >
            {character}
        </div>
    )
}

export default Char;
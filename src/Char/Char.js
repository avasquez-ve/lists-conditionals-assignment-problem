import React from 'react';
import './Char.css';

const Char = (props) => {
    // variables
    const { strValue, strLength } = props;
    let charsArr = strValue.split("");
    let htmlList = null;

    // methods
    const deleteCharHandlet = (index) => {
        //console.log(`You clicked in the ${index} element`);
        let liElement = document.querySelectorAll("li[key]");
        console.log(liElement);
    }

    //dinamyc html
    if (strLength > 0) {
        htmlList = (
            <ul>
                {
                    charsArr.map((char, index) => {
                        return <li key={index} onClick={() => deleteCharHandlet(index)} >{char}</li>
                    })
                }
            </ul>
        )
    }

    return(
        <div className="listContainer">
            {htmlList}
        </div>
    )
}

export default Char;
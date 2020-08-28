import React from "react";


const CharCard = props => {


    console.log(props.character);

    return (
        <div key = {props.character}>
            
            <h1>{props.character}</h1>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            
        </div>
    )


}

export default CharCard;
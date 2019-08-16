import React from "react";
import styled from "styled-components";




const NewCard=styled.div`

`


function CharCard(props) {

    if (props.charInfo==undefined) return <h2>Loading...</h2>;

    console.log("CArd",props);
    return(
        <NewCard>
            <h2>Name: {props.charInfo[0].name}</h2>
        </NewCard>
    )
}

export default CharCard;
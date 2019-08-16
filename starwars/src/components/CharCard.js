import React from "react";
import styled from "styled-components";




const NewCard=styled.div`
    border:2px dashed yellow;
    background-color:rgba(0,0,0,.3);
    width:500px;
    margin:0px auto;

    h2{
        font-size:1.5rem;
        text-align:center;
        margin-bottom:0px;
        color:yellow;
    }
    h3{
        font-size:1rem;
        padding:0px;
        margin:10px 0px;
        color:red;
    }
`
const ContentDiv=styled.div`
    display:flex;
    align-content:top;
    div{
        width:50%;
        text-align:left;
        padding:0px 20px;
    }

`

function CharCard(props) {

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    if (props.charInfo===undefined) return <h2>Loading...</h2>;

    console.log("CArd",props);
    return(
        <div>
        {props.charInfo.map(item => {
            return(
            <NewCard>
                <h2>{item.name}</h2>
                <ContentDiv>
                    <div>
                        <h3>HEIGHT: {item.height}</h3>
                        <h3>MASS: {item.mass}</h3>
                        <h3>HAIR COLOR: {capitalize(item.hair_color)}</h3>
                        <h3>SKIN COLOR: {capitalize(item.skin_color)}</h3>
                    </div>
                    <div>
                        <h3>EYE COLOR: {capitalize(item.eye_color)}</h3>
                        <h3>BIRTH YEAR: {item.birth_year}</h3>
                        <h3>GENDER: {capitalize(item.gender)}</h3>
                    </div>
                </ContentDiv> 
            </NewCard>
            );
        })}
        </div>
    );
}

export default CharCard;


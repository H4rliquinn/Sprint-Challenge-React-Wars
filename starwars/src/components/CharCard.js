import React from "react";
import styled from "styled-components";

const NewCard=styled.div`
    border:2px dashed yellow;
    background-color:rgba(0,0,0,.3);
    width:400px;
    margin:10px auto;
    box-shadow:-2px -2px 6px #FFF;
    border-radius:15px;
    &:hover{
        box-shadow:3px 3px 3px 4px rgba(255,0,0,.5),-3px -3px 3px 4px rgba(255,0,0,.5);
        transform: scaleY(1.2);
        z-index: 2;
        background-color:rgba(0,0,0,1);
        h2{
            color:white;
        }
        h3{
            color:yellow;
        }
    }
    h2{
        font-size:1.5rem;
        text-align:center;
        margin-bottom:0px;
        color:yellow;
        text-shadow:3px 3px 3px #000;
    }
    h3{
        font-size:1rem;
        padding:0px;
        margin:10px 0px;
        color:red;
        text-shadow:3px 3px 3px #000;
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

    return(
        <div className="cardList">
            {props.charInfo.map(item => {
            return(
                <NewCard key={item.name}>
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


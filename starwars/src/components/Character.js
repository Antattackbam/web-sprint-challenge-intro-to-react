// Write your Character component here
import React, {useState, useEffect} from "react"; 
import axios from "axios";
import CharCard from './CharCard';
import styled from "styled-components";


export default function Characters() {
    const [characters, setCharacters] = useState([]);

    const Container = styled.div`
        transition: transform 0.2s ease-in;
        border-radius: 30px;
        background-size: contain;
        background-image: url('https://media.gamestop.com/i/gamestop/Star_Wars_10.4_HeroM/star-wars.jpg?$POI$&w=768&aspect=.66:1');
        color: #f5b942;
        width: 40%;
        margin: 0 auto;
        align-content: center;
        max-height: 350px;
        display: flex;
        opacity: .8;
        justify-content: space-around;
        margin-bottom: 25px;
        box-shadow: 0px 6px 10px -2px black;
        &:hover {
            transform: translateY(-5px) scale(1.1);
            background-image: url('https://img.freepik.com/free-vector/space-with-stars-universe-space-infinity-background_78474-99.jpg?size=626&ext=jpg');
        }
    
    `;


    
    useEffect(() => {
        axios
        .get('https://swapi.dev/api/people/')
        .then(res =>{
             console.log(res.data.results);
             setCharacters(res.data.results);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        })
    }, [])
    
    
return(
        <div>{characters.map(each => {
            
            return(
            
               <Container>
                    <CharCard character= {each.name} gender= {each.gender} height= {each.height} weight = {each.mass} />  
                </Container>
           )
        })}
         
        </div>

);



};   
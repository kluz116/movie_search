import React, {useState,useEffect} from 'react'
import { Card, CardImg,CardBody,CardTitle,Container,CardText, Label} from 'reactstrap';
import axios from 'axios'
import { useParams} from "react-router";

const MovieDetails = ()=>{
    let { id } = useParams();
    const [details, setMovieDetails]= useState({})

    useEffect(()=>{
        axios.get('http://www.omdbapi.com/?i='+id+'&apikey=95632709')
        .then(response =>{
            setMovieDetails(response.data)   
            console.log(response.data)  
        })
        .catch(error =>{
            console.log(error)
        })
    })
    const {Title,Year,Rated,Runtime,Released,Director,Writer,Actors,Plot,Poster,Type,Awards,Country, Language} = details
    
    return (
            <div>
                <Container>
                <Card body outline color="success" >
                                <CardImg top width="80%" src={Poster} alt="Card image cap" />
                                <CardBody>
                                <CardTitle >{Title}</CardTitle>
                                <CardText>
                                    <div>
                                    {Plot}
                                    </div>
                                    <div>
                                      <label>Year : </label>  {Year}
                                    </div>
                                    <div>
                                      <label style={label_style}>Released : </label>  {Released}
                                    </div>
                                </CardText>   
                                </CardBody>
                            </Card>
                </Container>
     
            </div>
        )
}
export default MovieDetails



const label_style = {
    color: "#000"
  };
  
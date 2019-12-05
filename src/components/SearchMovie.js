import React , {useState} from 'react'
import { Card, CardImg,CardBody,CardTitle,Container,Row,Col,CardColumns ,Button, Form, FormGroup,  Input} from 'reactstrap';
import axios from 'axios'
import MovieDetails from './MovieDetails'

const SearchMovie = ()=>{
    const [movie, setMovie] = useState('')
    const [search, setSerchMovies] = useState([])
    const [details, setMovieDetails]= useState({})
    const [modal, setModal] = useState(false);


    const handleSubmit = e =>{
        e.preventDefault()
        axios.get('http://www.omdbapi.com/?s='+movie+'&apikey=Replace with the api key')
             .then(response => {
                setSerchMovies(response.data.Search)
             })
             .catch(error => {console.log(error)})

    }
    const onDetails = id =>{
        axios.get('http://www.omdbapi.com/?i='+id+'&apikey=Replace with the api key')
        .then(response =>{
            setModal(!modal);
            setMovieDetails(response.data)     
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return(
        <Container>
        <Row>
             <Col>
        
                <Form inline  className="App-Movie"  onSubmit={handleSubmit}>
                    <FormGroup className="mb-4 mr-sm-4 mb-sm-0" >
                    <Input type="text" value={movie} onChange={e=> setMovie(e.target.value)} placeholder="Search for a movie!!" />
                    </FormGroup>
                    <Button type='submit' outline color="success" size="sm" >Search</Button>
                </Form>
           </Col>
        </Row>
        <Row>
             <Col>
            <CardColumns >
                {search.map((item,index) =>
                            <Card body outline color="success" >
                                <CardImg top width="100%" src={item.Poster} alt="Card image cap" />
                                <CardBody>
                                <CardTitle key={index}>{item.Title}</CardTitle>
                                <Button outline color="success" size="sm" onClick={onDetails.bind(this,item.imdbID)}  >View Details</Button>
                                </CardBody>
                            </Card>
     
                )}
             </CardColumns>
             </Col>
        </Row>
        <MovieDetails modal = {modal} details ={details} onDetails = {onDetails}/>    
                           
        </Container>
    )
}

export default SearchMovie
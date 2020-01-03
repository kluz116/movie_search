import React , {useState} from 'react'
import { Card, CardImg,CardBody,CardTitle,Container,Row,Col,CardColumns ,Button, Form, FormGroup,  Input} from 'reactstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'; 


const SearchMovie = ()=>{
    const [movie, setMovie] = useState('')
    const [search, setSerchMovies] = useState([])
  
    const handleSubmit = e =>{
        e.preventDefault()
        axios.get('http://www.omdbapi.com/?s='+movie+'&apikey=95632709')
             .then(response => {
                setSerchMovies(response.data.Search)
                console.log(`Try this out${response.data}`)
             })
             .catch(error => {console.log(error)})
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
                                <Link to={"/MovieDetails/"+item.imdbID} className="btn btn-success outline  btn-sm " >View Details</Link>
                                </CardBody>
                            </Card>
     
                )}
             </CardColumns>
             </Col>
        </Row>
        
        </Container>
    )
}

export default SearchMovie
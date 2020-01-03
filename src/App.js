import React,{useState} from 'react';
import Users from './components/Movie'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import './App.css';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Router>  
    
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/Movie">Movie Search Portal</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
             
              <NavItem>
              <Link to={'/Movie'} className="nav-link">Movies</Link>  
              </NavItem> 
            </Nav>
            
          </Collapse>
        </Navbar>
      <div className="container">  
        <Switch>  
          <Route exact path='/Movie' component={Users} />  
          <Route path='/MovieDetails/:id' component={MovieDetails} /> 
        </Switch>  
      </div>  
    </Router> 
  
    </div>
  );
}

export default App;

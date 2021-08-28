import {HashRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";

import Button from "react-bootstrap/Button";
import {FormControl, Form,Navbar,Nav} from "react-bootstrap";

import './css/nav.css';
import Contact from '../views/Contact';
import What from '../views/What';



import Home from "../views/Home";
import { useState } from "react";

function NavigationComponent() {

  const [searchValue,setSearchValue] = useState('');
  const [value,getValue]=useState('apple');


  function updateSearchValue(e){
    setSearchValue(e.target.value);
  }

  function getVal(e){
   e.preventDefault();
   getValue(searchValue);
   console.log(searchValue);
   setSearchValue('');
  
  }

    return(
        <Router hashtype="slash" >
  <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" style={{zIndex:10001}}>
  <Navbar.Brand href="\" className="mr-5 ml-3 sourcefont"> 
    cookEat
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">


  <Form  onSubmit={getVal} className="d-flex w-50 ml-5">
      <FormControl
        type="search"
        placeholder="Search"
        className="firafont"
        aria-label="Search"
        value={searchValue}
        onChange={updateSearchValue} 
      />
      <Button className="ml-1 popperfont"  type="submit" variant="success">Search</Button>
    </Form>
    
    <Nav
      className="ml-auto my-1 my-lg-0 popperfont"
    >
      <Nav.Link >
         <Link to="/">Home</Link> 
         </Nav.Link>
      <Nav.Link> 
        <Link to="/whattocook">what to cook?</Link>
        </Nav.Link>
      <Nav.Link> 
        <Link to="contact">Contact</Link> 
        </Nav.Link>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>


        
          
         
   
          <Switch>
             <Route path="/whattocook">
               <What />
             </Route>
             <Route path="/contact">
               <Contact />
             </Route>
             <Route path="/">
                <Home searchValue={value}/>
             </Route>
           </Switch>

        </Router>

     
    );
}


export default NavigationComponent;
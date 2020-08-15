import React from 'react';
import Navbar from './componets/navbar/index'
import Jumbotron from './componets/jumbotron/index'
import Footer from './componets/footer/index'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import {Container} from './componets/grid/index'


function App() {
  return (
    <Router>
      <Container> 
        <Navbar />
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>
            <Route exact path='/' component={Home}/>
            <Route exact path='/saved' component={Saved}/>
          <Footer />
      </Container>
    </Router>
  );
}

export default App;

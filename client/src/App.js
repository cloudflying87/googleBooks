import React from 'react';
import Navbar from './componets/navbar/index'
import Jumbotron from './componets/jumbotron/index'
import Footer from './componets/footer/index'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <h3>Search for and Save Books of Interest</h3>
      </Jumbotron>
        <Route exact path='/' component={Home}/>
        <Route exact path='/saved' component={Saved}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

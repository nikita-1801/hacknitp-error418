
import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 
import ReactDOM from "react-dom";
import About from './components/about';
import Contact from './components/contact';
import Tweet from './components/tweet';
import Blog from './components/blog';
import Home from "./homepage.js"

function App() {
  return (
    <Router>

  <div>
    <nav>
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6-m-OchJroYRySxatXkmz3zh8w4jKpH0wA&usqp=CAU" alt="Logo Image" />
        </div>
        <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className="nav-links">
        <li> <Link to="/home">Home</Link> </li>
<li> <Link to="/blog">Blog</Link> </li>
<li> <Link to="/about">About</Link> </li>
<li> <Link to="/contact">Contact</Link> </li>
<li> <Link to="/tweet">Tweet</Link> </li>
        </ul>
    </nav>
    </div>
    <div className="App-intro">
        <Route path="/home" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/about" component={About}/>
        <Route path="/tweet" component={Tweet}/>
        <Route path="/contact" component={Contact}/>
      </div>
  </Router>
  
  );
}

export default App;

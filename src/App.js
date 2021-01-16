
import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 
import './navbar.css';
import ReactDOM from "react-dom";
import About from './components/about';
import Contact from './components/contact';
import Tweet from './components/tweet';
import Blog from './components/blog';
import Home from "./homepage.js"

function App() {
  return (
    <div>
    <Router>
  <div>

  <nav class="wrapper">
        <ul>
          <li ><Link to="/home">Home</Link> </li>
          <li ><Link to="/blog">Blog</Link></li>
          <li ><Link to="/about">About</Link></li>
          <li ><Link to="/contact">Contact</Link></li>
          <li ><Link to="/tweet">Tweet</Link></li>
        </ul>
  </nav>

    </div>
    <div>
        <Route path="/home" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/about" component={About}/>
        <Route path="/tweet" component={Tweet}/>
        <Route path="/contact" component={Contact}/>
      </div>
  </Router>
  </div>
  );
}

export default App;

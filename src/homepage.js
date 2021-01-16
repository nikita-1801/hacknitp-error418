import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import Navbar from './components/navbar.js';
import Example from './example.js';
const Search= ({ children }) => (
    <Container style={{ margin: 20 }}>
        <Header as="h3"> </Header>
        {children}
    </Container>
);
function Home() {
  return (
    <div className="App">

    <br/>
    <br/>  <br/>
      <br/>  <br/>
        <br/>
    <Search>
      <Example />
      </Search>
    </div>
  );
}

export default Home;

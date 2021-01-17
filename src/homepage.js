import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import Example from './example.js';
import Footer from "./components/footer"
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
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default Home;

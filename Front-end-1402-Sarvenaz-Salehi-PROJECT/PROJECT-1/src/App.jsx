
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import tgLogo from './assets/images/telegram.webp'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import Genres from './components/Genres';


function App() {


  return (
    <>

      <Router>
      <Header></Header>

      <Switch>
        <Route exact path="/" component={withRouter(Home)} />
        <Route  path="/movie/:id" component={withRouter(Movie)} />
        <Route  path="/genres" component={withRouter(Genres)} />

      </Switch>

    <Container className="telegram-link">
        <a
          href="https://github.com/UT-ACM-Student-Chapter/Front-end-1402-Sarvenaz-Salehi"
          rel="noopener"
          target="_blank"
        >
          <img src={tgLogo} alt="telegram" />
        </a>
      </Container>
      
      <Footer></Footer>
      </Router>

    </>

  )
}

export default App

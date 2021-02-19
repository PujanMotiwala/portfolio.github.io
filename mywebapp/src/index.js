import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navs from "./components/routes/Navs";
import About from './components/routes/About';
import Blog from './components/routes/Blog';
import Topics from './components/routes/Topics';
import Products from './components/routes/Products';
import Links from './components/routes/Links';
import Footer from "./components/Footer";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navs/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/topics" component={Topics} />
                <Route path="/products" component={Products} />
                <Route path="/links" component={Links} />
            </Switch>
            <Footer/>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

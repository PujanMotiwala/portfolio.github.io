import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
// import linkedIn from '.../imgs/linkedIn.png';
// import tableau from '.../imgs/tableau.jpg';
// import github from '.../imgs/github.png';
// import twitter from '.../imgs/twitter.png';
// import kaggle from '.../imgs/kaggle.png';
import synder from './blog_img/synder.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//Header component is now reusable component
const Cards = () => {
    return(
        <div className="Cards">
            <div>
                <Col >
                    <Card className="bg-dark text-white">
                        <Card.Img variant="top" src={synder} alt="synder"  />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Cards;
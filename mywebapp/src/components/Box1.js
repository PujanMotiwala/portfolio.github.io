import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import linkedIn from '../imgs/linkedIn.png';
import tableau from '../imgs/tableau.jpg';
import github from '../imgs/github.png';
import twitter from '../imgs/twitter.png';
import kaggle from '../imgs/kaggle.png';
import instagram from '../imgs/instagram.png';


//Header component is now reusable component
const Box1 = () => {
    return(
        <div className="Box1">
            <div>
            </div>
            <div>
                <CardColumns>
                    <Card>
                        <a href="https://github.com/PujanMotiwala">
                            <Card.Img variant="top" src={github} alt="github"  roundedCircle />
                        </a>
                        <Card.Body>
                            <Card.Title>My Github Profile</Card.Title>
                            <Card.Text>
                                View my code here!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <a href="https://public.tableau.com/profile/pujanmotiwala">
                            <Card.Img variant="top" src={tableau}  alt="tableau" roundedCircle />
                        </a>
                        <Card.Body>
                            <Card.Title>My Tableau Profile</Card.Title>
                            <Card.Text>
                                View my viz here!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <a href="https://www.linkedin.com/in/pujanmotiwala/">
                            <Card.Img variant="top" src={linkedIn} alt="linkedin" roundedCircle />
                        </a>
                        <Card.Body>
                            <Card.Title>My LinkedIn Profile</Card.Title>
                            <Card.Text>
                                View my career here!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <a href="https://www.kaggle.com/pujanmotiwala">
                            <Card.Img variant="top" src={kaggle} alt="kaggle" roundedCircle />
                        </a>
                        <Card.Body>
                            <Card.Title>My Kaggle Profile</Card.Title>
                            <Card.Text>
                                View my work here!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <a href="https://twitter.com/PujanMotiwala">
                            <Card.Img variant="top" src={twitter} alt="twitter" roundedCircle />
                        </a>
                        <Card.Body>
                            <Card.Title>My Twitter Profile</Card.Title>
                            <Card.Text>
                                View my views here!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <a href="https://www.instagram.com/rocksta91/">
                            <Card.Img variant="top" src={instagram} alt="instagram" roundedCircle />
                        </a>
                        <Card.Body>
                            <Card.Title>My Instagram Profile</Card.Title>
                            <Card.Text>
                                View my photos here!
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardColumns>
            </div>
        </div>
    );
};

export default Box1;
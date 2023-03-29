// import logo from './logo.svg';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Card from 'react-bootstrap/Card';
import backgroundImage from './imgs/pic.png';
import Footer from "./components/Footer";
import IntroBox1 from "./components/intro_box1";
import ReactTooltip from 'react-tooltip';
import Image from 'react-bootstrap/Image';
import github from "./imgs/github.png";
import linkedIn from './imgs/linkedIn.png';
import tableau from './imgs/tableau.jpg';
import twitter from './imgs/twitter.png';
import kaggle from './imgs/kaggle.png';
import instagram from './imgs/instagram.png';
// import { kaggle, instagram } from "./imgs";


class App extends React.Component {
  state = {
    pageHeader: "Username" /*,
			data: [12, 5, 6, 6, 9, 10],
    		width: 700,
    		height: 500,
    		id: root*/,
  };

  componentDidMount() {
    //AJAX...(fetching)
    //fire timers and/or listeners (..to other events)
  }

  componentWillUnmount() {
    //clean timers and/or listeners (..above ones)
  }
  render() {
    return (
        <div className="App">
  <header className="App-header">
    <IntroBox1 /> 
    <div className="position-relative">  
        <div className="port_links">
            <Row style={{ textAlign: "right"}}>
            <Col>
                <a href="https://www.linkedin.com/in/pujanmotiwala/">
                <Image src={linkedIn} alt="linkedIn" data-tip="view my career here!" thumbnail />
                <ReactTooltip />
                </a>
            </Col>
            </Row>
            <Row style={{ textAlign: "right"}}>
            <Col>
                <a href="https://github.com/PujanMotiwala">
                <Image src={github} alt="github" data-tip="view my code here!" thumbnail />
                <ReactTooltip />
                </a>
            </Col>
            </Row>
            <Row style={{ textAlign: "right"}}>
            <Col>
                <a href="https://www.kaggle.com/pujanmotiwala">
                <Image src={kaggle} alt="kaggle" data-tip="view my work here!" thumbnail />
                <ReactTooltip />
                </a>
            </Col>
            </Row>
            <Row style={{ textAlign: "right"}}>
            <Col>
                <a href="https://public.tableau.com/profile/pujanmotiwala">
                <Image src={tableau} alt="tableau" data-tip="view my vizzes here!" thumbnail />
                <ReactTooltip />
                </a>
            </Col>
            </Row>
            <Row style={{ textAlign: "right"}}>
            <Col>
                <a href="https://twitter.com/PujanMotiwala">
                <Image src={twitter} alt="twitter" data-tip="view my views here!" thumbnail />
                <ReactTooltip />
                </a>
            </Col>
            </Row>
            <Row style={{ textAlign: "right"}}>
            <Col>
                <a href="https://www.instagram.com/rocksta91/">
                <Image src={instagram} alt="instagram" data-tip="view my photos here!" thumbnail />
                <ReactTooltip />
                </a>
            </Col>
            </Row>
        </div> 
    </div>

    <div className="mt-auto">  
      <Footer />
    </div>
  </header>
</div>

    );
  }
}

export default App;

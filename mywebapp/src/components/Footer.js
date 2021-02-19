import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactTooltip from 'react-tooltip';
import Image from 'react-bootstrap/Image';
import github from "../imgs/github.png";
import linkedIn from '../imgs/linkedIn.png';
import tableau from '../imgs/tableau.jpg';
import twitter from '../imgs/twitter.png';
import kaggle from '../imgs/kaggle.png';
import instagram from '../imgs/instagram.png';

const footer = () => {
    return (
        <div className="foot">

            <Row fluid>
                <Col>
                    <h5>© 2021 Pujan Motiwala</h5>
                </Col>

                <Col style={{ textAlign: "right"}}>
                    <a href="https://www.linkedin.com/in/pujanmotiwala/">
                        <Image src={linkedIn} alt="linkedIn" data-tip="view my career here!" thumbnail />
                        <ReactTooltip />
                    </a>
                    <a href="https://github.com/PujanMotiwala">
                        <Image src={github} alt="github" data-tip="view my code here!" thumbnail />
                        <ReactTooltip />
                    </a>
                    <a href="https://www.kaggle.com/pujanmotiwala">
                        <Image src={kaggle} alt="kaggle" data-tip="view my work here!" thumbnail />
                        <ReactTooltip />
                    </a>
                    <a href="https://public.tableau.com/profile/pujanmotiwala">
                        <Image src={tableau} alt="tableau" data-tip="view my vizzes here!" thumbnail />
                        <ReactTooltip />
                    </a>
                    <a href="https://twitter.com/PujanMotiwala">
                        <Image src={twitter} alt="twitter" data-tip="view my views here!" thumbnail />
                        <ReactTooltip />
                    </a>
                    <a href="https://www.instagram.com/rocksta91/">
                        <Image src={instagram} alt="instagram" data-tip="view my photos here!" thumbnail />
                        <ReactTooltip />
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default footer
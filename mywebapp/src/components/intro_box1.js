import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';

const intro_box1 = () => {
    return(
        <Container className="intro" style={{position:"right", marginLeft:"50rem", marginRight:"1rem", marginTop:"1rem"}}>
            <Col>
            <h4> Welcome to my little corner of the web! 
                <br />
                Join me on a thrilling journey through the world of data science where we explore, analyze, 
                and uncover powerful insights. 
                Let's dive in! </h4>
            </Col>
        </Container>
    );
};

export default intro_box1;
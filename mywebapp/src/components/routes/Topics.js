import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box1 from '../Box1';

const topics = () => {
    return (
        <div>
            <h1>This is Topics Page</h1>
            <Col>
                    <Row sm={10}>
                       <Col sm={2}>
                       </Col>
                       <Col sm={8}>
                           <Box1/>
                       </Col>
                       <Col sm={2}>
                       </Col>
                    </Row>
            </Col>
        </div>
    );
};

export default topics
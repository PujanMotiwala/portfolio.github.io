// import logo from './logo.svg';
import React from 'react';
import Box1 from './components/Box1';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

class App extends React.Component{
    state={pageHeader : "Username"/*,
			data: [12, 5, 6, 6, 9, 10],
    		width: 700,
    		height: 500,
    		id: root*/};

    componentDidMount(){
        //AJAX...(fetching)
        //fire timers and/or listeners (..to other events)
    }

    componentWillUnmount(){
        //clean timers and/or listeners (..above ones)
    }
    render(){
        return (
        <div className="App">
            <header className="App-header">
                <Col>
                        <Row>
                            <h2>Data Scientist at USAA</h2>
                        </Row>
                        <Row>
                            <h1>👨‍🎓  Welcome :) This is my </h1>
                        </Row>
                    <Row>
                        <h1>internet home!</h1>
                    </Row>
                    <br/>
                    <Row>
                        <h1>internet home!</h1>
                    </Row>
                    {/*<Row sm={10}>*/}
                    {/*    <Col sm={2}>*/}
                    {/*    </Col>*/}
                    {/*    <Col sm={8}>*/}
                    {/*        <Box1/>*/}
                    {/*    </Col>*/}
                    {/*    <Col sm={2}>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Col>
            </header>
        </div>
  );
}
}

export default App;

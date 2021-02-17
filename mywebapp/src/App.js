// import logo from './logo.svg';
import React from 'react';
import Navs from './components/Navs';
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
                    <Col >
                        <Row>
                            <Navs/>
                        </Row>
                    </Col>
                    <br/>
                        <Col sm={{ span: 4, offset: 1 }}>
                            <h2>Data Scientist | Big Data Engineer | Visualizer</h2>
                        </Col>
                        <Col md={{ span: 3, offset: 0 }}>



                            <h1>Welcome :) This is my internet home!</h1>


                        </Col>



                    <br/>
                    <br/>

                    <Row sm={10}>
                        <Col sm={2}>

                        </Col>
                    <Col sm={7}>
                        <Box1/>
                    </Col>
                    </Row>


                </Col>




            </header>
        </div>
  );
}
}

export default App;

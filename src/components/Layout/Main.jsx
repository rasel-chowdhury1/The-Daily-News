import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={3}>
                         <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>main contain coming.....</h2>
                    </Col>
                    <Col lg={3}>
                         <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;
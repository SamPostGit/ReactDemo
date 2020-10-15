import React, { Component } from 'react';
import { Row, Navbar, Container, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark"  sticky='bottom' expand="lg">
                <Container>
                    <Row>
                        <Col>
                            <h1 style={styles.text}>Advice</h1>
                            <p style={styles.text}> 
                                Some really important information on why you 
                                should ask for help if you needing it with a great
                                explaination and other cool stuff
                            </p>
                        </Col>
                        <Col>
                            <h1 style={styles.text}>Contact</h1>
                            <p style={styles.text}>______________________________</p>
                            <p style={styles.text}>Phone Number: <br/>###-###-####</p>
                            <p style={styles.text}>Email: <br/>Sam.post@dal.ca</p>
                            <p style={styles.text}>Address: <br/>Im not telling you</p>
                        </Col>
                        <Col>
                            <h1 style={styles.text}>Other</h1>
                            <p style={styles.text}>__________________________</p>
                            <h3 style={styles.text}>This should be a link</h3>
                            <h3 style={styles.text}>Same</h3>
                            <h3 style={styles.text}>Same</h3>
                            <h3 style={styles.text}>Same</h3>
                        </Col>
                    </Row>
                </Container>
             </Navbar>
        );
    }
}

const styles = {
    text: {
        color: 'white',
    }
}

export default Footer;
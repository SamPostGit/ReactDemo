import React, { Component } from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shoes1 from '../media/cat1.jpg';
import shoes2 from '../media/cat2.jpg';
import shoes3 from '../media/cat3.jpg';
import shoes4 from '../media/cat4.jpg';
import shoes5 from '../media/cat5.jpg';
import shoes6 from '../media/cat6.jpg';
import shoes7 from '../media/cat7.jpg';
import shoes8 from '../media/cat8.jpg';
import shoes9 from '../media/cat9.jpg';

class Cats extends Component {
    render() {
        return (
            <div style={{marginTop: '4rem'}}>
                <Row style={{marginTop: '5rem'}}>
                    <Col>
                    <Container>
                        <h2>Fake breadcrumbs</h2>
                        <h5>...</h5>
                        <h5 style={{marginLeft: '2rem'}}>something</h5>
                        <h5 style={{marginLeft: '4rem'}}>somethingelse</h5>
                    </Container>
                    </Col>
                    <Col xs={10}>
                        <Col>
                            <Row>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link className='image-wrapper' to='./cats/1' style={styles.link}>
                                            <Image src={shoes1} style={{width:'20%'}}></Image>
                                            <p class='title_text'>cat</p>
                                            <p class='color_text'>black</p>
                                        </Link>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/2' style={styles.link}>
                                            <Image src={shoes2} style={{width:'20%'}}></Image>
                                            <p class='title_text'>cat</p>
                                            <p class='color_text'>black</p>
                                        </Link>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/3' style={styles.link}>
                                            <Image src={shoes3} style={{width:'20%'}}></Image>
                                            <p class='title_text'>cats</p>
                                            <p class='color_text'>white</p>
                                        </Link>
                                    </Container>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/4' style={styles.link}>
                                            <Image src={shoes4} style={{width:'30%'}}></Image>
                                            <p class='title_text'>cat</p>
                                            <p class='color_text'>black</p>
                                        </Link>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/5' style={styles.link}>
                                            <Image src={shoes5} style={{width:'30%'}}></Image>
                                            <p class='title_text'>cat</p>
                                            <p class='color_text'>black</p>
                                        </Link>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/6' style={styles.link}>
                                            <Image src={shoes6} style={{width:'30%'}}></Image>
                                            <p class='title_text'>cat</p>
                                            <p class='color_text'>black</p>
                                        </Link>
                                    </Container>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/7' style={styles.link}>
                                            <Image src={shoes7} style={{width:'30%'}}></Image>
                                            <p class='title_text'>cats</p>
                                            <p class='color_text'>white</p>
                                        </Link>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/8' style={styles.link}>
                                            <Image src={shoes8} style={{width:'30%'}}></Image>
                                            <p class='title_text'>catss</p>
                                            <p class='color_text'>white</p>
                                        </Link>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container style={styles.container}>
                                        <Link class='image-wrapper' to='./cats/9' style={styles.link}>
                                            <Image src={shoes9} style={{width:'30%'}}></Image>
                                            <p class='title_text'>cat</p>
                                            <p class='color_text'>sad</p>
                                        </Link>
                                    </Container>
                                </Col>
                            </Row>
                            <br/>
                        </Col>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

const styles = {
    container: {
        border: 'solid',
        padding: '5px'
    },
    link: {
        color: 'blue',
    }
}


export default Cats;
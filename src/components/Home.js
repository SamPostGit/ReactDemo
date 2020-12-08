import React, { Component } from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../media/banner.jpg';
import banner2 from '../media/banner2.jpg';

class Home extends Component {
    render() {
        console.log(this.props.userId);
        return (
            <div style={{marginTop: "auto"}}>
                <Row>
                    <Col>
                        <Image src={banner} fluid></Image>
                    </Col>
                </Row>
                <Row>
                    <Col style={{padding: 'auto'}}>
                        <Container>
                        <Link to='/cats' style={{color: 'black', hover: 'black'}}>
                            <h2>Some Title</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at.
                                In maximus pretium dolor, non efficitur erat vestibulum ac. Quisque.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus.
                                Aliquam mollis pretium massa ut ultricies. Maecenas pulvinar risus sit.
                            </p>
                        </Link>
                        </Container>
                    </Col>
                     <Col>
                        <Container>
                        <Link to='/cats' style={{color: 'black', hover: 'black'}}>
                            <h2>{this.props.userId}</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at.
                                In maximus pretium dolor, non efficitur erat vestibulum ac. Quisque.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus.
                                Aliquam mollis pretium massa ut ultricies. Maecenas pulvinar risus sit.
                            </p>
                        </Link>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                        <Link to='/cats' style={{color: 'black', hover: 'black'}}>
                        <h2>??????</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at.
                                In maximus pretium dolor, non efficitur erat vestibulum ac. Quisque.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus.
                                Aliquam mollis pretium massa ut ultricies. Maecenas pulvinar risus sit.
                            </p>
                        </Link>
                        </Container>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Link to='/cats'>
                        <Image src={banner2} fluid></Image>
                    </Link>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
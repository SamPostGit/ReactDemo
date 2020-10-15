import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Cats from './components/Cats'
import Footer from './components/Footer';
import { Navbar, NavDropdown, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class App extends Component {
  state = {
      userId: '',
      email: '',
      password: ''
  };

  login = (userId) => {
    this.setState({userId: userId});
  }

  logout = () => {
    this.setState({userId: ''});
  }

  showSignIn = () => {
    const userId = this.state.userId;
    if (userId) {
        return (
            <Button onClick={this.logout}>Log Out</Button>
        )
    } else {
    return (
        <Link to="./signin">
            <Button>Sign In</Button>
        </Link>
    )}
}


render() {
    return (
      <Router>
        <Container>
                {this.props.userId}
                <Navbar bg="dark" variant="dark"  fixed='top'>
                <Link to="./">
                    <Navbar.Brand>CSCI</Navbar.Brand>
                </Link>
                <Nav variant="dark">
                    <NavDropdown title="Lyrics" id="basic-nav-dropdown">
                        <NavDropdown.Item href="./cats">God</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">are</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">you</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">punishing</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">me?</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Meme" id="basic-nav-dropdown">
                        <NavDropdown.Item href="./cats">Hello there</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">General Kenobi</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">some meme</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Demo" id="basic-nav-dropdown">
                        <NavDropdown.Item href="./cats">Link</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">Link</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">Link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="???" id="basic-nav-dropdown">
                        <NavDropdown.Item className="link" href="./cats">Jun the roomate</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">Hello</NavDropdown.Item>
                        <NavDropdown.Item href="./cats">How are you?</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button >Search?</Button>
                    </Form>
                    <Nav style={{padding: "5px"}}>
                    {this.showSignIn()}
                    </Nav>
                </Nav>
                </Navbar>
            </Container>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/cats">
            <Cats/>
          </Route>
          <Route path="/signin">
            <SignIn login={this.login}/>
          </Route>
          <Route path="/signup">
          <SignUp login={this.login}/>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    );
  }
}

export default App;

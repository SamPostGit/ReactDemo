import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class SignIn extends Component {
    state = {
        email: '',
        password: '',
        responseToPost: ''
      };

    showResult = () => {
      if (this.state.responseToPost) {
        return (
          <Link to='/'>
            <Button>Success return to Home</Button>
          </Link>
        )
      } else if (this.state.responseToPost === false) {
        return (
          <Button style={{backgroundColor: 'red'}}>Login credentials are invalid</Button>
        )
      }
    }


    handleSubmit = async e => {
        e.preventDefault();
        let responseToPost;
        const response = await fetch('/signin', {
          method: 'post',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({ email: this.state.email, password: this.state.password }),
        });
        const body = JSON.parse(await response.text());
        console.log(body);
        if (body != null) {
          const { userId } = body;
          this.props.login(userId);
          responseToPost = true;
        } else {
          responseToPost = false;
        }
        
    
        this.setState({ responseToPost: responseToPost });
      };

    render() {
        return (
          <Container>
          <Container style={{padding: "5rem"}}>
              <p>Sign In</p>
              <Link to="/signup">Sign Up Here</Link>
              <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control 
                          type="email" placeholder="Enter email"
                          value={this.state.email}
                          onChange={e => this.setState({ email: e.target.value })} 
                          required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                          type="password" placeholder="Enter password"
                          value={this.state.password}
                          onChange={e => this.setState({ password: e.target.value })} 
                          required />
                  </Form.Group>
              <button type="submit">Submit</button>
              </Form>
              <br/>
              {this.showResult()}
          </Container>
      </Container>
        );
    }
}

export default SignIn;

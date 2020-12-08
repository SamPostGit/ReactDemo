import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';



class SignUp extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        responseToPost: ''
      };


    validateForm = () => {
        const { email, password, password2 } = this.state;
        if ( email === '' || password === '' || password2 === '') {
            return 0;
        } else if (!JSON.stringify(password) === JSON.stringify(password2)) {
            return 1;
        } else {
            return 2;
        }

    }

    showResult = () => {
        if (this.state.responseToPost) {
          return (
            <Link to='/'>
              <Button>Success return to Home</Button>
            </Link>
          )
        } else if (this.state.responseToPost === false) {
          return (
            <Button style={{backgroundColor: 'red'}}>Email is already in use</Button>
          )
        }
      }

    handleSubmit = async e => {
        e.preventDefault();
        const valid = this.validateForm();
        let formResponse;
        if (valid === 0) {
            formResponse = "Fill in all values"
        } else if (valid === 1) {
            formResponse = "Make sure both passwords match"
        } else {
            const response = await fetch('/signup', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password }),
            });
            const body = JSON.parse(await response.text());
            console.log(body);
            if (body.valid) {
                formResponse = true;
                const { userId } = body.response;
                this.props.login(userId);
            } else {
                formResponse = false;
            }
        }
    
        this.setState({ responseToPost: formResponse });
      };

    render() {
        return (
        <Container>
            <Container style={{padding: "5rem"}}>
                <p>Sign Up</p>
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
                    <Form.Group>
                        <Form.Label>Re-Enter Password</Form.Label>
                        <Form.Control 
                            type="password" placeholder="Re-Enter Password"
                            value={this.state.password2}
                            onChange={e => this.setState({ password2: e.target.value })} 
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

export default SignUp;

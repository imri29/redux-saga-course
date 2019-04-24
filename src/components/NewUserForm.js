import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const initialState = {
  firstName: '',
  lastName: ''
};

class NewUserForm extends Component {
  state = initialState;

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName } = this.state;
    this.props.onSubmit({
      firstName,
      lastName
    });
    this.setState(initialState);
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            required
            placeholder="First Name"
            value={firstName}
            onChange={this.handleFirstNameChange}
          />
          <Label>Last Name</Label>
          <Input
            required
            value={lastName}
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;

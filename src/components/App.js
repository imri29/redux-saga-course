import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

// actions
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
} from '../actions/users';

import UsersList from './UsersLists';

import NewUserForm from './NewUserForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName });
  };

  handleDeleteUser = userId => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError({ error: '' });
  };

  render() {
    const { users } = this.props;
    return (
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
        <Alert
          color="danger"
          isOpen={!!this.props.users.error}
          toggle={this.handleCloseAlert}
        >
          {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList users={users.items} onDeleteUser={this.handleDeleteUser} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getUsersRequest, createUserRequest, deleteUserRequest, usersError }
)(App);

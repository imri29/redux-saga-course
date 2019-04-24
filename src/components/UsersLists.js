import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const UsersList = ({ users, onDeleteUser }) => {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) return 1;
          else if (a.firstName < b.firstName) return -1;
          else if (a.lastName > b.lastName) return 1;
          else if (a.lastName < b.lastName) return -1;
          else return 0;
        })
        .map(user => {
          const { id, firstName, lastName } = user;
          return (
            <ListGroupItem key={id}>
              <section style={{ display: 'flex' }}>
                <div style={{ flexGrow: '1', margin: 'auto 0' }}>
                  {firstName} {lastName}
                </div>
                <div>
                  <Button
                    outline
                    color="danger"
                    onClick={() => onDeleteUser(id)}
                  >
                    Delete
                  </Button>
                </div>
              </section>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};

export default UsersList;

import React from 'react';
import { UserContext } from '../../context/user.js';

class User extends React.Component {
  constructor(props) {
    super(props);
  }


  // this is the magic line that just makes a `context` property available on `this`
  static contextType = UserContext;
  
  handlePerson = () => {
    let payload = {
      name: 'Jacob',
      role: 'instructor'
    }

    this.context.addPerson(payload);
  }

  render() {
    return (
      <>
        {this.context.User.map(person =>  {
          return <p>{person.name}</p>
        })}
        <button onClick={this.handlePerson}>Add Person</button>
      </>
    )
  }
}

export default User;
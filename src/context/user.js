import React, { useState } from 'react';

export const UserContext = React.createContext();

function UserProvider({ children }) {

  // In order for context behaviors to hook into our react application, we should define them using state / reducer hooks.
  const [currentUser, setCurrentUser] = useState({});
  const [user, setUser] = useState([]); 

  const values = {
    currentUser,
    user,
    setCurrentUser: ({ name, role }) => {
      if (!name || !role) {
        throw new Error('Invalid user submitted');
      } else {
        setCurrentUser({name, role});
      }
    },
    addUser: ({name, role}) => {
      if (!name || !role) {
        throw new Error('Invalid user submitted');
      } else {
        setUser([...user, {name, role}]);
      }
    }
  }


  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
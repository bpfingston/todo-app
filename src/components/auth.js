import { useContext } from 'react';

import { AuthContext } from '../context/auth.js';
import { When } from 'react-if'

function IsAuthorized({ children, capability }) {

  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isLoggedIn;
  // const isAuthorized = authContext.isAuthorized(capability);
  const isOkToRender = isLoggedIn;
  return (
    <>
      <When condition={isOkToRender}>
      { children}
      </When>
    </>
  )
}

export default IsAuthorized;

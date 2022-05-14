import React from 'react'
import { Navigate } from 'react-router-dom';
import TokenService from 'services/token.service';

function Logout() {

    const [logout, setLoggedOut] = React.useState(false);

    React.useEffect(() => {
        if (logout) {
            removeUser();
        }
    }, []);
    
  if(logout){
      return <Navigate to="/connexion" />
  } else {
    return (
        <div>Logout</div>
      )
  }
}

export default Logout
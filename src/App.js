import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import User from './components/User';



function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID
  console.log(clientId);
  const { isAuthenticated } = useAuth0();
  console.log({isAuthenticated})

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <p style={{ fontSize: "1.5rem" }}>Please Login.</p>
           <LoginButton />
        </div>
      ) :
        <div>
            <LogoutButton />
            <User />
        </div>}
    </div>
  );
}

export default App;



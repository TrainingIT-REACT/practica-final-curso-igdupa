import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Alert, AlertTitle } from '@material-ui/lab';
import { connect } from 'react-redux';

// Contexto de usuario
import UserContext from './contexts/user';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Login = ({ location, userRedux }) => {
  const user = useContext(UserContext)
  const [userInput, setUser] = useState();
  const [passInput, setPass] = useState();
  const [error, setError] = useState(false);

  function login() {
    if (userRedux.user === userInput && userRedux.pass === passInput) {
      user.updateUser({ signedIn: true })
    }else{
      setError(true);
    }
  }

  return (
    user.signedIn ? (
      <Paper>
        <Box p={3}>
          <Alert severity="info">
            <AlertTitle>Información</AlertTitle>
            ¡Ya puedes ir al perfil de usuario!
      </Alert>
        </Box>
      </Paper>
    ) : (
        <Paper>
          <Box p={3}>
            Usuario:
            <br />
            <input id="user" type="text" placeholder="admin" onChange={(e) => setUser(e.target.value)} value={userInput} />
            <br />
            <br />
            Contraseña:
            <br />
            <input id="pass" type="password" placeholder="1234" onChange={(e) => setPass(e.target.value)} value={passInput} />
            <br />
            <br />
            {(error) &&
              <Box p={5}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {'Usuario y contraseña erroneos.'}
                </Alert>
              </Box>
            }
            <Button onClick={login} variant="contained" color="primary">Login</Button>
            {(location.state && location.state.message) &&
              <Box p={5}>
                <Alert severity="warning">
                  <AlertTitle>Advertencia</AlertTitle>
                  {location.state.message}
                </Alert>
              </Box>
            }
          </Box>
        </Paper>
      )
  );
}

const mapStateToProps = (state) => {
  return {
    userRedux: state.user.user
  }
}

export default connect(
  mapStateToProps,
)(Login);
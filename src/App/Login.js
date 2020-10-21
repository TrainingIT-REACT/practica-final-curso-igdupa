import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Alert, AlertTitle } from '@material-ui/lab';

// Contexto de usuario
import UserContext from './contexts/user';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Login = ({ location }) => {
  const user = useContext(UserContext)
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
            <Button onClick={() => user.updateUser({ signedIn: true })} variant="contained" color="primary">Login</Button>
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

export default Login;

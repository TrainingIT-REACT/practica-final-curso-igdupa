import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

// Acciones
import { updateName } from './actions/user';

const UpdateName = ({ userRedux, updateName }) => {
  const [name, setName] = useState(userRedux.name);

  useEffect(() => {
    setName(userRedux.name);
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    updateName(name);
  }

  return <form onSubmit={onSubmit}>
    <label htmlFor="name">¿Cuál es tu nombre?</label>
    <br />
    <br />
    <input id="name" type="text" placeholder="Nombre..." onChange={(e) => setName(e.target.value)} value={name} />
    <br />
    <br />
    <Button type="submit" variant="contained" color="primary">Actualizar nombre</Button>
  </form>
}

const mapStateToProps = (state) => {
  return {
    userRedux: state.user.user
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateName);

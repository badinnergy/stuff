import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// own components
import Emoji from './Emoji';

const styles = {
  root: {
    flexGrow: 1,
    width: '50%',
    margin: 'auto',
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button component={Link} to='/' color="inherit">Analog</Button>
          <Button component={Link} to='/digital' color="inherit" style={style.margining}>Digital</Button>
          <Button component={Link} to='/info' color="inherit" style={style.margining}>Info</Button>
          <Typography variant="h6" color="inherit" style={style.app} component={Link} to='/'>
            Masa<Emoji symbol="🕒" label="clock"/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const style = {
  app: {
    marginLeft: '60%',
    textDecoration: 'none',
  },
  margining: {
    marginLeft: '3%'
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
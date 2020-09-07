import React from 'react';
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

import {
  IconButton,
  Grid,
  Typography,
 } from '@material-ui/core';
 import GitHubIcon from '@material-ui/icons/GitHub';
 import GetAppIcon from '@material-ui/icons/GetApp';

 const useStyles = createUseStyles({
   hero: {
    paddingTop: '320px',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundImage: `url(${'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80'})`,
   }
 });

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <IconButton aria-label="GitHub"><GitHubIcon /></IconButton>
      </Grid>

      <div className={ classes.hero }>
        <Grid container direction="row" justify="center">
          <Grid item xs={12}>
          <Typography variant="h5" display="block" align="center">
            Hey, this is Frank.
          </Typography>
          <Typography variant="h6" display="block" align="center">
            I am a software engineer, residing in San Francisco.
          </Typography>
          <IconButton aria-valuetext="Download CSV"><GetAppIcon /></IconButton>
          </Grid>
        </Grid>
      </div> 
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import {Grid} from '@material-ui/core';
import Details from './components/Details/Details';
import useStyles from './styles';
import Main from './components/Main/main';

function App() {
  const styles = useStyles();

  return (
    <div>
      <Grid className={styles.grid} container spacing={0} alignItems="center" justify="center" style={{height: "100vh"}}> 
        <Grid item xs={12} sm={4} >
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} >
          <Main income="Income" expense="Expense" />
        </Grid>
        <Grid item xs={12} sm={4} >
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

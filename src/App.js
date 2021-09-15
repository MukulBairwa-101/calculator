
import './App.css';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Buttons from "./Components/Buttons";

function App() {
  return (
    <Container >
      <Container maxWidth="sm" >
      <TextField
          id="outlined-full-width"
          // label="Label"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          // className="text-field"
        />
       <Buttons />
        {/* <Grid item xs={2}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >xs=12</Paper>
        </Grid> */}
     
      </Container>
    </Container>
  );
}

export default App;

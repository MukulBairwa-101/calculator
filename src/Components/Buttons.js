import React ,{useState} from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from  '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {styles} from "./ButtonStyles";
import BackspaceIcon from '@material-ui/icons/Backspace';
const Buttons =()=>{
  const [result,setResult] =useState("");

  const  handleButtonClick =(e)=>{
    e.preventDefault();
    if (e.currentTarget.name === ""){
      backSpace();
    }
    else if (e.currentTarget.name === "C"){
        clear();
    }
    else if(e.currentTarget.name==="="){
      evaluate();
    }
    else if(e.currentTarget.name==="+/-"){
      let first = "-"+result[0]
      setResult(first);
    }
    else if(e.currentTarget.name==="q"){
        let sqrRoot = Math.sqrt(result);
        setResult(sqrRoot);
    }
    else if(e.currentTarget.name==="sq"){
      let value = eval(result)
      let sqr = Math.pow(value,2);
      setResult(sqr);
  }
    else  setResult( result+ e.currentTarget.name );

  }
  const backSpace =()=>{
    setResult(result.slice(0,-1));
  }
  const clear =()=>{
    setResult("");
  }
  const evaluate=()=>{
    setResult((eval(result))+"")
  }
    return (
        <Grid container spacing={2} xs={15} style ={styles.root}>
        <TextField
          id="outlined-full-width"
          fullWidth
          margin="normal"
          variant="outlined"
          style={styles.textField}
          value ={result}
          // onChange={(e)=>handleChange(e)}
          // className="text-field"
        />
         <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" style={styles.operatorBtn} name ="%" onClick={(e)=>handleButtonClick(e)}>%</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" style={styles.operatorBtn}  name ="(" onClick={(e)=>handleButtonClick(e)}>(</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" name =")" style={styles.operatorBtn}  onClick={(e)=>handleButtonClick(e)}>)</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" name ="" style ={styles.backSpace} onClick={(e)=>handleButtonClick(e)}><BackspaceIcon /></Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" style={styles.operatorBtn}  name ="C" onClick={(e)=>handleButtonClick(e)}>C</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" name ="q" style={styles.operatorBtn}   onClick={(e)=>handleButtonClick(e)}><span>&#8730;</span></Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" style={styles.operatorBtn}  name ="sq" onClick={(e)=>handleButtonClick(e)}>x²</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" style={styles.operatorBtn}  name ="/" onClick={(e)=>handleButtonClick(e)}><span>&#247;</span></Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id ="1" name ="1"  onClick={(e)=>handleButtonClick(e)}>1</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id ="2" name ="2" onClick={(e)=>handleButtonClick(e)}>2</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="3" name ="3" onClick={(e)=>handleButtonClick(e)}>3</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained"style={styles.operatorBtn}  name ="*"onClick={(e)=>handleButtonClick(e)} ><span>&#215;</span></Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="4" name ="4" onClick={(e)=>handleButtonClick(e)}>4</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="5" name ="5" onClick={(e)=>handleButtonClick(e)}>5</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="6" name ="6" onClick={(e)=>handleButtonClick(e)}>6</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained"style={styles.operatorBtn}  name ="-" onClick={(e)=>handleButtonClick(e)}><span>&#8722;</span></Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="7" name ="7"  onClick={(e)=>handleButtonClick(e)}>7</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="8" name ="8" onClick={(e)=>handleButtonClick(e)}>8</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="9" name ="9" onClick={(e)=>handleButtonClick(e)}>9</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained"style={styles.operatorBtn}  name ="+" onClick={(e)=>handleButtonClick(e)}><span>&#43;</span></Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained"style={styles.operatorBtn}  name ="+/-" onClick={(e)=>handleButtonClick(e)}>+/-</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" id="0" name ="0"onClick={(e)=>handleButtonClick(e)} >0</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" style={styles.operatorBtn}  id="." name ="." onClick={(e)=>handleButtonClick(e)}>.</Button> 
              </Paper>
       </Grid>
       <Grid item xs={3} >
            <Paper style={styles.btnGrid} >
            <Button variant="contained" style ={styles.equalButton} name ="="onClick={(e)=>handleButtonClick(e)} >=</Button> 
              </Paper>
       </Grid>
       
    </Grid>     
    )
   
      
}


export default Buttons;


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import calcButtons from "./ButtonStyles"
const Buttons =()=>{
    return (
        <Grid container spacing={2} xs={15}>
        {calcButtons.map((el,index)=>{
          return(
            <>
             <Grid item xs={3} key ={el.id} >
                 {/* <Paper > */}
                 <Button variant="contained" style={el.styleClass}>{el.icon}</Button> 
                   {/* </Paper> */}
            </Grid>
          </>
          )
          
        })}
    </Grid>     
    )
   
      
}


export default Buttons;
// export {calcButtons};
const initialResult = 0;

const updatedResult =(state=initialResult,action)=>{
    switch(action.type){
        case "ADD":  return ( state + action.payload);
        default : return state;
    }
}
export default updatedResult;
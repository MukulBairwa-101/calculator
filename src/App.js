import './App.css';
import Container from '@material-ui/core/Container';
import Buttons from "./Components/Buttons";

function App() {
  return (
    <Container maxWidth="lg"className="wrapper" >
      <Container maxWidth="sm" className="container">
        <header className="header">
          <span>React</span> Calculator app
        </header>
        {/* Buttons and  result field are now rendered here  */}
       <Buttons /> 
      </Container>
      </Container>
  );
}

export default App;

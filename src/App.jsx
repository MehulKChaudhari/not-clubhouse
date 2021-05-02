import './App.css';
import { Signup } from './Components/auth/Signup';
import { Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>App under construction!</h1>
      <Container className="signup__container">
        <div className="signup">
          <Signup />
        </div>
      </Container>
      
    </div>
  );
}

export default App;

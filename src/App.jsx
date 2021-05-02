import "./App.css";
import { Container } from "react-bootstrap";
import {  Routes, Route } from "react-router-dom";
import { Dashboard } from '../src/Components/Dashboard';
import { Signup } from './Components/auth/Signup';
import { Login } from './Components/auth/Login'


function App() {
  return (
    <div className="App">
      <h1>App under construction!</h1>
      <Container className="route__container">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={ <Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={ <Login />} />
          </Routes>
        </div>
      </Container>
    </div>
  );
}

export default App;

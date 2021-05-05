import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Signup } from "./Components/auth/Signup";
import { Login } from "./Components/auth/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import { ForgotPassword } from './Components/auth/ForgotPassoword';
import { UpdateProfile } from "./Components/UpdateProfile";
import { Profile } from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Container className="route__container">
        <div className="routes">
          <Routes>
            <PrivateRoute exact path="/" element={<Dashboard />} />
            <PrivateRoute  path="/updateprofile" element={< UpdateProfile/>} />
            <PrivateRoute  path="/profile" element={< Profile/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </div>
      </Container>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import ImageRight from './assets/Dev_productivity.png';
import ImageLeft from './assets/Futuristic_interface.png';

function App() {

  const adminUser = {
    username: "energeek",
    password: "En3rg33k",
    role: "admin"
  }

  const regularUser = {
    username: "user1",
    password: "qwerty123456",
    admin: "regular"
  }

  const [user, setUser] = useState({ username: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.username === adminUser.username && details.password === adminUser.password) {
      setUser({
        username: details.username
      })
      setSuccess(true);
    } else if (details.username === regularUser.username && details.password === regularUser.password) {
      setUser({
        username: details.username
      })
      setSuccess(true);
    }
    else {
      setError("Username or Passsword not matches");
      setSuccess(false);
    }
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <Dashboard user={user} />
      ) : (
        // <Link to="/dashboard">
        <LoginForm Login={Login} error={error} isSuccess={success} />
        // </Link> 
      )}

      <img src={ImageLeft} alt="Gambar" className='img-right' />
      <img src={ImageRight} alt="Gambar" className='img-left' />

      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard user={user} />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;

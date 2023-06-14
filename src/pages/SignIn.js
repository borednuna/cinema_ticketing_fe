import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./SignUp.scss";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const fetchUser = (data) => {
    let str_url = '';
    str_url += "http://localhost:3100/signin?";
    str_url += `c_nama=${data.c_nama}&`;
    str_url += `c_email=${data.c_email}`;

    fetch(str_url)
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'SET_USER', payload: data[0]});
        console.log(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any further actions with the stored values
    let data = {
        c_nama: username,
        c_email: email
    }
    fetchUser(data);
    navigate("/");
  };

  return (
    <div className="signup">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic-username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="outlined-basic-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <Button type="submit" variant="contained">
          Masuk
        </Button>
      </form>
    </div>
  );
}

export default SignIn;

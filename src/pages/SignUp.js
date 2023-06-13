import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUp.scss";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const postNewUser = (data) => {
    fetch('http://localhost:3100/pendaftaran-user-baru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any further actions with the stored values
    let data = {
        c_nama: username,
        c_jenis_kelamin: gender,
        c_nomor_telepon: phoneNumber,
        c_alamat: address,
        c_email: email
    }
    postNewUser(data);
    navigate("/");
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic-username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="outlined-basic-gender"
          label="Gender (L/P)"
          variant="outlined"
          value={gender}
          onChange={handleGenderChange}
        />
        <TextField
          id="outlined-basic-phone"
          label="Nomor Telepon"
          variant="outlined"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <TextField
          id="outlined-basic-address"
          label="Alamat"
          variant="outlined"
          value={address}
          onChange={handleAddressChange}
        />
        <TextField
          id="outlined-basic-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <Button type="submit" variant="contained">
          Daftar
        </Button>
      </form>
    </div>
  );
}

export default SignUp;

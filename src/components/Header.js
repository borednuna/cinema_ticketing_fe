import React from "react";
import TextField from '@mui/material/TextField';
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <a href="/" className="title">Cinema Ticketing</a>
      <TextField id="filled-basic" label="Search" variant="filled" />
      <div className="menubar">
        <a href="/tickets" className="subtitle">Tickets</a>
        <a href="/profile" className="subtitle">Profile</a>
      </div>
    </div>
  );
}

export default Header;

import React, {useContext} from "react";
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import "./Header.scss";

function Header() {
  const user = useSelector((state) => state.user);
  return (
    <div className="header">
      <a href="/" className="title">Cinema Ticketing</a>
      <TextField id="filled-basic" label="Search" variant="filled" />
      <div className="menubar">
        <a href="/tickets" className="subtitle">{user === undefined || user === null === 0 ? "" : "Tickets"}</a>
        <a href={user === undefined || user === null === 0 ? "signup" : "/profile" }className="subtitle">{user === undefined || user === null ? "Sign up" : "Profile"}</a>
        <a href={user === undefined || user === null === 0 ? "/signin" : ""} className="subtitle">{user === undefined || user === null ? "Sign in" : ""}</a>
      </div>
    </div>
  );
}

export default Header;

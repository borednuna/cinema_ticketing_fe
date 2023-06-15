import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.scss";
import { Button } from "@mui/material";

function Header() {
  const [searchFilm, setSearchFilm] = useState("");
  const [searchResult, setSearchResult] = useState(null)
  const user = useSelector((state) => state.user);

  const handleInputSearchFilm = (event) => {
    setSearchFilm(event.target.value);
  };

  const fetchSearchFilm = () => {
    fetch("http://localhost:3100/carifilm?f_judul=" + searchFilm, {
      method: "GET",
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  })
  .then((response) => response.json())
  .then((result) => {setSearchResult(result)})
  .catch((error) => console.log("error", error));
}

  return (
    <div className="header">
      <div className="navbar">
      <a href="/" className="title">Cinema Ticketing</a>
      <FilledInput
        onChange={handleInputSearchFilm}
            id="filled"
            endAdornment={<InputAdornment position="end">
              <Button onClick={fetchSearchFilm}>Search</Button>
              </InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
      <div className="menubar">
        <a href="/tickets" className="subtitle">{user === undefined || user === null === 0 ? "" : "Tickets"}</a>
        <a href={user === undefined || user === null === 0 ? "signup" : "/profile" }className="subtitle">{user === undefined || user === null ? "Sign up" : "Profile"}</a>
        <a href={user === undefined || user === null === 0 ? "/signin" : ""} className="subtitle">{user === undefined || user === null ? "Sign in" : ""}</a>
      </div>
      </div>
      <div className="searchresult">
        {searchResult === undefined || searchResult === null
          ? null
          : searchResult.map((film) => (
              <div className="buttonsesi">
                  <a href={"/moviedetails/" + film.f_id_film}>
                    <p>{film.f_judul}</p>
                  </a>
              </div>
          ))}
      </div>
    </div>
  );
}

export default Header;

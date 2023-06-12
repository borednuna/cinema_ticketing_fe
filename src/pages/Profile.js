import React from "react";
import "./Profile.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Profile() {
    return(
        <div className="profile">
            <h1>Profile</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" defaultValue="Username" />
            <TextField id="outlined-basic" label="Gender" variant="outlined" defaultValue="Gender" />
            <TextField id="outlined-basic" label="Nomor Telepon" variant="outlined" defaultValue="Nomor Telepon" />
            <TextField id="outlined-basic" label="Alamat" variant="outlined" defaultValue="Alamat" />
            <TextField id="outlined-basic" label="Email" variant="outlined" defaultValue="Email" />
            <a><Button variant="contained">Update Data Diri</Button></a>
        </div>
    )
}

export default Profile; 

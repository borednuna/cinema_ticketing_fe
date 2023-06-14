import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Profile.scss";

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    console.log(user)

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        navigate("/");
    }

    return(
        <div className="profile">
            <h1>Profile</h1>
            {user === undefined || user === null ? null :
            <div className="forms">
                <TextField id="outlined-basic" label="Username" variant="outlined" defaultValue={user.c_nama} />
                <TextField id="outlined-basic" label="Gender" variant="outlined" defaultValue={user.c_jenis_kelamin === "P" ? "Perempuan" : "Laki-laki"} />
                <TextField id="outlined-basic" label="Nomor Telepon" variant="outlined" defaultValue={user.c_nomor_telepon} />
                <TextField id="outlined-basic" label="Alamat" variant="outlined" defaultValue={user.c_alamat} />
                <TextField id="outlined-basic" label="Email" variant="outlined" defaultValue={user.c_email} />
                {/* <a><Button variant="contained">Update Data Diri</Button></a> */}
                <a><Button onClick={logout} variant="contained">Logout</Button></a>
            </div>}
        </div>
    )
}

export default Profile; 

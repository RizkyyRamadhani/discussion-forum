/* eslint-disable no-unused-vars */
import React from "react";
import {useDispatch} from "react-redux";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { asyncSetAuthUser } from "../states/authUser/action";

function LoginPage() {
    const dispatch = useDispatch();

    const onLogin = ({ email, password }) => {
      dispatch(asyncSetAuthUser({ email, password }));
    };
  

    return (
        <div>
        <LoginInput login={onLogin}/>
        <Link to="/register">Register</Link>
        </div>
    )
}

export default LoginPage;
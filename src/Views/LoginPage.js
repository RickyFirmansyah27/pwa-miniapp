import React from "react";
import "bulma/css/bulma.css";
import Login from "../Auth/Login";

const LoginPage = () => {

    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
                <h3 className="is-bold">Welcome</h3>       
            </div>
            <div className="box">
                <h3 className="is-bold">Authentication Page</h3>
                <Login />
                <br>
                </br>
            </div>
        </div>


    );
};


export default LoginPage;

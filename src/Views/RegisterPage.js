import React from "react";
import "bulma/css/bulma.css";
import Register from "../Auth/Register";

const RegisterPage = () => {
    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
            <h3 className="is-bold">Dashboard</h3>
         
            </div>
            <div className="box">
                <h3 className="is-bold">Authentication Page</h3>
                <Register/>
                <br>
                </br>
            </div>
        </div>
        
        
    );
};


export default RegisterPage;

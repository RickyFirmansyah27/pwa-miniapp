import React from "react";
import "bulma/css/bulma.css";
import Login from "../Auth/Login";
import Register from "../Auth/Register";




const Main = () => {
    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
                <h3 className="is-bold">Project MiniApp</h3>
            </div>

            <div className="container mt-3 is-pulled-left">
                <div className="columns">
                    <div className="box">
                        <h3 className="is-bold">Register </h3>
                        <div className="column">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>


            <div className="column is-8 main is-pulled-right">
                <div className="columns">
                    <div className="box">
                        <h3 className="is-bold">Login </h3>
                        <div className="column">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>



        </div>


    );
};


export default Main;

import React, { useState } from "react";
import "bulma/css/bulma.css";
import { useDispatch } from "react-redux";
import {login} from '../Redux/action/login'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };


  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" >Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

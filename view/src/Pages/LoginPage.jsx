import React from "react";
import PasswordField from "../UserComponents/PasswordField";

export default function LoginPage(){
    return (
    <div className="container">
        <h2> Login </h2>
    <form className="" method="post" action="/dologin">
        <div className="container" id="MainForm">
          <div className="row mb-2">
            <label className="col-form-label col-12 col-md-1" htmlFor="txt_login"> Login: </label>
            <div className="col-12 col-md-4">
              <input className="form-control" type="email" name="txt_login" id="txt_login" required />
            </div>
          </div>
          <PasswordField />
          <div className="row mb-2">
            <div className="offset-md-1 col-12 col-md-2 d-grid">
              <button type="submit" className="btn btn-success btn-block"> Login </button>
            </div>
            <div className="col-12 col-md-2 d-grid">
              <button type="reset" className="btn btn-warning btn-block"> Clear </button>
            </div>
          </div>
        </div>  
        <div className="container">
          <div className="row">
            <div className="col-md-6" id="msg-display">
            </div>
          </div>
        </div>
        
      </form>  
      </div>
    );
}
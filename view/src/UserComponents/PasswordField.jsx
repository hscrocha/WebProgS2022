import React from "react";

export default function PasswordField(props){
    let visible = false;
    function toggleVisibility(){
        visible = !visible;
        console.log(visible);
    }
    return (
    <div className="row mb-2">
        <label className="col-form-label col-12 col-md-1" for="txt_pass"> Password: </label>
        <div className="col-12 col-md-4">
          <input className="form-control" type="password" name="txt_pass" id="txt_pass" minlength="6" required />
        </div>
        <div className="col col-form-label">
            <input className="form-check-input" type="checkbox" id="chk_vis" onClick={toggleVisibility} /> 
            <label for="chk_vis">Hide/Display</label>
        </div>
    </div>
    );
}
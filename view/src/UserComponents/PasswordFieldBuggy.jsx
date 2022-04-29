import React from "react";
//Does not work because React will not re-render this component
export default function PasswordField(props){
    let visible = false;
    function toggleVisibility(){
        visible = !visible;
        console.log(visible);
    }
    return (
    <div className="row mb-2">
        <label className="col-form-label col-12 col-md-1" htmlFor="txt_pass"> Password: </label>
        <div className="col-12 col-md-4">
          <input className="form-control" type={visible?"text":"password"} name="txt_pass" id="txt_pass" minLength="6" required />
        </div>
        <div className="col col-form-label">
            <input className="form-check-input" type="checkbox" id="chk_vis" onClick={toggleVisibility} /> 
            <label htmlFor="chk_vis">Hide/Display</label>
        </div>
    </div>
    );
}
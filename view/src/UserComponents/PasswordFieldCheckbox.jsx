import React from "react";

export default function PasswordField(){
    const [visible, setVisible] = React.useState(false); 
    
    function toggleVisibility(){
        setVisible(!visible);
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
import "../../styles/login.scss";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');

  return (
    <MDBContainer> 
        {/* gtop buttons */}
      <div id="topbuttoncont" className="text-center mb-3">
            <MDBBtn id="top-buttons" color="grey" className="m-1 button1" >LOGIN</MDBBtn>
            <MDBBtn id="top-buttons" color="black" className="m-1 button2" >REGISTER</MDBBtn>
      </div>
         

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
        
 <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
 <MDBIcon fab icon="facebook-f" size="sm" />
 </MDBBtn>
 <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
 <MDBIcon fab icon="twitter" size="sm" />
 </MDBBtn>
 <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
 <MDBIcon fab icon="google" size="sm" />
 </MDBBtn>
 <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
 <MDBIcon fab icon="github" size="sm" />
 </MDBBtn>

            </div>
            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            <a href="#!">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
};

export default Login;

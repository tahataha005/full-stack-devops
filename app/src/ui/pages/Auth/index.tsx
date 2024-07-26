import { useState } from "react";
import "./style.css";
import Basebutton from "../../components/base/buttons/BaseButton";
import PlaceHolderInput from "../../components/base/inputs/PlaceHolderInput";
import { authRemote } from "../../../core/data_source/remote/auth";

const Auth = () => {
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);

  const handleFormChange = (key: keyof typeof authForm, value: any) => {
    setAuthForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = async () => {
    const { email, password } = authForm;

    const response = await authRemote.login(email, password);

    if (response) {
      console.log(response);
    }
  };

  const handleSignUp = async () => {
    const response = await authRemote.signUp(authForm);

    if (response) {
      console.log(response);
    }
  };

  return (
    <div className="flex center column page white-bg auth-page">
      <div className="flex center column rounded auth-box">
        {flag ? (
          <>
            <h3>Login</h3>

            <PlaceHolderInput
              onChange={(e) => handleFormChange("email", e.target.value)}
              placeholder="Email"
            />
            <PlaceHolderInput
              onChange={(e) => handleFormChange("password", e.target.value)}
              placeholder="Password"
              type="password"
            />
            <Basebutton text="Login" onClick={handleLogin} />

            <p onClick={() => setFlag(!flag)} className="black-text">
              Don't have an account?
              <span className="clickable primary-text"> Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <h3>Sign Up</h3>

            <PlaceHolderInput
              onChange={(e) => handleFormChange("name", e.target.value)}
              placeholder="Name"
            />
            <PlaceHolderInput
              onChange={(e) => handleFormChange("email", e.target.value)}
              placeholder="Email"
            />
            <PlaceHolderInput
              onChange={(e) => handleFormChange("password", e.target.value)}
              placeholder="Password"
              type="password"
            />

            <Basebutton text="Sign Up" onClick={handleSignUp} />

            <p onClick={() => setFlag(!flag)} className="black-text">
              Already have an account?
              <span className="clickable primary-text"> Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;

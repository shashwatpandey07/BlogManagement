import "./login.css"
// import { Link } from "react-router-dom"
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
// import axios from "axios";
import { axiosInstance } from "../../config";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  return (
    <div>
      <div className="login">
          <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label >USERNAME</label>
            <input type="text" className="loginInput" placeholder="Enter your username" ref={userRef}/>
            <label >PASSWORD</label>
            <input type="password" className="loginInput" placeholder="Enter your password" ref={passwordRef}/>
            <button className="loginButton" type = "submit" disabled={isFetching}>LOGIN</button>
            {/* <button className="loginRegisterButton">
              <Link className="link" to="/register">REGISTER</Link>
            </button> */}
            
        </form>
      </div>
    </div>
  )
}

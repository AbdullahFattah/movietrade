import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ user, setUser }) => {
  const usernames = ["iCy", "Abdullah","user"];
  const passwords = ["movietrade"];

  //   useEffect(() => {
  //     window.sessionStorage.setItem("user", user.username);
  //   }, [user]);

  const [error, setError] = useState(<i>Try "user" for username and "movietrade" for password.</i>);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = () => {
      window.sessionStorage.setItem("user", user.username);
      navigate("/");
    };

    const timedError = ()=>{
        setError(
       <p style={{ color: "orange" }}>Unable to log in! Make sure you have the correct username and password</p>
         );
      setTimeout(()=>{setError(<i>Try "user" for username and "movietrade" for password.</i>)},7000)
    }
    
    usernames.includes(user.username) && passwords.includes(user.password)
      ? loginSuccess()
      : timedError()
     
  };

  return (
    <>
      <h1 align="center" style={{ margin: "10% 0" }}>
        Movietrade
      </h1>
      <form
        className="container col-md-4 my-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group">
          <label className="m-2">Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            className="form-control"
            required
            placeholder="Enter your username"
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            className="form-control"
            required
            placeholder="Enter your username"
          ></input>
        </div>

        <button
          className="btn btn-secondary"
          style={{ width: "100%", margin: "10% 0" }}
        >
          Login
        </button>
        {error}
      </form>
    </>
  );
};

export default Login;

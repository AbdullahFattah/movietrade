import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const usernames = ["iCy"];
  const passwords = ["movietrade"];
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    usernames.includes(user.username) && passwords.includes(user.password)
      ? navigate("/")
      : console.log("Fail");
  };

  return (
    <>
      <h1 align="center">Movietrade</h1>
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
      </form>
    </>
  );
};

export default Login;

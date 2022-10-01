const Login = () => {
  const handleSubmit = () => {};

  return (
    <form className="container col-md-4 my-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label className="m-2">Username</label>
        <input
          type="text"
          name="username"
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
  );
};

export default Login;

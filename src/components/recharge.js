const Recharge = ({ balance, setBalance, authenticateLoggedIn }) => {
  authenticateLoggedIn();
  return (
    <div className="container">
      <p className="text-center mt-3">Add credit </p>

      <div className="recharge-buttons text-center">
        <button
          onClick={() => {
            setBalance(balance + 50);
          }}
          className="btn btn-success m-5"
        >
          50EGP
        </button>
        <button
          onClick={() => {
            setBalance(balance + 100);
          }}
          className="btn btn-success m-5"
        >
          100EGP
        </button>
        <button
          onClick={() => {
            setBalance(balance + 200);
          }}
          className="btn btn-success m-5"
        >
          200EGP
        </button>
      </div>
    </div>
  );
};
export default Recharge;

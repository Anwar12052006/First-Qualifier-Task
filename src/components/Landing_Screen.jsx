
import { useState } from "react";
import { Link } from "react-router-dom";

function Landing() {
  const [clicked, setClicked] = useState(false);

  const handlePageClick = () => {
    // Set clicked to true to apply color change
    setClicked(true);

    // After 1 second, revert it back
    setTimeout(() => {
      setClicked(false);
    }, 310); // 1000 ms = 1 second
  };
 
  return (
    <div className="landing" onClick={handlePageClick}>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/signup">
        <button className={`first ${clicked ? "flash" : ""}`} >Create Account</button>
      </Link>
      <Link to="/login">
        <button className={`second ${clicked ? "flash" : ""}`}>Already Registered? Login</button>
      </Link>
    </div>
  );
}

export default Landing;
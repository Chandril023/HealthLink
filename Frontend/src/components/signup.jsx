
import './signup.css';
const Signup = ({ onSignupClose }) => {
  return (
    <div className='signup-overlay-container'>
    <div className="signup-overlay">
      <div className='signup-form'>
      <form>
        <h1>Register</h1>
        <label>
          Email Adress:
          <input type="email" name="email" required/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <div className='signup-button'>
        <button className='button-1' type="submit">Signup</button>
        <button className='button-1' onClick={onSignupClose}>Close</button>
        </div>
      </form>
      
    </div>
    <div className='signup-advertisement'></div>
    </div>
    </div>
  );
};
export default Signup;

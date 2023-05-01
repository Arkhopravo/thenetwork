import './login.scss'
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
const Login = () => {
  const {login } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/");;
  };
  return (
    <div className='login'>
      <div className='card'>
         <div className='left'>
            <h1>THE NETWORK.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Laudantium harum, molestiae in, ullam sapiente cum
               corrupti aut tempore nemo veniam consequuntur eos 
               sunt natus quibusdam eius obcaecati odio saepe vero, 
              
            </p>
            <span>Don't have an account?</span>
            <Link to="/register">
            <button>Register</button>
          </Link>
         </div>
         <div className='right'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button  onClick={handleLogin}>Login</button>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Login
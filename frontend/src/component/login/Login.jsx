import React, { useContext, useState } from 'react'
import "./login.css";
import logo from "../../assets/Logo.svg";
import axios from "axios";
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState({email: "Email is required", password: "Password is required"});
  const [formData, setFormData] = useState({email: "", password: ""});
  const [showPassword, setShowPassword] = useState(false);
  const [checkPrev, setCheckPrev] = useState(0);
  const {handleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
 
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const checkLogin = async(data) => {
    try{
      let res = await axios.post("http://localhost:8080/user/login", data);
      toast.success(res?.data?.message || 'Valid User', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
      handleLogin();
      navigate("/");
    }catch(err){
      toast.error(err?.response?.data?.message || 'Invalid User', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    }
  }

  const checkPrevLogin = () => {
    if(checkPrev===0){
      setCheckPrev(checkPrev+1);
      setFormData({email: "kiran.gosavi@techprimelab.com", password: "mypass321"})
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkLogin(formData);
  };

  return (
    <div className="login-main d-flex align-items-center flex-column">
      <div style={{paddingTop: "85px"}}>
        <img src={logo} width={"110px"} alt=''/>
      </div>
      <p>Online Project Management</p>
      <div className="card border border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded-4" style={{width: "500px", minHeight: "300px"}}>
        <p className='text-center fw-medium fs-4 mt-5' style={{color: "#3F3F3F"}}>Login to get started</p>
        <form className='p-5 fs-5 form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-control-placeholder" htmlFor="email">Email</label>
            <input type="email" className="form-control p-3" name='email' required onChange={handleOnChange} onClick={checkPrevLogin} value={formData?.email}/>  
          </div>
          <div className="form-group mt-4">
            <label className="form-control-placeholder" htmlFor="password">Password</label>
            <div className="input-group align-items-center">
              <input type={showPassword ? 'text' : 'password'} className="form-control p-3" required onChange={handleOnChange} name='password' value={formData?.password}/>  
              <span toggle="#password-field" className={`fa fa-fw ${showPassword ? 'fa-eye' : 'fa-eye-slash'} field-icon`} onClick={togglePasswordVisibility}></span>
            </div>  
          </div>
          <div className='d-flex justify-content-end'>
            <p className='forgot-password'>Forgot password?</p>
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <button className='rounded-5 login-btn self-align-center' type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
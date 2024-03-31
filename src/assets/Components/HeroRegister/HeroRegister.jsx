import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const HeroRegister = () => {
const [registerError, setRegisterError]= useState('');
const [success , setSuccess] = useState('')
const [showPassword, setShowPasswordd]=useState(false)

  const handleRegistser = e =>{
   e.preventDefault ();
   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(email, password)
  
   if(password.length<6){
    setRegisterError('password should be submit 6 carecter')
    return
  }
  else if(!/[a-z]/.test(password)){
    setRegisterError('At least one lowercase character')
    return
  }

   setRegisterError('');
   setSuccess('')



   createUserWithEmailAndPassword(auth, email, password)
   .then(result =>{
    console.log(result.user)
    setSuccess('user create sucessfully')
   })
   .catch(error =>{
    console.error(error)
    setRegisterError(error.message)
   })

  }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            {/* <p className="py-6"></p> */}
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegistser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword? "text" : "password"}
                 placeholder="password" 
                 name="password" 
                 className="input input-bordered" required />
                 <span onClick={ ()=>setShowPasswordd(!showPassword)} >
                 {
                  showPassword? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                 }
                 </span>
                 
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {
                registerError && <p className="text-red-800">{registerError}</p>
            },
            {
                success && <p className="text-green-700">{success}</p>
            }
          </div>
        </div>
      </div>
    );
};

export default HeroRegister;
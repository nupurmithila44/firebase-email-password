import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase.config";

const Register = () => {
    const handleRegister = e =>{
     e.preventDefault();
     const email = e.target.email.value ;
     const password = e.target. password.value;
     console.log(password, email)
     createUserWithEmailAndPassword(auth, email,password)
      .then(result =>{
       console.log(result.user)
      })
      .catch (error =>{
        console.error(error)
      })
    }
    return (
        <div >
           <div className="mx-auto md: w-1/2">
            <h2 className="text-xl mb-5 ">please register</h2>
          <form  onSubmit={handleRegister} >
          <input className="mb-4 py-2 px-4" type="email" name="email" placeholder="your email" id="" /> 
           <br />
           <input className="mb-4 py-2 px-4" type="password" name="password" placeholder="your password" id="" /> 
           <br />
           <input className="bg-primary w-1/4 rounded-lg text-black" type="submit" value="register" /> 
          </form>
           </div>
        </div>
    );
};

export default Register;
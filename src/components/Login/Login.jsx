import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [registerError, setRegisterError] = useState('');
   const [success, setSuccess] = useState('');
   const emailRef = useRef(null);

   const handleLogin = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);

      // Reset Error
      setRegisterError('');
      setSuccess('')


      // Add Validation
      signInWithEmailAndPassword(auth, email, password)
         .then(result => {
            console.log(result.user);
            if(result.user.emailVerified){
               setSuccess('User Login Successfully')
            }
            else{
               alert('Please Verify Your Account')
            }
         })
         .catch(error => {
            console.error(error)
            setRegisterError(error.message)

         })
   }

   const handleForgetPassword = () =>{
      const email = emailRef.current.value;
      if(!email){
         console.log('Please Write a Email', emailRef.current.value);
         return;
      }
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
         console.log('Please provide a valid email');
         return;
      }
      sendPasswordResetEmail(auth, email)
      .then(()=>{
         alert('Please check your email')
      })
      .catch(error =>{
         console.log(error)
      })
   }

   return (
      <div className="border p-4 rounded-xl">
         <h2 className="text-3xl ">Login Here</h2>
         <div>
            <form onSubmit={handleLogin}>
               <input 
               className="mb-4 px-4 py-3 w-1/3 rounded-lg" type="email" 
               name="email" 
               ref={emailRef}
               placeholder="Email Address" 
               required />
               <br />
               <div className="relative">
                  <input
                     className="px-4 py-3 my-2 w-1/3 rounded-lg"
                     type={showPassword ? "text" : "password"}
                     name="password"
                     placeholder="Password" required />
                  <span className="absolute top-1/3 ml-2" onClick={() => setShowPassword(!showPassword)}>
                     {
                        showPassword ? <FaEyeSlash /> : <FaEye />
                     }
                  </span>
                  <label className="label">
                     <a onClick={handleForgetPassword} href="#" className="label-text-alt mx-auto link link-hover">Forgot password?</a>
                  </label>
               </div>
               <br />

               <input className="btn btn-primary w-1/3 mt-3" type="submit" value="Login" />
            </form>
            {
               registerError && <p className="text-red-400">{registerError}</p>
            }
            {
               success && <p className="text-green-500">{success}</p>
            }
            <p>Already Have an Account? Please <Link className="text-blue-500 font-bold" to='/register'>Resister</Link></p>
         </div>
      </div>
   );
};

export default Login;
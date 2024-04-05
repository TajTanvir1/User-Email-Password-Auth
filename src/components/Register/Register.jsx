import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
   const [registerError, setRegisterError] = useState('');
   const [success , setSuccess] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   // const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

   const handleRegister = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
      // Password Length & Requires
      if(password.length < 6){
         setRegisterError('Password should be at Least 6 Characters or Longer');
         return;
      }
      // else if(!regularExpression.test(password)){
      //    setRegisterError('Password should be at Least 1 Capital, 1 Special Character');
      //    return;
      // }
      // else if(!/[A-Z]/.test(password)){
      //    setRegisterError('Password should be at Least 1 Capital letter');
      //    return;
      // }
      // else if(!/[0-9]/.test(password)){
      //    setRegisterError('Password should be at Least 1 Number');
      //    return;
      // }
      // else if(!/[@$!%*?#&*]/.test(password)){
      //    setRegisterError('Password should be at Least 1 Special Character');
      //    return;
      // }


      // Reset Error
      setRegisterError('');
      setSuccess('')
      // create user
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
         console.log(result.user),
         setSuccess('User Created Successfully')
      })
      .catch(error => [
         console.error(error),
         setRegisterError(error.message)
      ])

   }


   return (
      <div className="border p-4 rounded-xl">
         <h2 className="text-3xl ">Please Register</h2>
         <div>
            <form onSubmit={handleRegister}>
               <input className="mb-4 px-4 py-3 w-1/3 rounded-lg" type="email" name="email" placeholder="Email Address" required />
               <br />
               <input 
               className="px-4 py-3 my-2 w-1/3 rounded-lg" 
               type={showPassword ? "text" : "password"}
               name="password" 
               placeholder="Password" required />
               <span onClick={() => setShowPassword(!showPassword)}>Show</span>
               <br />
               <input className="btn btn-secondary w-1/3 mt-3" type="submit" value="Register" />
            </form>
            {
               registerError && <p className="text-red-400">{registerError}</p>
            }
            {
               success && <p className="text-green-500">{success}</p>
            }
         </div>

      </div>
   );
};

export default Register;
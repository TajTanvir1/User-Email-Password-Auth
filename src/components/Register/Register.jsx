import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {

   const handleRegister = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
      // create user
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
         console.log(result.user)
      })
      .catch(error => [
         console.error(error)
      ])

   }


   return (
      <div className="border p-4 rounded-xl">
         <h2 className="text-3xl ">Please Register</h2>
         <div>
            <form onSubmit={handleRegister}>
               <input className="mb-4 px-4 py-3 w-1/3 rounded-lg" type="email" name="email" placeholder="Email Address" />
               <br />
               <input className="px-4 py-3 my-2 w-1/3 rounded-lg" type="password" name="password" placeholder="Password" />
               <br />
               <input className="btn btn-secondary w-1/3 mt-3" type="submit" value="Register" />
            </form>
         </div>

      </div>
   );
};

export default Register;
import Input from "./Input";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import Popup from "./Components/Popup";
// import { useState, useEffect } from 'react';


const schema = yup.object({
  username: yup.string().required("username is a required field"),
  phoneNumber: yup.string().required("phoneNumbers is a required field")
  .matches(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/, 
  "phone number is not valid.!"
  ),

  email:yup
  .string()
  .required("Email is a required field")
  .email("Email is not valid"),
  password: yup.string().min(6, "password must be at least 6 characters"),
  confirmpassword: yup
  .string()
  .oneOf([yup.ref("password")],"password must be match.")
});

function App() {

  // const [buttonPopup, setButtonPopup] = useState(false);
  

const { handleSubmit, register, formState: { errors }, }= useForm({
  resolver: yupResolver(schema),
});
  
    const formSubmit = (data) => {
      console.log(data);
    }

 

  // useEffect(() => { 
   
  //   // setTimeout(() => {
  //   //   setTimedPopup(true);
  //   //  },3000);
  //   setButtonPopup(true)
  //     }, []);

  return (
    <div className="sign-up">

    <h1>Sign Up</h1>
    <p>Enter Your Details To Register .</p>
 <form onSubmit= { handleSubmit (formSubmit)}>
         <Input 
          id="username"
          label="Username"
          type="text"
          placeholder="Enter username"
          register={{...register("username") }}
          errorMessage={errors.username?.message}
          
        />

         <Input 
         id="phoneNumber"
          label="PhoneNumber"
           type="text"
            placeholder="Enter phoneNumber"
             register={{...register("phoneNumber") }}
             errorMessage={errors.phoneNumber?.message}
          />
         <Input 
         id="email"
          label="Email"
           type="Email"
            placeholder="Enter Email"
             register={{...register("email") }}
             errorMessage={errors.email?.message}
          />
         <Input 
         id="password"
          label="Password"
           type="password"
            placeholder="Enter password"
             register={{...register("password") }}
             errorMessage={errors.password?.message}
          />
         <Input
          id="confirm password"
          label="Confirm Password"
           type="password"
            placeholder="Enter confirm password"
             register={{...register("confirmpassword") }}
             errorMessage={errors.confirmpassword?.message}
          />
           <button>Sign up</button>

           {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
  <h3>my Popup</h3>
 <p>this is my button triggered Popup</p>
 </Popup> */}

      
     </form>
       
 
     </div>
  );
}

export default App;

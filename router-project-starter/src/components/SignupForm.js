import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'



export const SignupForm = ({setIsLoggedIn}) => {

    

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }
    
        setIsLoggedIn(true);
        toast.success("Account Create");
        const accountData = {
          ...formData,
        };
        console.log(accountData);
    
        navigate("/dashboard");
      }


    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
                <button>
                    student
                </button>
                <button>
                    Instructor
                </button>
            </div>
            <br/>

            <form onSubmit={submitHandler}>

                <div className="flex gap-x-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name<sup className="text-pink-200">*</sup>
                        </p>
                        <input required type='text' name='firstname' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstname} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                    </label>
                    <label>
                        <p>
                            Last Name<sup className="text-pink-200">*</sup>
                        </p>
                        <input required type='text' name='lastname' onChange={changeHandler} placeholder='Enter last Name' value={formData.lastname} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                    </label>
                </div>

                <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-pink-200">*</sup>
                    </p>
                    <input required type='email' name='email' onChange={changeHandler} placeholder='Enter email address' value={formData.email} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                </label>


                <div>
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password<sup>*</sup>
                        </p>
                        <input required type={showPassword ? ("text") : ("password")} name='password' onChange={changeHandler} placeholder='Enter password' value={formData.password} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer z-10">
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>

                    <label htmlFor="" className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password<sup>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Enter confirm password'
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"  // Fix the value attribute
                        ></input>
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer z-10">
                            {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>

                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full"> 
                    Create Acoount
                </button>

            </form>
        </div>
    )
}

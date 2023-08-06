"use client"

import React, {ChangeEvent, useState} from "react";
import StudentLoginAction from "@/app/auth/login/student/action";
import toast, { Toaster } from "react-hot-toast";

const StudentLogin:React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isEmailValid = (email: string): boolean => {
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }
    
    const handleLogin = async () => {
        const loading = toast.loading("logging you in")

        if (email == "" && (toast.error("email cannot be empty", {id: loading}), true)) return
        if (password == "" && (toast.error("password cannot be empty", {id: loading}), true)) return
        if (!isEmailValid(email) && (toast.error("email is not valid", { id :loading}), true)) return
        

        await StudentLoginAction({email, password}) ? toast.success("success", {id: loading}) : toast.error("error", {id: loading})
    }
    
    return (
        <div className="w-full min-h-screen justify-center items-center flex bg-neutral-200">
            <Toaster />

            <div className="w-full max-w-lg  flex flex-col gap-10 p-10 bg-white rounded-2xl shadow-2xl">
                <div>
                    <h1 className="text-3xl font-bold">Login</h1>
                </div>
                <div className="flex flex-col gap-5">
                    {/* <label className="hidden" htmlFor="email">Email</label> */}
                    <input className="p-5 outline-none border-b-4 border-black focus:border-gray-300" placeholder="email" type="email" name="email" id="email" value={email} onChange={handleEmailChange} />                
                    {/* <label className="hidden" htmlFor="password">Password</label> */}
                    <input className="p-5 outline-none border-b-4 border-black focus:border-gray-300" placeholder="password" type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button className="p-5 bg-blue-500 rounded-xl shadow-xl w-full font-bold text-xl text-white hover:bg-blue-700 hover:shadow-2xl transition-all" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin
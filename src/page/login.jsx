import { Link } from "react-router";

export default function LoginPage(){
    return(
        <div className="w-full h-screen 
        bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 
        flex justify-center items-center">
            
            {/*logo */}
            <img src="/logo.png" alt="" className="w-200 inset-4"/>
            <div className="relative backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-8 w-[350px] ">

                
            {/*username input */}
                <input type="email" placeholder="Email" 
                className="w-full mb-4 px-4 py-3 rounded-xl 
                bg-white/80 border border-gray-300 
                focus:ring-2 focus:ring-blue-500 focus:outline-none" />

            {/*password input */}

                <input type="password" placeholder="Password" 
                className="w-full mb-4 px-4 py-3 rounded-xl 
                bg-white/80 border border-gray-300 
                focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            {/*forget passwor */}
                <p className="w-full flex justify-end mb-4">Froget Password ?<Link to="/rest passwor " className="text-sm text-black hover:underline cursor-pointer"> Reset</Link></p>
                {/*Login button */}
                <button className="w-full py-3 rounded-xl text-white font-semibold
                bg-gradient-to-r from-blue-500 to-cyan-500 
                hover:from-blue-600 hover:to-cyan-600
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-xl" > Login</button>

                <p className="mb-5 py-3 flex justify-center items-center text-xl f"> OR </p>
                
                {/*login with google button */}
                <button className="mb-4 w-full py-3 rounded-xl text-white font-semibold 
                 bg-white 
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-xl flex justify-center items-center gap-2"> 
                    <img src="/google logo.png" className="w-5 h-5"/>
                    <span className="font-medium text-gray-700">Login with Google</span>
                </button>
                {/*regiset*/}
                <p className="mb-4 w-full flex justify-end ">Don't have an account ?<Link to="/register " className="text-sm text-black hover:underline cursor-pointer">Register</Link></p>
            </div>
        </div>
    )
}
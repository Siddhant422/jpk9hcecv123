import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/userContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user");
  const [password, setPassword] = useState("user123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageIndex,setImageIndex] = useState(0);
  const imageArray = [
    "https://images.unsplash.com/photo-1502318217862-aa4e294ba657?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532278951723-545f655c97f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  useEffect(() => {
    if(imageIndex==4){
      setTimeout(() => {
        setImageIndex(0)
      },2000);
    }else{
      setTimeout(() => {
        setImageIndex(imageIndex+1);
      },2000)
    }
  },[imageIndex])

  const {login,user,setUser} = useContext(AuthContext);

  const handleLogin = async (e) => {
    if(!email || !password){
      alert('please fill all the fields')
    }
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`http://localhost:4000/login`,{username:email,password})
      if(response?.data?.data=="invalid"){
        throw new Error("Invalid username or password")
      }else{
        localStorage.setItem("tripToken",response?.data?.data)
        setUser(response?.data?.data);
        navigate('/home');
      }
    } catch (err) {
      console.log(err)
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row w-[100vw] h-screen justify-center items-center ">
      <div className="absolute z-[-1] lg:z-0  lg:relative w-[100vw] lg:w-[50vw] h-[100vh]">
        <img
          className="w-[100vw] lg:w-[50vw] h-[100vh] opacity-[0.8]"
          src={imageArray[imageIndex]}
        />
      </div>
      <div className="w-[100vw] text-[10vw] lg:text-[3.5vw] lg:w-[50vw] ml-auto flex flex-col justify-center items-center">
        <h1
          className="absolute top-0 mt-[2vw] text-white font-semibold lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-r lg:from-blue-500 lg:to-teal-300 mb-0"
          style={{ fontFamily: "cursive" }}
        >
          Tour Nest
        </h1>
        <p className="text-[5vw] text-center  lg:text-[1.1vw] w-[70%] mt-[20vw]  text-white lg:text-black lg:w-[25%] absolute top-0 lg:mt-[8vw]" style={{fontFamily:"cursive"}}> Where Every Trip is a New Story Waiting to Be Told – Dive Into the Extraordinary!</p>
        <div
          className="mt-[-5vh] lg:mt-0 w-[80vw] h-[30vh] lg:w-[35vw] lg:h-[15vw] flex flex-col justify-evenly lg:justify-around border-[2px] border-inset py-[2vw] px-[3vw] lg:px-[1.5vw] rounded-lg lg:rounded-md bg-[rgb(255,255,255,0.4)]"
        >
          <div className="flex flex-col cursor-default">
            <input
              className="border-[1px] h-[5vh] text-[3.5vw] px-[2vw] focus:outline-none rounded-lg lg:h-[2.5vw] lg:rounded-md border-solid border-inset lg:px-[0.5vw] py-[0.5vw] lg:text-[1vw] cursor-default"
              type="text"
              id="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col cursor-default">
            <input
              className="border-[1px] h-[5vh] text-[3.5vw] px-[2vw] focus:outline-none rounded-lg lg:h-[2.5vw] lg:rounded-md border-solid border-inset lg:px-[0.5vw] py-[0.5vw] lg:text-[1vw] cursor-default"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          {error && <div className="text-[2.5vw] lg:text-[1.2vw]">{error}</div>}
          <button
            type="submit"
            className="w-full text-[3.5vw] bg-green-500 rounded-md h-[5vh] lg:h-[2.5vw] text-white lg:text-[1.2vw]"
            disabled={loading}
            onClick={handleLogin}
          >
            <p className="w-full">{loading ? "Logging in..." : "Login"}</p>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 mb-[10vw] lg:mb-[4vw] lg:ml-[50%] bg-gray-200 w-[50%] h-[5vh] lg:w-[35%] lg:h-[4vw] flex items-center rounded-lg justify-center space-x-[4vw] mt-4">
            <a
              href="https://facebook.com/tournest"
              className="text-[3vw] lg:text-[1.2vw] text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com/tournest"
              className="text-[3vw] lg:text-[1.2vw] text-blue-400 hover:text-blue-600 transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com/tournest"
              className="text-[3vw] lg:text-[1.2vw] text-pink-600 hover:text-pink-800 transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
    </div>
  );
};

export default LoginPage;

import React from 'react'
import '../css/Navbar.css'
import Logo from '../assets/Logo.png'
import Tanmay from '../assets/Tanmay.jpg'
import {Link} from 'react-router-dom'
import {useRef, useState} from 'react'

const Navbar = ({setSidebar}) => {
  const[listening, setListening]=useState(false);
  const[text, setText]=useState("");
  const handleMicrophone=()=>{
    const useMicrophone= window.SpeechRecognition || window.webkitSpeechRecognition;
    let object_microphone= new useMicrophone();
    object_microphone.continuous=false;
    object_microphone.interimResults=true;
    object_microphone.lang="en-US";

    object_microphone.onresult=(event)=>{
      let transcript="";
      for(let i=event.resultIndex; i<event.results.length; i++){
        transcript+=event.results[i][0].transcript;
      }
      setText(transcript);
    }
    if(listening){
      object_microphone.stop();
      setListening(false);
    }else{
      object_microphone.start();
      setListening(true);
    }
  }
  
  const inputRef=useRef(null);
  const openFile=()=>{
    inputRef.current.click();
  }

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <span onClick={()=>setSidebar(prev=>prev===false? true:false)} className="pointer"><i class="fa-solid fa-bars"></i></span>
        <img src={Logo} alt="logo.png" />
      <Link to="/"><h1>ClipStream</h1></Link>
      </div>
      <div className="nav-middle">
        <form>
          <input type="text" placeholder="start typing here..." value={text} onChange={(e)=>setText(e.target.value)}/>
          <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
        <div className="microphone" onClick={handleMicrophone}><i class="fa-solid fa-microphone"></i></div>
      </div>
      <div className="nav-right">
        <div className="user-account" onClick={openFile}>
          <i class="fa-solid fa-plus"></i>
          <div className="create">create</div>
        </div>
        <input type="file" accept="video/*"  style={{ display: 'none' }} ref={inputRef}/>
        <div className="notification-bell"><i class="fa-solid fa-bell"></i></div>
        <img src={Tanmay} alt="user" className="user"/>
      </div>

    </div>
  )
}

export default Navbar

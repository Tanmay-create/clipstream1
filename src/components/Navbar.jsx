import React, { useRef, useState } from 'react';
import '../css/Navbar.css';
import Logo from '../assets/Logo.png';
import Tanmay from '../assets/Tanmay.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
  const [listening, setListening] = useState(false);
  const [text, setText] = useState('');
  const [profilePic, setProfilePic] = useState(Tanmay); // 👈 dynamic user profile state
  const inputRef = useRef(null);
  const profileInputRef = useRef(null);

  // 🎤 Microphone
  const handleMicrophone = () => {
    const useMicrophone = window.SpeechRecognition || window.webkitSpeechRecognition;
    let object_microphone = new useMicrophone();
    object_microphone.continuous = false;
    object_microphone.interimResults = true;
    object_microphone.lang = 'en-US';

    object_microphone.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setText(transcript);
    };

    if (listening) {
      object_microphone.stop();
      setListening(false);
    } else {
      object_microphone.start();
      setListening(true);
    }
  };

  // 📂 Video upload
  const openFile = () => {
    inputRef.current.click();
  };

  // 🧍 Profile picture change
  const handleProfileClick = () => {
    profileInputRef.current.click();
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const newProfileUrl = URL.createObjectURL(file);
      setProfilePic(newProfileUrl);
    } else {
      alert('Please select a valid image file!');
    }
  };

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <span
          onClick={() => setSidebar((prev) => !prev)}
          className="pointer"
        >
          <i className="fa-solid fa-bars"></i>
        </span>
        <img src={Logo} alt="logo.png" />
        <Link to="/">
          <h1>ClipStream</h1>
        </Link>
      </div>

      <div className="nav-middle">
        <form>
          <input
            type="text"
            placeholder="start typing here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
        <div className="microphone" onClick={handleMicrophone}>
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>

      <div className="nav-right">
        <div className="user-account" onClick={openFile}>
          <i className="fa-solid fa-plus"></i>
          <div className="create">create</div>
        </div>

        <input
          type="file"
          accept="video/*"
          style={{ display: 'none' }}
          ref={inputRef}
        />

        <div className="notification-bell">
          <i className="fa-solid fa-bell"></i>
        </div>

        {/*Clickable dynamic profile picture */}
        <img
          src={profilePic}
          alt="user"
          className="user pointer"
          onClick={handleProfileClick}
          title="Click to change profile picture"
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={profileInputRef}
          onChange={handleProfileChange}
        />
      </div>
    </div>
  );
};

export default Navbar;

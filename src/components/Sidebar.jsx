import React from 'react'
import '../css/Sidebar.css'
import Tanmay from '../assets/Tanmay.jpg'
const Sidebar = ({sidebar}) => {
  return (
      <div className={`sidebar ${sidebar?"":"reduce"}`}>
        <div className="home space shadow"><i class="fa-solid fa-house shadow2"></i>
        <span className={`${sidebar?"shadow2":"none"}`}>Home</span></div>
        
        <div className="history space shadow"><i class="fa-solid fa-notes-medical shadow2"></i><span className={`${sidebar?"shadow2":"none"}`}>history</span></div>
        <div className="liked-videos space shadow"><i class="fa-solid fa-thumbs-up shadow2"></i><span className={`${sidebar?"shadow2":"none"}`}>liked videos</span></div>
        <div className="downloads space shadow"><i class="fa-solid fa-download shadow2"></i><span className={`${sidebar?"shadow2":"none"}`}>downloads</span></div>

        <div className="watch-later space shadow"><i class="fa-solid fa-clock shadow2"></i><span className={`${sidebar?"shadow2":"none"}`}>watch later</span></div>
        <hr/>
        <div className={`account-1 space style ${sidebar? "":"round2"}`}><img src={Tanmay} alt="account-1" className="round"/><span className={`${sidebar?"":"none"}`}>Tanmay</span></div>
        
      </div>
  )
}

export default Sidebar

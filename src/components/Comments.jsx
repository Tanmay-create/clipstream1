import React from 'react'
import Tanmay from '../assets/Tanmay.jpg'
import '../css/Comments.css'
const Comments = () => {
  return (
    <div className="comment">
      <div className="left">
        <div className="img"><img src={Tanmay} alt="commenter" className="userstyle" /></div>
        <div className="commenter-details">
            <p className="username">@MissRealBolly <span>2 months ago</span></p>
            <p className="particulars">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi deserunt aliquid, ea pariatur dolores voluptates tempore fugit deleniti beatae. Adipisci eligendi ad sunt doloremque, sit ut earum est saepe.</p>
            <div className="rest">
            <div className="dislike-like">
            <div className="like">
              <i class="fa-solid fa-thumbs-up"></i>
              <span>3.2M</span>
            </div>
            <i class="fa-solid fa-thumbs-down"></i>
          </div>
          
         
            <span>Reply</span>
            </div>
        </div>
      </div>
      <div className="right">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  )
}

export default Comments

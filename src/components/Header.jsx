import React from "react";
import Avatar from "../assets/images/Avatar.png";
import Plus from "../assets/images/Plus.jpg";
import ImgWrite from "../assets/images/Write.jpg";
import { useState } from "react";

function Header() {
 
  const [name, setName] = useState("Bessie Coleman");
  const [title, setTitle] = useState("Civil Aviator");
   const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  const handleSave = () => {
    setIsEditing(false);
    // Here you can add logic to save the name and title if needed
  };

  return (
    <header className="Header">
      <img src={Avatar} className="AvatarImg" alt="avatar" />

      <div className="HeaderInfo">
        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="HeaderInput"
            />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="HeaderInput"
            />
          </>
        ) : (
          <>
            <h1 className="HeaderTitle" style={{ marginBottom: "0.5rem" }}>
              {name}
            </h1>
            <p style={{ marginBottom: "2rem" }}>{title}</p>
          </>
        )}
      

      <div className="HeaderButtons">
        
            <p  className="EditProfile">
              <span><img src={ImgWrite} className="WriteImg" alt="write"/></span>
              Edit Profile
        </p>  

        <button className="NewPostButton" onClick={handleToggleEdit}>
          <span>+</span>New Post
        </button>



        </div>
        </div>
    </header>
  );
}

export default Header;

import React from "react";
import Avatar from "../assets/images/Avatar.png";
import Plus from "../assets/images/Plus.jpg";
import ImgWrite from "../assets/images/Write.jpg";
import { useState } from "react";


function Header() {
  const [name, setName] = useState("Bessie Coleman");
  const [title, setTitle] = useState("Civil Aviator");
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleEdit = () => {
    setIsEdit(true);
    
  };

  const handleSave = () => {
    setIsEdit(false);
    
  };

  const handleNewPost = () => {
  };

  return (
    <header className="Header">
      <img src={Avatar} className="AvatarImg" alt="avatar" />

      <div className="HeaderInfo">
        {isEdit ? (
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
            <h1 className="HeaderTitle" >
              {name}
            </h1>
            <p> 
            {title} </p>
          </>
        )}

        <div className="HeaderButtons">
          {isEdit ? (
            <p className="EditProfile" onClick={handleSave}>
              <img src={ImgWrite} className="WriteImg" alt="edit profile" />
              Edit Profile
            </p>
          ) : (
            <p className="EditProfile" onClick={handleToggleEdit}>
              <img src={ImgWrite} className="WriteImg" alt="edit" />
              Edit Profile
            </p>
          )}

          <button className="NewPostButton" onClick={handleNewPost}>
            <span>+</span> New Post
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;


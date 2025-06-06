import React, { useState } from "react";


function LikeButton() {
  const [liked, setLike] = useState(false);
  const [animate, setAnimate] = useState(false);

const handleClick = () => {
    setLike(!liked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div
      onClick={handleClick}
      className={`HeartContainer ${animate ? "animate" : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "#e0245e" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={liked ? "#e0245e" : "currentColor"}
        className="HeartIcon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 8.25c0-2.9-2.35-5.25-5.25-5.25-1.75 0-3.29.88-4.25 2.25a5.25 5.25 0 00-4.25-2.25c-2.9 0-5.25 2.35-5.25 5.25 0 7.5 9.5 11.25 9.5 11.25s9.5-3.75 9.5-11.25z"
        />
      </svg>
    </div>
  );
}

export default LikeButton;

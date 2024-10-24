// https://react-icons.github.io/react-icons/
// npm i react-icons
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import car1 from "./assets/car.jpg";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import "./post.css";

function Post() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src="https://i.imgur.com/yXOvdOSs.jpg"
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
            <h3>Shehzad Iqbal</h3>
            <span>15 min ago</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima, non aperiam,
        praesentium impedit itaque enim fugit? Iure explicabo molestiae
        asperiores exercitationem minus.
      </p>
      <img src={car1} alt="post image" className="post-photo" id="my-id" />

      <div>
        <FcLike />
        <BiCommentDetail />
        <IoMdShareAlt />
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

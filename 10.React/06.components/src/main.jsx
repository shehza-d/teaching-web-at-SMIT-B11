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
import fruitImage from "./assets/fruits.avif";
import video from "./assets/my-video.mp4";

// component aasa function hy jo JSX return kare
function Post(Props) {
  console.log("props, ", Props);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={Props.profilePhoto}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
            <h3>{Props.name}</h3>
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

      {Props.postImage ? (
        <img
          src={Props.postImage}
          alt="post image"
          className="post-photo"
          id="my-id"
        />
      ) : null}

      {/* <video src={Props.postImage} height={400} width={400} muted autoPlay controls loop></video> */}

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
      <Post
        name="shehzad"
        postImage={fruitImage}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
      <Post
        name="shahab"
        postImage={car1}
        profilePhoto="https://i.imgur.com/yXOvdOSs.jpg"
      />
      <Post
        name="kabeer"
        // postImage={fruitImage}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
      <Post
        name="kaif"
        postImage={video}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
      <Post
        name="shokat"
        postImage={car1}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
      <Post
        name="shokat"
        postImage={car1}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
      <Post
        name="shokat"
        postImage={fruitImage}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
      <Post
        name="shokat"
        postImage={car1}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// time wala saruf kaberr kare ga
// kabeer/usama video bhi lagaye ga

// 10 post
// DP sab ma change hogyi
// user name sabma change hoga
// post ki image 5 ya 7
// description 5 se 7
// kisi ma img aur description dono
// kisi ma saruf description aur kisi ma saruf image

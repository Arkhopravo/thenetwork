import React from 'react'
import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    const { currentUser } = useContext(AuthContext);

    const handleLike = () => {
        
      };
    
      const handleDelete = () => {
       
      };

  return (
    <div className="post">
    <div className="container">
      <div className="user">
        <div className="userInfo">
          {/* <img src={"/upload/"+post.profilePic} alt="" /> */}
          <img src="https://e0.pxfuel.com/wallpapers/385/320/desktop-wallpaper-marvel-s-daredevil-phone-moviemania-daredevil-tv-daredevil-tv-series-daredevil-netflix-matt-murdock-thumbnail.jpg"/>
          <div className="details">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="name">{post.name}</span>
            </Link>
            <span className="date">{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && post.userId === currentUser.id && (
          <button onClick={handleDelete}>delete</button>
        )}
      </div>
      <div className="content">
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque facere expedita nemo reprehenderit quae quisquam odit atque ducimus minus.

        </p>
        <img src="images/wallpaperflare.com_wallpaper.jpg" alt="" />
        <img src="https://variety.com/wp-content/uploads/2023/03/MCDJOWI_LG042.jpg"/>
      </div>
      
      
      <div className="info">
        <div className="item">
          
            <FavoriteOutlinedIcon
              style={{ color: "red" }}
              onClick={handleLike}
            />
            {/* <FavoriteBorderOutlinedIcon onClick={handleLike} /> */}
           Likes
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon />
          See Comments
        </div>
        <div className="item">
          <ShareOutlinedIcon />
          Share
        </div>
      </div>
      {commentOpen && <Comments postId={post.id} />}
    </div>


    
  </div>
  )
}

export default Post
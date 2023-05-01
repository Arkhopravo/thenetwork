import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

//   const { isLoading, error, data } = useQuery(["comments"], () =>
//     makeRequest.get("/comments?postId=" + postId).then((res) => {
//       return res.data;
//     })
//   );

//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     (newComment) => {
//       return makeRequest.post("/comments", newComment);
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["comments"]);
//       },
//     }
//   );

  const handleClick = async (e) => {
    // e.preventDefault();
    // mutation.mutate({ desc, postId });
    // setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        {/* <img src={"/upload/" + currentUser.profilePic} alt="" /> */}
        <img src="https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/558524/KeanuReeves-2021_r.jpg" alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange=""
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {/* {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => ( */}
            <div className="comment">
              <img src="https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/558524/KeanuReeves-2021_r.jpg" alt="" />
              <div className="info">
                <span>Name</span>
                <p>Description</p>
              </div>
              <span className="date">
                {/* {moment(comment.createdAt).fromNow()} */}
              </span>
            </div>
          {/* ))} */}
    </div>
  );
};

export default Comments;
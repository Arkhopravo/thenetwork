import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

//   const { isLoading, error, data } = useQuery(["stories"], () =>
//     makeRequest.get("/stories").then((res) => {
//       return res.data;
//     })
//   );

//   //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
          <div className="story">
          {/* <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span> */}
        <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" alt="" />
        <span>Robert D. Jr.</span>
        <button>+</button>
          </div>
          <div className="story" key="">
              <img src="https://www.instyle.com/thmb/vxZC9GGdkpI0hAowrgwz3jrT0Ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/120716-Ryan-Reynolds-LEAD-2000-665fabe6164647af9ba659ab98a5c7ba.jpg" alt="" />
              <span>Rayn Raynolds</span>
            </div>
            <div className="story" key="">
              <img src="https://m.media-amazon.com/images/M/MV5BMTc5YjZlZjEtYzM1MC00ZmIwLWE0MzItNDcwOGYxYTJlMWNmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg" alt="" />
              <span>Dhanush</span>
            </div>
            <div className="story" key="">
              <img src="https://cdn.britannica.com/61/217461-050-93A0E3CB/Israeli-Gal-Gadot-2019.jpg" alt="" />
             
              <span>Gal Gadot</span>
            </div>
            <div className="story" key="">
              <img src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg" alt="" />
              <span>Tom Cruise</span>
            </div>
    </div>
  );
};

export default Stories;
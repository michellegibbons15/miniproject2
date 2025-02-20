import React from "react";
import surfaceIMG from "../../assets/community/surface.jpeg"
import "../../Styles/Community/MainContent.css"
import Social from "./Social";

const MainContent = () => {
  return (
    <>
      <div className="CommunityPicture">
        <img src={surfaceIMG} alt="Surfaces" />
      </div>
      <div>
        <Social/>
      </div>
    </>
  );
};

export default MainContent;

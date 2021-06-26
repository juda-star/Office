import React from "react";
import "./Home.css";
export default function Home() {
  const imageArray = [
    "https://www.ideasthefirm.com/wp-content/uploads/2019/09/office-1.png",
    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FpVg?ver=1c68&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
  ];
  return (
    <>
      <h1>Hiii Welcome To Your Web</h1>

      {imageArray.map((item) => {
        return <img src={item} alt="" />;
      })}
    </>
  );
}

import React from "react";
import Image from "./Image";
import "./Images.css";
export default function Images(props) {
  return <h1 className="results">Results for dog</h1>;
  {
    props.response.map(function (image, index) {
      return (
        <div key={index}>
          <Image image={image} />
        </div>
      );
    });
  }
}

import React from "react";

export default function Image(props) {
  return (
    <div>
      <img src={props.urls.regular} alt={props.alt_description} />
    </div>
  );
}

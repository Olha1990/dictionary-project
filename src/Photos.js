import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return <img alt="" src={photo.src.tiny} key={index} />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
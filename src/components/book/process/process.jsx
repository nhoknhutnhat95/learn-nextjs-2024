import React from "react";


export default function Process(props) {
  const { currentProcess, starPosition, starStatus, onStarClick } = props;

  

  return (
    <div>
      <button style={{zIndex:9999, position:'absolute', top:0, left: 0}}
        onClick={() => {
          if (onStarClick) {
            onStarClick()
          }
        }}
      >
        click
      </button>
    </div>
  );
}

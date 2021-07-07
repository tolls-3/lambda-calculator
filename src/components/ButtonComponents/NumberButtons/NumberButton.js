import React from "react";

const NumberButton = (props) => {
  const {number} = props;

  let buttonStyle = "small-button";
  if (props.number === '0') buttonStyle = "large-button";
  return (
    <>
      <button 
        className={buttonStyle} >
        {number}
      </button>
    </>
  );
};

export default NumberButton;

//     {/* Display a button element rendering the data being passed down from the parent container on props */}
//     {{number} === '0' 
//     <button className='numButtonBack' >{number}</button>
// }
import React from "react";

const CustomButton = (props) => {
  return (
    <button
      className={`text-lg px-3 py-2 rounded-lg flex items-center gap-[10px] ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;

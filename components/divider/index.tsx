import React from "react";

type DividerProps = {
  inverted?: boolean;
  className?: string;
};

const Divider: React.FC<DividerProps> = ({
  inverted = false,
  className = "",
}) => {
  const yPos = "bottom-0";
  const leftRotate = inverted ? "-rotate-1" : "rotate-1";
  const rightRotate = inverted ? "rotate-1" : "-rotate-1";
  const baseBar = `absolute ${yPos} h-[2px] w-[50%] bg-gray-600 z-40`;

  return (
    <div className="md:block hidden ">
      <div className={`${baseBar} left-0 ${leftRotate} ${className}`} />
      <div className={`${baseBar} right-0 ${rightRotate} ${className}`} />
    </div>
  );
};

export default Divider;

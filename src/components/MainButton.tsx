import React from "react";
import { Button } from "./ui/button";

type ButttonProps = {
  text: string;
  classname? : string
  onClick? : () => void;
};

const MainButton : React.FC<ButttonProps> = ({ text ,classname,onClick }) => {
  return (
    <Button 
    onClick={onClick}
    className={  ` ${classname} rounded-full px-8 py-5 text-sm font-medium  `}>
      {text}
    </Button>
  );
};

export default MainButton;

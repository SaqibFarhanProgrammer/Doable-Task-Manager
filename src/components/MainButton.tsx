import React from "react";
import { Button } from "./ui/button";

type ButttonProps = {
  text: string;
  classname : string
};

const MainButton : React.FC<ButttonProps> = ({ text ,classname }) => {
  return (
    <Button className={  ` ${classname} rounded-full px-8 py-5 text-sm font-medium  `}>
      {text}
    </Button>
  );
};

export default MainButton;

import React from "react";
import Input from "./input";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center p-2">Todo List</div>
      <div className="flex justify-center">
        <Input />
      </div>
    </div>
  );
};

export default Header;

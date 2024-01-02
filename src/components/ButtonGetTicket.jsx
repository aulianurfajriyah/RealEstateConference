import React from "react";
import { MoveRight } from "lucide-react";
import "../../src/index.css";

function ButtonGetTicket({ text }) {
  return (
    <button className="group justify-between flex grid-cols-2 w-[200px] font-manrope bg-black text-white p-2 rounded-full hover:bg-orange_bold hover:text-black transition-all duration-300 max-xs:w-full  ">
      <div className="flex justify-center self-center px-8 text-[12px] max-xs:w-full max-xs:px-0">
        {text}
      </div>
      <div className="rounded-full bg-white group-hover:bg-black w-[43px] h-[43px] flex items-center justify-center max-xs:w-[52px]">
        <MoveRight className="iconButton" />
      </div>
    </button>
  );
}

export default ButtonGetTicket;

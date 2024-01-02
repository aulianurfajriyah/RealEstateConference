import React from "react";
import { Instagram, MoveUpRight } from "lucide-react";
import { useState } from "react";

export function CardPhone({
  number,
  name,
  quote,
  instagram,
  bio,
  color,
  quoteColor,
}) {
  const dynamicBgColor = `bg-${color}`;
  const dynamicBgColorBack = `bg-${color}_bold`;

  const [bioVisible, setBioVisible] = useState(false);

  // Function to toggle the bio visibility
  const toggleBioVisibility = () => {
    setBioVisible(!bioVisible);
  };
  return (
    <div className="card relative h-[509px] w-[327px] overflow-hidden">
      <div
        className={`front grid content-between justify-items-center  h-[509px] w-[327px] ${dynamicBgColor} rounded-t-[25px] `}
      >
        <div className="content grid  p-7 w-full justify-items-start gap-3">
          <span className="number font-manrope">
            <span className="number font-bold">0{number} /</span>
            <span className="total"> 08</span>
          </span>
          <div className="w-full flex justify-between ">
            <div className="name font-manrope font-bold">{name}</div>
            <div onClick={toggleBioVisibility} className="flex">
              <p className="font-manrope underline decoration-black/50">
                View Bio
              </p>
              <MoveUpRight />
            </div>
          </div>

          <div className="description  overflow-hidden font-roxboroughmd text-[13px] text-center justify-self-center">
            <div
              className={` h-[120px] overflow-auto relative  ${
                bioVisible ? "z-0" : "z-10"
              }`}
            >
              {quote}
            </div>
            <div
              className={`  rotate-180 font-biz text-[200px] -mt-[300px] h-[10px]] -ml-[200px] ${quoteColor}`}
            >
              "
            </div>
          </div>
        </div>
        <img src={`/fig/sec5/${number}.png`} className="w-[90%]"></img>
      </div>

      <div
        className={`backCardPhone absolute grid content-between justify-items-center justify-center  w-[327px] ${dynamicBgColorBack} rounded-t-[25px] ${
          bioVisible ? "h-full" : "h-0"
        }`}
      >
        <div className="content grid m-8 justify-items-center gap-5">
          <span className="number font-manrope justify-self-start">
            <span className="number font-bold">0{number} /</span>
            <span className="total"> 08</span>
          </span>
          <div className="name w-full grid  justify-items-center gap-2">
            <div className="w-full flex justify-center ">
              <div onClick={toggleBioVisibility} className=" absolute left-7 ">
                <p className="font-manrope underline decoration-black/50">
                  Back
                </p>
              </div>
              <div className="name font-manrope font-bold">{name}</div>
            </div>

            <span className="instagram flex items-center gap-2">
              <Instagram size={16.5} />
              <span className="id text-[14px]">{instagram}</span>
            </span>
          </div>

          <div className=".dash-line border-t border-black h-[1px] w-full border-dashed"></div>
          <div className="bio grid gap-2">
            <span className=" font-manrope font-bold justify-self-start">
              Bio :
            </span>
            <div className="description font-roxboroughmd text-[13px] justify-self-start leading-7 h-[400px] overflow-auto  ">
              {bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

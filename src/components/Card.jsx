import React from "react";
import { Instagram } from "lucide-react";

export function Card({
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

  return (
    <div className="card relative h-[616px] w-[414px] overflow-hidden">
      <div
        className={`group front grid content-between justify-items-center  h-[616px] w-[414px] ${dynamicBgColor} rounded-t-[40px]`}
      >
        <div className="content grid  p-8 w-full justify-items-start gap-3">
          <span className="number font-manrope">
            <span className="number font-bold">0{number} /</span>
            <span className="total"> 08</span>
          </span>
          <span className="name font-manrope font-bold">{name}</span>
          <div className="description font-roxboroughmd text-[13px] text-center justify-self-center">
            <div className="quote relative z-10 ">{quote}</div>
            <div
              className={`rotate-180 font-biz absolute text-[200px] top-[-80px] h-[10px]] left-2 ${quoteColor}`}
            >
              "
            </div>
          </div>
        </div>
        <img src={`/fig/sec5/${number}.png`}></img>
      </div>

      <div
        className={`backCard absolute grid content-between justify-items-center justify-center h-[616px] w-[414px] ${dynamicBgColorBack} rounded-t-[40px] `}
      >
        <div className="content grid m-8 justify-items-center gap-5">
          <span className="number font-manrope justify-self-start">
            <span className="number font-bold">0{number} /</span>
            <span className="total"> 08</span>
          </span>
          <div className="name grid justify-items-center gap-2">
            <span className="name font-manrope font-bold">{name}</span>
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

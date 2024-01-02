import React from "react";
import { MoveLeft, MoveRight, Instagram } from "lucide-react";
import { Countdown } from "./components/Countdown";
import ButtonGetTicket from "./components/ButtonGetTicket";

import "./index.css";

import PauseOnHover from "./components/Slider";
import PauseOnHoverPhone from "./components/SliderPhone";

const App = () => (
  <div className="bg-background h-full w-screen">
    <div className="Hero grid grid-cols-2  gap-1 pl-[60px] max-xs:flex max-xs:p-0 max-xs:gap-0">
      <div className=" grid gap-2 justify-items-start max-xs:justify-items-center">
        <img
          src="/fig/sec1/logo.png"
          className="pt-[24px] w-[82px] max-xs:pt-0"
        ></img>
        <img
          src="/fig/sec1/Hero2.png"
          className="hidden max-xs:block justify-self-end"
        ></img>
        <h1 className="font-roxboroughmd text-[80px] leading-[110px] max-xs:text-[30px] max-xs:leading-[48px] max-xs:text-center max-xs:mx-[32px] max-xs:my-2">
          Get Real Estate Ready at Set to Soar 2024
        </h1>
        <div className="hidden max-xs:block pb-3">
          <Countdown />
        </div>
        <div className=" hidden .dash-line border-t border-black/50 h-[1px] w-[327px] py-3 border-dashed max-xs:block"></div>
        <div className="button max-xs:hidden ">
          <ButtonGetTicket text="GET TICKET" />
        </div>
      </div>
      <div className="">
        <img
          src="/fig/sec1/Hero.png"
          className="w-[553px] h-[639px] max-xs:hidden"
        ></img>
      </div>
    </div>

    <div className="Time-venue flex grid-cols-2 px-[60px] pt-10 text-[12px] max-xs:px-[24px] max-xs:pt-0">
      <div className="flex grid-cols-2 flex-initial  w-max gap-20 items-end max-xs:flex max-xs:items-start max-xs:gap-2 ">
        <div className="flex grid-cols-2 gap-20 max-xs:grid max-xs:grid-cols-1 max-xs:gap-5 ">
          <div className="grid gap-2">
            <p>TIME</p>
            <p className="font-bold">FEB 2, 2024</p>
          </div>
          <div className="grid gap-2">
            <p>VENUE</p>
            <p className="font-bold ">DOMAIN HOUSE, RICHMOND</p>
          </div>
        </div>

        <div className="grid gap-2 ">
          <p className="font-bold"> IN PERSON & VIRTUAL</p>
        </div>
      </div>
    </div>

    <div className="hidden button py-10 px-[24px] max-xs:block">
      <ButtonGetTicket text="GET TICKET" />
    </div>

    <div className="Line-Countdown flex grid-cols-2   justify-between pb-10 pr-12 pt-5 max-xs:py-8 max-xs:px-0">
      <div className="flex items-end ">
        <img src="/fig/sec3/Line.png" className="w-80% max-xs:w-full"></img>
      </div>
      <div className="max-xs:hidden">
        <Countdown />
      </div>
    </div>

    <div className="AboutEvent px-[60px] py-20 max-xs:px-[24px] max-xs:py-5">
      <div className="hidden max-xs:block grid-cols-5 px-[20px] justify-center pb-5">
        <div className="flex gap-3 justify-between">
          <div className="grid justify-items-center ">
            <p className="grid text-[40px] content-center font-roxboroughmd">
              10+
            </p>
            <span className="text- text-[12px]">Speakers</span>
          </div>
          <div className="flex self-center w-0.5 h-[30px] bg-black/50"></div>
          <div className="grid justify-items-center">
            <p className="grid text-[40px] content-center font-roxboroughmd">
              6
            </p>
            <span className="text- text-[12px]">Sessions</span>
          </div>
          <div className="flex self-center w-0.5 h-[30px] bg-black/50"></div>
          <div className="grid justify-items-center">
            <p className="grid text-[40px] content-center font-roxboroughmd">
              100+
            </p>
            <span className="text- text-[12px]">Attendees</span>
          </div>
        </div>
      </div>
      <div className="font-roxboroughmd text-5xl pb-12 max-xs:text-[20px] max-xs:py-5">
        About Event
      </div>
      <p className="hidden max-xs:block font-manrope text-[12px] leading-[24px]">
        Unveiling Set to Soar 2024: A trailblazing event featuring 10
        visionaries within and beyond real estate. S2S 2024: Set to Soar, is an
        inaugural independent real estate conference dedicated to your growth,
        grit, and goals—paving the way for your most prosperous journey into
        2024. It's a space where innovative ideas, strategic insights, and
        exciting activation converge. Join empowering speakers and industry
        professionals over one transformative day. Hosted by Domain House,
        Richmond showcasing a breathtaking backdrop of Melbourne, we welcome you
        to a day of inspiration, and evolution.
      </p>
      <div className="grid max-xs:hidden grid-cols-2 gap-20">
        <p className="font-manrope text-[15px] leading-7">
          Unveiling Set to Soar 2024: A trailblazing event featuring 10
          visionaries within and beyond real estate. S2S 2024: Set to Soar, is
          an inaugural independent real estate conference dedicated to your
          growth, grit, and goals—paving the way for your most prosperous
          journey into 2024. It's a space where innovative ideas, strategic
          insights, and exciting activation converge. Join empowering speakers
          and industry professionals over one transformative day. Hosted by
          Domain House, Richmond showcasing a breathtaking backdrop of
          Melbourne, we welcome you to a day of inspiration, and evolution.
        </p>
        <div className="flex  grid-cols-5 gap-8 justify-center">
          <div className="grid justify-items-center ">
            <p className="grid text-[100px] content-center font-roxboroughmd">
              10+
            </p>
            <span className="text-manrope">Speakers</span>
          </div>
          <div className="flex self-center w-0.5 h-[133px] bg-black/50"></div>
          <div className="grid justify-items-center">
            <p className="grid text-[100px] content-center font-roxboroughmd">
              6
            </p>
            <span className="text-manrope">Sessions</span>
          </div>
          <div className="flex self-center w-0.5 h-[133px] bg-black/50"></div>
          <div className="grid justify-items-center">
            <p className="grid text-[100px] content-center font-roxboroughmd">
              100+
            </p>
            <span className="text-manrope">Attendees</span>
          </div>
        </div>
      </div>
    </div>

    <div className="hidden max-xs:flex items-end py-5">
      <img src="/fig/sec3/Line.png" className="w-80% max-xs:w-full"></img>
    </div>

    <div className="OurSpeaker px-[60px] py-20 max-xs:px-[24px] max-xs:py-10">
      <div className="max-xs:hidden">
        <PauseOnHover />
      </div>
      <div className="hidden max-xs:block">
        <PauseOnHoverPhone />
      </div>
    </div>

    <div className="TicketAvailable px-[60px] py-20 w-full grid gap-10 max-xs:px-[24px] max-xs:py-10">
      <div className="border h-[14px] w-full bg-black"></div>
      <div className="content flex grid-cols-2 max-xs:grid-cols-1 w-full justify-between max-xs:grid max-xs:justify-items-center max-xs:gap-8">
        <div className="grid gap-4">
          <div className="font-roxboroughmd text-5xl max-xs:text-[20px]">
            Tickets available now
          </div>
          <div className="font-manrope max-xs:text-[12px]">
            Register now, limited spaces available
          </div>
        </div>
        <div className="button grid items-center max-xs:w-[200px]">
          <ButtonGetTicket text="GET TICKET" />
        </div>
      </div>
      <div className="border h-[14px] bg-black"></div>
    </div>

    <div className="SponsorPartner py-20 max-xs:p-0">
      <div class="Sponsor bg-blue  grid  grid-flow-row grid-cols-6 justify-items-center items-center  max-xs:grid-cols-2 max-xs:gap-4 max-xs:pb-10">
        <div class="row-span-2 bg-blue_bold font-roxboroughmd h-[250px] w-full justify-items-center items-center grid max-xs:col-span-2 max-xs:h-[124px]">
          Sponsors
        </div>
        <img src="/fig/sec7/sponsor/1.png" />
        <img src="/fig/sec7/sponsor/2.png" />
        <img src="/fig/sec7/sponsor/3.png" />
        <img src="/fig/sec7/sponsor/4.png" />
        <img src="/fig/sec7/sponsor/5.png" />
        <img src="/fig/sec7/sponsor/1.png" />
        <img src="/fig/sec7/sponsor/2.png" />
        <img src="/fig/sec7/sponsor/3.png" />
        <img src="/fig/sec7/sponsor/4.png" />
        <img src="/fig/sec7/sponsor/5.png" />
      </div>
      <div class="Partner bg-orange  grid  grid-flow-row grid-cols-6 justify-items-center items-center  max-xs:grid-cols-2 max-xs:gap-4 max-xs:pb-10">
        <div class="row-span-2 bg-orange_bold font-roxboroughmd h-[250px] w-full justify-items-center items-center grid max-xs:col-span-2 max-xs:h-[124px]">
          Partners
        </div>
        <img src="/fig/sec7/partner/1.png" className="row-span-2" />
        <img src="/fig/sec7/partner/2.png" className="row-span-2" />
        <img src="/fig/sec7/partner/3.png" className="row-span-2" />
        <img src="/fig/sec7/partner/4.png" className="row-span-2" />
        <img src="/fig/sec7/partner/5.png" className="row-span-2" />
      </div>
    </div>

    <div className="hidden button py-10 px-[24px] max-xs:block">
      <ButtonGetTicket text="PURCHASE TICKET" />
    </div>

    <div className="Footer px-[60px] pb-20 max-xs:px-[24px]">
      <div className="logo flex grid-cols-2 items-center gap-[200px] max-xs:grid max-xs:gap-0 max-xs:grid-cols-1 max-xs:justify-items-center">
        <img src="/fig/sec8/logo.png" className="w-[164px] " alt="" />
        <div className=" hidden .dash-line border-t border-black/50 h-[1px] w-[327px]  border-dashed max-xs:block"></div>
        <div className="flex grid-cols-3 flex-initial  w-max gap-20 items-end text-[12px] max-xs:hidden">
          <div className="grid gap-2">
            <p>TIME</p>
            <p className="font-bold">FEB 2, 2024</p>
          </div>
          <div className="grid gap-2">
            <p>VENUE</p>
            <p className="font-bold">DOMAIN HOUSE, RICHMOND</p>
          </div>
        </div>
      </div>
      <div className="End font-manrope flex grid-cols-2 py-10 justify-between">
        <p className="copyright  pl-3 text-[13px] font-bold max-xs:hidden">
          COPYRIGHT 2023 | MADE WITH ❤️ | ALL RIGHTS RESERVED | NASIR AMIN
        </p>
        <div className="hidden text-[12px] max-xs:block">
          <div className="grid gap-2">
            <p>TIME</p>
            <p className="font-bold pb-5">FEB 2, 2024</p>
          </div>
          <div className="grid gap-2">
            <p>VENUE</p>
            <p className="font-bold">DOMAIN HOUSE, RICHMOND</p>
          </div>
        </div>
        <div className="socialmedia flex underline gap-8 max-xs:grid max-xs:text-[18px] max-xs:justify-items-end">
          <p className="" href="">
            1 800 557 1445
          </p>
          <p className="" href="">
            EMAIL
          </p>
          <p className="" href="">
            PRIVACY
          </p>
          <p className="" href="">
            TERMS
          </p>
          <p className="" href="">
            LINKEDIN
          </p>
          <p className="" href="">
            INSTAGRAM
          </p>
        </div>
      </div>
      <p className="hidden copyright  py-10 text-[10px] font-bold max-xs:flex max-xs:justify-center">
        COPYRIGHT 2023 | MADE WITH ❤️ | ALL RIGHTS RESERVED
      </p>
    </div>

    <div className="bg-pink">
      <div className="bg-pink_bold"></div>
      <div className="bg-green"></div>
      <div className="bg-green_bold"></div>
    </div>
  </div>
);

export default App;

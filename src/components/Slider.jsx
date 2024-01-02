import React, { Component } from "react";
import { MoveLeft, MoveRight, Instagram } from "lucide-react";
import Slider from "react-slick";
import { Card } from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      slidesToShow: 2,
    };

    window.addEventListener("resize", this.updateSlidesToShow);
  }

  componentDidMount() {
    // Set the initial state based on the window size
    this.updateSlidesToShow();
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("resize", this.updateSlidesToShow);
  }

  updateSlidesToShow = () => {
    // Update the number of slides to show based on the window width
    const isSmallScreen = window.innerWidth <= 400; // Adjust the breakpoint as needed
    this.setState({
      slidesToShow: isSmallScreen ? 1 : 2,
    });
  };

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const { slidesToShow } = this.state;
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="">
        <div className="flex gap-3 ">
          <div className="w-1/3 grid content-between justify-items-end ">
            <div className="">
              <div className="title font-roxboroughmd text-5xl pb-12 max-xs:text-[20px]">
                Our Speakers
              </div>
              <p className="font-manrope text-[15px] leading-7 w-4/5 max-xs:text-[12px]">
                Unleash your potential in 2024 with Visionaries and Industry
                Professionals at annual Set to Soar Real Estate Conference
              </p>
            </div>
            <div className="button-swipe flex gap-2 mr-10 max-xs:hidden">
              <button
                onClick={this.previous}
                className="button group rounded-full border-[1px] border-black hover:bg-black w-[43px] h-[43px] flex items-center justify-center"
              >
                <MoveLeft className="iconButton" />
              </button>
              <button
                onClick={this.next}
                className="button group rounded-full border-[1px] border-black hover:bg-black w-[43px] h-[43px] flex items-center justify-center"
              >
                <MoveRight className="iconButton" />
              </button>
            </div>
          </div>
          <div className="w-2/3">
            <Slider ref={(c) => (this.slider = c)} {...settings} className="">
              <Card
                color="blue"
                quoteColor="text-blue_bold/80"
                number="1"
                name="ADRIAN BUTERA"
                quote="This business is all about people. Connecting with them, understanding them. Being honest and transparent with them. We are interacting with people as they make the biggest financial decision of their lives. It’s important to be empathetic and authentic"
                instagram="adrianbutera"
                bio="As the company director of Compton Green, Adrian takes a hands-on approach across all departments, including residential, commercial and enterprise. With over a 3-decade long career in real estate, Adrian has been at the forefront of industry change ever since. As one of the country’s leading auctioneers, Adrian possesses a wealth of industry knowledge, a passion for communication and an extensive network of contacts. Adrian has worked alongside a range of organisations from diverse sectors, including private, corporate and Government. Before embarking on his career at Compton Green, Adrian was the senior vice president of the REIV and the founder of the Young Agent’s Chapter."
              />
              <Card
                color="pink"
                quoteColor="text-pink_bold/80"
                number="2"
                name="STEFANIE DOBRO"
                quote="Wating on Quotes"
                instagram="stefaniedobro"
                bio="Stefanie Dobro is the Director of White House Property Partners in WA, a multi-award-winning REIWA agent and Real Estate Results Network (RERN) hall of fame recipient. Dobro is widely regarded as one of the State’s most trusted agents, she been serving the East Fremantle and greater Fremantle community for more than a decade as a trusted advisor in all thing’s property. Consistently ranked amongst the top agents in the Fremantle area, Stefanie achieves outstanding and even record-breaking results, always striving to accomplish premium selling prices for her clients"
              />
              <Card
                color="orange"
                quoteColor="text-orange_bold/80"
                number="3"
                name="MAZ FARRELLY"
                quote="It is not my job to be interested - it is your job to be interesting.”"
                instagram="absolutelyfarrelly"
                bio="Maz has been to more showbiz parties than George Clooney’s knickers, worked with more famous people than a plastic surgeon in Beverly Hills, and shimmied down more red carpets than a Dyson vacuum. Her contacts read like the toilet queue at the Oscars, and her loo is packed full of international awards - BAFTAS, Logies, Astras, Royal Television Society Awards, National Comedy Awards, a Bronze Rose De Montreux, the works. Maz has been the ‘CEO’ of the biggest TV shows in the world, with the biggest teams, budgets, audiences and superstars - five series of Big Brother, The X Factor, The Farmer Wants A Wife, The Celebrity Apprentice, Dancing with the Stars and she is the co-creator of the long standing, ABC current affairs show, Q&A. Her content has been engaged with more than eight BILLION times, and she once produced an event that created so much social traffic, she broke Twitter (X). Deliberately. Now Maz Speaks, and she’s on a personal mission to help smart people and ambitious corporations like yours, think like TV producers, strategically and critically, so you engage and deliver your story with the impact of a large cement fist in a soft cashmere glove. Mark Bouris describes Maz as a ‘genius with people’ and says she offers ‘a service every business really needs.’ She likes Mark.
        If you want every element of your business to have The X Factor, Maz can help. She made the show. And won a Logie for it."
              />
              <Card
                color="green"
                quoteColor="text-green_bold/80"
                number="4"
                name="LANARD COPELAND"
                quote="Wating on Quotes"
                instagram="lanardcop"
                bio="Lanard Copeland, an analyst for The Overtime on ESPN and the NBL, is a basketball luminary with roots tracing back to Atlanta, Georgia (USA). His basketball journey began with a childhood passion that intensified after facing rejection from his high-school team. Undeterred, Copeland's resilience led him to a pivotal moment in 1985 when he secured a scholarship to Georgia State University before going undrafted in the 1989 NBA, he then later signed as a free agent with the Philadelphia 76ers. In 1991 Copeland was signed with the LA Clippers continuing his commitment and stardom. His impressive career spans 532 games, where he left an indelible mark on the court, achieving 10,735 points (4th all-time) and 1,242 three-pointers (4th all-time). At 26, Copeland made a significant move to Australia, where his dedication to the game earned a well-deserved place in the Australian Basketball Hall of Fame. Beyond his playing days, Copeland serves as a mentor to emerging talents, a Big V coach in Victoria and assistant coach for the Sydney Kings. With an illustrious past and commitment to the sport, Lanard Copeland continues to inspire and shape the future of basketball in Australia"
              />
              <Card
                color="blue"
                quoteColor="text-blue_bold/80"
                number="5"
                name="ZOE MACFARLANE"
                quote="Guess what? The secret to peace in your life is getting comfortable in NOT knowing what’s around the corner. To not needing to micromanage your life like a Sgt Major. To being free to follow unusual opportunities and inspiring new paths as they arise even if they don't match with 'the plan'. To find joy in life's bumps (sometimes after the event, though, let's be real). To recognise that everything that occurs you didn’t plan for offers you a lesson or a level up"
                instagram="zoemacenergy"
                bio="Unleash your potential with manifestation expert and coach Zoe Mac in her dynamic 7 Steps to Manifestation workshop. You'll learn the tools, habits, and mindset shifts for lasting change across all areas of your life. Fun, informative, and inspirational, you'll leave feeling excited, motivated, and set to soar to make your dreams a reality."
              />
              <Card
                color="pink"
                quoteColor="text-pink_bold/80"
                number="6"
                name="ANNALISE NEWELL"
                quote="I’ve always had a keen interest in architecture and design and paired with extensive sales experience became the perfect storm for an amazing career in real estate"
                instagram=""
                bio="Annalise Newell is a Partner at Nelson Alexander, Ivanhoe. Analise has been assisting her clients achieve their property goals since 2009 and is one of the most respected & successful agents in the Banyule region. Extremely personable, well-connected and results-driven, Annalise is also a highly-skilled negotiator, revered property professional and without question one of Banyule’s leading female agents resulting in huge repeat business and referrals from her growing cohort of satisfied clients.From junior assistant and novice auctioneer finalist in 2010 to today being Partner at Nelson Alexander, a leading sales agent, in-demand auctioneer and mother of two, Annalise is living proof that the rewards of family and work can be enjoyed simultaneously."
              />
              <Card
                color="orange"
                quoteColor="text-orange_bold/80"
                number="7"
                name="MAL JAMES"
                quote="I’ve always had a keen interest in architecture and design and paired with extensive sales experience became the perfect storm for an amazing career in real estate"
                instagram="maljames_"
                bio="Mal James is the Director of James Buy Sell and More Child Surgeries. With more than 20 years of experience achieving standout results in all market conditions, James Buy Sell advocates on behalf of buyers of property over $1 million. Mal writes weekly auction reports, advice and in-depth market analysis on his website"
              />
              <Card
                color="green"
                quoteColor="text-green_bold/80"
                number="8"
                name="ZALI REYNOLDS"
                quote="We’re a boutique brand with a unique approach to selling homes in the new digital age. We also want to give back and aim to build 100 homes for those less fortunate through our partnership with Global Village Housing.”"
                instagram="zalireynolds"
                bio="Zali Reynolds is the Director of Shelter Real Estate, a tea cup collector and lover of the colour pink. A top producing agent with years of market insight, evidenced with decades of multi-million dollars’ worth of sales, an auctioneer skillset and a clear understanding of the emotional and financial demands of any real estate transaction, Zali comes to owning her own agency organically, as she has always been a neighbourhood specialist in Boroondara and Stonnington, was previously a partner & director at leading luxury estate agencies and has numerous accolades for her work in her real estate region. Her dedication to community partnerships, philanthropic pursuits through Global Village Housing and the devotion she has to her family shows Zali’s conscious commitment to helping others actualise their ambitions alongside her own."
              />
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

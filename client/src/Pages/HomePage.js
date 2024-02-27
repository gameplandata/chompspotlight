import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useCallback } from "react";
import Header from "../Components/Header";


const HomePage = () => {

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);


  const onLoginText2Click = useCallback(() => {
    // Please sync "Login" to the project

  }, []);

  const onSecondayContainerClick = useCallback(() => {
    // Please sync "Feed" to the project
  }, []);


  // Handler to navigate to Page1
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start pt-18 box-border text-center text-4xl text-black font-serif">
      <Header />
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[8vh] relative gap-] text-[0.89rem]">
        <div className="flex-1">
          <img src='vb.png' alt="logo" className="rounded-full shadow-lg" />
        </div>
        <div className="self-stretch flex-1 flex-row items-center justify-center p-[8vh] relative gap-] z-[2] text-[0.89rem]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] z-[0] pt-[8vh]">
            <b className="relative text-[2.22rem] leading-[2.67rem] inline-block w-[28.89rem]">
              Find the Perfect Sponsorship for Your Collegiate Sports Journey
            </b>
            <div className="relative leading-[1.33rem] inline-block w-[28.89rem] text-base ">
              Built for collegiate women athletes to connect with sponsors and
              secure NIL deals to support your athletic career.
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.67rem]">
              <button
                class="rounded-lg flex flex-col items-center justify-center p-[0.67rem] cursor-pointer border-[1px] border-solid border-black hover:bg-blue-700"
                onClick={onSecondayContainerClick}
              >
                <div className="relative leading-[1.33rem] font-medium inline-block w-[9rem]">
                  View Feed
                </div>
              </button>
              <button
                class="rounded-lg flex flex-col items-center justify-center p-[0.67rem] cursor-pointer border-[1px] border-solid border-black hover:bg-blue-700"
                onClick={onSecondayContainerClick}
              >
                <div className="relative leading-[1.33rem] font-medium inline-block w-[9rem] ">
                  Create Athlete Profile
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src='track.jpg' alt="logo" className="rounded-full shadow-lg" />
        </div>
        <img
          className="absolute my-0 mx-[!important] w-full right-[0rem] bottom-[-0.03rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-200.svg"
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[3.33rem] relative gap-[3.33rem] z-[4] text-[0.89rem]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] z-[0]">
          <b className="relative text-[2.22rem] leading-[2.67rem] inline-block w-[28.89rem]">
            How It Works
          </b>
          <div className="relative leading-[1.33rem] inline-block w-[28.89rem] text-base">
            Join our platform, create your athlete profile, and start connecting
            with sponsors today!
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[3.33rem] relative gap-[3.33rem] z-[5] text-[0.89rem]">
            <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
              {/* <!--First item--> */}
              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  {/* <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div> */}
                  <div className="relative mr-3 md:mr-0">
                    <div className="absolute -left-1 w-0 h-0 border-3 border-transparent border-right-[9px] border-black md:left-0"></div>
                  </div>
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-400">
                    1st step
                  </p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Create Profile
                  </h4>
                  <p className="mb-3 text-black text-base leading-10">
                    Fill out your athlete profile with your sports achievements,
                    goals, and interests.
                  </p>
                </div>
              </li>
              {/* <!--Second item--> */}
              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-400">
                    2nd step
                  </p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Explore Opportunities
                  </h4>
                  <p className="mb-3 text-black text-base leading-10">
                    Browse through various sponsorship opportunities based on
                    your sports and preferred brands.
                  </p>
                </div>
              </li>
              {/* <!--Third item--> */}
              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-400">
                    3rd step
                  </p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Post to Feed
                  </h4>
                  <p className="mb-3 text-black text-base leading-10">
                    Communicate with sponsors, share your story, and negotiate NIL deals.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-400">
                    4th step
                  </p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Connect with Sponsors
                  </h4>
                  <p className="mb-3 text-black text-base leading-10">
                    Communicate with sponsors, share your story, and negotiate NIL deals.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] w-full right-[0rem] bottom-[-0.03rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-200.svg"
        />
      </div>
      <div className="w-[80rem] overflow-hidden flex flex-row items-center justify-center p-[3.33rem] box-border relative gap-[3.33rem] z-[3]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] z-[0]">
          <b className="relative leading-[2.67rem] inline-block w-[28.89rem]">
            Get to know our Athletes
          </b>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[1.11rem] px-[0rem] gap-[2.22rem] text-[0.67rem]">


            <div className="flex-1 rounded-md overflow-hidden flex flex-col items-center justify-start text-left border-[1px] border-solid border-gray-200">
              <div className="self-stretch h-[18.89rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative bg-[url('/public/image@3x.png')] bg-contain bg-no-repeat bg-center">
                  <div className="absolute top-[0rem] left-[0rem] rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none bg-gray-300 flex flex-col items-center justify-center py-[0.22rem] px-[0.44rem] text-left">
                    <div className="relative leading-[0.89rem] font-medium">
                      Basketball
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-[0.67rem] gap-[0.22rem] text-[0.89rem]">
                <div className="self-stretch relative leading-[1.33rem]">
                  Aliyah Matharu
                </div>
                <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.56rem] shrink-0">
                  Leading Scorer Averaging 18.3 ppg
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.44rem] text-center">
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    💰
                  </div>
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    ❤️
                  </div>
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    📍
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md overflow-hidden flex flex-col items-center justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch h-[18.89rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative bg-[url('/public/natalie.jpg')] bg-contain bg-no-repeat bg-center">
                  <div className="absolute top-[0rem] left-[0rem] rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none bg-gray-300 flex flex-col items-center justify-center py-[0.22rem] px-[0.44rem] text-left">
                    <div className="relative leading-[0.89rem] font-medium">
                      Softball
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-[0.67rem] gap-[0.22rem] text-left text-[0.89rem]">
                <div className="self-stretch relative leading-[1.33rem]">
                  Natalie Lugo
                </div>
                <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.56rem] shrink-0">
                  2021 SEC Pitcher of the Week
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.44rem] text-center">
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    💰
                  </div>
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    ❤️
                  </div>
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    📍
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md overflow-hidden flex flex-col items-center justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch h-[18.89rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative bg-[url('/public/megan.jpg')] bg-contain bg-no-repeat bg-center">
                  <div className="absolute top-[0rem] left-[0rem] rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none bg-gray-300 flex flex-col items-center justify-center py-[0.22rem] px-[0.44rem] text-left">
                    <div className="relative leading-[0.89rem] font-medium">
                      Soccer
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-[0.67rem] gap-[0.22rem] text-left text-[0.89rem]">
                <div className="self-stretch relative leading-[1.33rem]">
                  Megan Hinnenkamp
                </div>
                <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.56rem] shrink-0">
                2023 All-SEC Second Team
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.44rem] text-center">
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    💰
                  </div>
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    ❤️
                  </div>
                  <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                    📍
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] w-full right-[0rem] bottom-[-0.03rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-200.svg"
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[3.33rem] relative gap-[3.33rem] z-[5] text-left">
        <div className="flex-1 flex flex-col items-start justify-start z-[0] px-[5rem]">
          <b className="self-stretch relative leading-[2.67rem]">
            Athletes Love Us
          </b>
        </div>
        <div className="flex-2 flex flex-row items-center justify-center gap-[2.22rem] z-[1] text-[0.89rem]">
          <div className="flex-1 rounded-md bg-gray-300 overflow-hidden flex flex-col items-center justify-center p-[0.89rem] gap-[0.89rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.22rem] text-[0.78rem]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[0.44rem]">
                <div className="relative rounded-13xl bg-gray-200 w-[1.78rem] h-[1.78rem] overflow-hidden shrink-0" />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[1.11rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.11rem] shrink-0">
                    Alexandra Johnson
                  </div>
                </div>
              </div>
              <img
                className="relative w-[3.24rem] h-[0.54rem]"
                alt=""
                src="/frame-427318817.svg"
              />
            </div>
            <div className="self-stretch relative leading-[1.33rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Thanks to Women's Sports Connect, I found an amazing sponsorship
              opportunity that has greatly supported my athletic journey.
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.44rem] text-center">
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                🌟
              </div>
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                👍
              </div>
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                🗨️
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-md bg-gray-300 overflow-hidden flex flex-col items-center justify-center p-[0.89rem] gap-[0.89rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.22rem] text-[0.78rem]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[0.44rem]">
                <div className="relative rounded-13xl bg-gray-200 w-[1.78rem] h-[1.78rem] overflow-hidden shrink-0" />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[1.11rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.11rem] shrink-0">
                    Alexandra Johnson
                  </div>
                </div>
              </div>
              <img
                className="relative w-[3.24rem] h-[0.54rem]"
                alt=""
                src="/frame-427318817.svg"
              />
            </div>
            <div className="self-stretch relative leading-[1.33rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Thanks to Women's Sports Connect, I found an amazing sponsorship
              opportunity that has greatly supported my athletic journey.
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.44rem] text-center">
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                🌟
              </div>
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                👍
              </div>
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                🗨️
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-md bg-gray-300 overflow-hidden flex flex-col items-center justify-center p-[0.89rem] gap-[0.89rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.22rem] text-[0.78rem]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[0.44rem]">
                <div className="relative rounded-13xl bg-gray-200 w-[1.78rem] h-[1.78rem] overflow-hidden shrink-0" />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[1.11rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.11rem] shrink-0">
                    Emily Thompson
                  </div>
                </div>
              </div>
              <img
                className="relative w-[3.24rem] h-[0.54rem]"
                alt=""
                src="/frame-427318817.svg"
              />
            </div>
            <div className="self-stretch relative leading-[1.33rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              I highly recommend this platform to all collegiate women athletes
              looking for valuable sponsorships and NIL deals.
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.44rem] text-center">
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                🌟
              </div>
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                👍
              </div>
              <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                🗨️
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] w-full right-[0rem] bottom-[-0.03rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2]"
          alt=""
          src="/vector-200.svg"
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center p-[3.33rem] relative gap-[3.33rem] z-[6] text-[0.89rem]">
        <b className="relative text-[2.22rem] leading-[2.67rem] inline-block">
          How we are different
        </b>
        <div className="relative leading-[1.33rem] text-lg inline-block">
          Our mission is to provide collegiate
          <b className="[text-decoration:underline]"> women </b>
          athletes with a platform to connect with sponsors.
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-x-24">
          <img className="relative rounded-81xl bg-gray-200  h-[5rem]" src="canes.png" />
          <img className="relative rounded-81xl bg-gray-200  h-[5rem]" src="wawa.png" />
          <img className="relative rounded-81xl bg-gray-200  h-[5rem]" src="gnv.png" />
          <img className="relative rounded-81xl bg-gray-200  h-[5rem]" src="wellsfargo.jpg" />

        </div>
        <div className="self-stretch flex items-center justify-center text-xl mx-52">
          We put the athlete first and want to facilitate interactions with
          sponsors to uncover an athlete’s personality, interests, and values to
          get to know them better before entering into an agreement.
        </div>
      </div>

    </div>
  );
};


export default HomePage;

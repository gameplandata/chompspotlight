import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useCallback } from "react";


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
    <div className="relative bg-white w-full flex flex-col items-center justify-start pt-[4.44rem] px-[0rem] pb-[0rem] box-border text-center text-[2.22rem] text-black font-roboto">
      <div className="my-0 mx-[!important] absolute w-full top-[0rem] right-[0rem] left-[0rem] bg-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.12)] h-[4.44rem] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[1.11rem] box-border gap-[1.11rem] z-[0] text-left text-[1.56rem]">
        <div className="relative rounded-81xl bg-gray-200 w-[2.22rem] h-[2.22rem]" />
        <div className="flex-1 relative leading-[2rem] font-medium">
          Chomp Spotlight
        </div>
        <div className="rounded-md box-border w-[37.06rem] flex flex-row items-center justify-end p-[0.44rem] gap-[0.22rem] text-[0.78rem] text-gray-100 border-[1px] border-solid border-gray-200">
          <div className="flex-1 relative leading-[1.11rem]">
            Search in site
          </div>
          <img
            className="relative w-[1.11rem] h-[1.11rem]"
            alt=""
            src="/icsearch.svg"
          />
        </div>
        <div className="bg-white flex flex-row items-center justify-center gap-[2.22rem] text-[0.89rem]">
          <div className="relative leading-[1.33rem]">Home</div>
          <div className="relative leading-[1.33rem]">Athletes</div>
          <div className="relative leading-[1.33rem]">Sponsors</div>
          <div
            className="relative leading-[1.33rem] cursor-pointer"
            onClick={onLoginTextClick}
          >
            Login
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute w-full top-[0rem] right-[0rem] left-[0rem] bg-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.12)] h-[4.44rem] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[1.11rem] box-border gap-[1.11rem] z-[1] text-left text-[1.56rem]">
        <div className="relative rounded-81xl bg-gray-200 w-[2.22rem] h-[2.22rem]" />
        <div className="flex-1 relative leading-[2rem] font-medium">
          Chomp Spotlight
        </div>
        <div className="rounded-md box-border w-[37.06rem] flex flex-row items-center justify-end p-[0.44rem] gap-[0.22rem] text-[0.78rem] text-gray-100 border-[1px] border-solid border-gray-200">
          <div className="flex-1 relative leading-[1.11rem]">
            Search in site
          </div>
          <img
            className="relative w-[1.11rem] h-[1.11rem]"
            alt=""
            src="/icsearch.svg"
          />
        </div>
        <div className="bg-white flex flex-row items-center justify-center gap-[2.22rem] text-[0.89rem]">
          <div className="relative leading-[1.33rem]">Home</div>
          <div className="relative leading-[1.33rem]">Athletes</div>
          <div className="relative leading-[1.33rem]">Sponsors</div>
          <div
            className="relative leading-[1.33rem] cursor-pointer"
            onClick={onLoginText2Click}
          >
            Login
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[3.33rem] relative gap-[3.33rem] z-[2] text-[0.89rem]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] z-[0]">
          <b className="relative text-[2.22rem] leading-[2.67rem] inline-block w-[28.89rem]">
            Find the Perfect Sponsorship for Your Collegiate Sports Journey
          </b>
          <div className="relative leading-[1.33rem] inline-block w-[28.89rem]">
            Built for collegiate women athletes to connect with sponsors and
            secure NIL deals to support your athletic career.
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.67rem]">
            <div
              className="rounded-lg flex flex-col items-center justify-center p-[0.67rem] cursor-pointer border-[1px] border-solid border-black"
              onClick={onSecondayContainerClick}
            >
              <div className="relative leading-[1.33rem] font-medium inline-block w-[7.39rem]">
                View Feed
              </div>
            </div>
            <div className="rounded-lg bg-darkblue w-[10rem] flex flex-col items-center justify-center p-[0.67rem] box-border text-left text-white">
              <div className="relative leading-[1.33rem] font-medium">
                Create Athlete Profile
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
      <div className="w-[69.22rem] overflow-hidden flex flex-row items-center justify-center p-[3.33rem] box-border relative gap-[3.33rem] z-[3]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] z-[0]">
          <b className="relative leading-[2.67rem] inline-block w-[28.89rem]">
            Get to know our Athletes
          </b>
          <div className="self-stretch flex flex-row items-center justify-center py-[1.11rem] px-[0rem] gap-[2.22rem] text-[0.67rem]">
            <div className="flex-1 rounded-md overflow-hidden flex flex-col items-center justify-start text-left border-[1px] border-solid border-gray-200">
              <div className="self-stretch h-[18.89rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none bg-gray-300 flex flex-col items-center justify-center py-[0.22rem] px-[0.44rem]">
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
                <div className="self-stretch flex-1 relative bg-gainsboro-200">
                  <div className="absolute w-[calc(100%_-_31.7px)] top-[calc(50%_-_8px)] left-[0.89rem] leading-[0.89rem] flex items-center justify-center h-[0.89rem]">
                    product-image.jpg
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none bg-gray-300 flex flex-col items-center justify-center py-[0.22rem] px-[0.44rem] text-left">
                    <div className="relative leading-[0.89rem] font-medium">
                      Discount: 30% Off
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-[0.67rem] gap-[0.22rem] text-left text-[0.89rem]">
                <div className="self-stretch relative leading-[1.33rem]">
                  Sports Equipment Sponsorship
                </div>
                <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.56rem] shrink-0">
                  Available for: Track and Field, Gymnastics, Volleyball
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
                <div className="self-stretch flex-1 relative bg-gainsboro-200">
                  <div className="absolute w-[calc(100%_-_31.7px)] top-[calc(50%_-_8px)] left-[0.89rem] leading-[0.89rem] flex items-center justify-center h-[0.89rem]">
                    product-image.jpg
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none bg-gray-300 flex flex-col items-center justify-center py-[0.22rem] px-[0.44rem] text-left">
                    <div className="relative leading-[0.89rem] font-medium">
                      Discount: 15% Off
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-[0.67rem] gap-[0.22rem] text-left text-[0.89rem]">
                <div className="self-stretch relative leading-[1.33rem]">
                  Nutrition Supplement Sponsorship
                </div>
                <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.56rem] shrink-0">
                  Available for: Swimming, Cross Country, Water Polo
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
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[3.33rem] relative gap-[3.33rem] z-[4] text-[0.89rem]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] z-[0]">
          <b className="relative text-[2.22rem] leading-[2.67rem] inline-block w-[28.89rem]">
            How It Works
          </b>
          <div className="relative leading-[1.33rem] inline-block w-[28.89rem]">
            Join our platform, create your athlete profile, and start connecting
            with sponsors today!
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start text-left text-white">
            <div className="rounded-lg bg-black w-[8.89rem] flex flex-col items-center justify-center p-[0.67rem] box-border">
              <div className="relative leading-[1.33rem] font-medium">
                Get Started
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-[1.11rem] px-[0rem] gap-[2.22rem] text-left">
            <div className="self-stretch flex flex-row items-center justify-start gap-[2.22rem]">
              <div className="flex-1 rounded-md flex flex-row items-start justify-center p-[0.89rem] gap-[0.89rem] border-[1px] border-solid border-gray-200">
                <div className="w-[5.56rem] h-[5.56rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 relative bg-gainsboro-200" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem]">
                  <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium">
                    Create Athlete Profile
                  </div>
                  <div className="self-stretch relative leading-[1.33rem]">
                    Fill out your athlete profile with your sports achievements,
                    goals, and interests.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[0.22rem] px-[0rem] text-center">
                    <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        💪
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        🔍
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        📞
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        ✅
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-md flex flex-row items-start justify-center p-[0.89rem] gap-[0.89rem] border-[1px] border-solid border-gray-200">
                <div className="w-[5.56rem] h-[5.56rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 relative bg-gainsboro-200" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem]">
                  <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium">
                    Explore Sponsorships
                  </div>
                  <div className="self-stretch relative leading-[1.33rem]">
                    Browse through various sponsorship opportunities based on
                    your sports and preferred brands.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[0.22rem] px-[0rem] text-center">
                    <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        💪
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        🔍
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        📞
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        ✅
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[2.22rem]">
              <div className="flex-1 rounded-md flex flex-row items-start justify-center p-[0.89rem] gap-[0.89rem] border-[1px] border-solid border-gray-200">
                <div className="w-[5.56rem] h-[5.56rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 relative bg-gainsboro-200" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem]">
                  <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium">
                    Connect with Sponsors
                  </div>
                  <div className="self-stretch relative leading-[1.33rem]">
                    Communicate with sponsors, share your story, and negotiate
                    NIL deals.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[0.22rem] px-[0rem] text-center">
                    <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        💪
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        🔍
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        📞
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        ✅
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-md flex flex-row items-start justify-center p-[0.89rem] gap-[0.89rem] border-[1px] border-solid border-gray-200">
                <div className="w-[5.56rem] h-[5.56rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 relative bg-gainsboro-200" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem]">
                  <div className="self-stretch relative text-[1.11rem] leading-[1.56rem] font-medium">
                    Secure Sponsorship
                  </div>
                  <div className="self-stretch relative leading-[1.33rem]">
                    Finalize sponsorship agreements and enjoy the benefits of
                    your partnership.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[0.22rem] px-[0rem] text-center">
                    <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        💪
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        🔍
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        📞
                      </div>
                      <div className="relative leading-[1.33rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[1.33rem] h-[1.33rem] shrink-0">
                        ✅
                      </div>
                    </div>
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
        <div className="flex-1 flex flex-col items-start justify-start z-[0]">
          <b className="self-stretch relative leading-[2.67rem]">
            Athletes Love Us
          </b>
        </div>
        <div className="flex-1 flex flex-row items-center justify-center gap-[2.22rem] z-[1] text-[0.89rem]">
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
      <div className="w-[67.78rem] h-[32.5rem] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[3.33rem] box-border relative gap-[3.33rem] z-[6]">
        <b className="absolute my-0 mx-[!important] top-[2.56rem] left-[23.5rem] leading-[1.56rem] inline-block z-[0]">
          How we are different
        </b>
        <div className="absolute my-0 mx-[!important] top-[7.56rem] left-[6.17rem] text-[1.33rem] leading-[100%] z-[1]">
          <span>{`Our mission is to provide collegiate `}</span>
          <b className="[text-decoration:underline]">women</b>
          <span> athletes with a platform to connect with sponsors.</span>
        </div>
        <div className="absolute my-0 mx-[!important] top-[22.22rem] left-[11.67rem] text-[1.11rem] leading-[100%] flex items-center justify-center w-[44.44rem] h-[6.44rem] shrink-0 z-[2]">
          We put the athlete first and want to facilitate interactions with
          sponsors to uncover an athlete’s personality, interests, and values to
          get to know them better before entering into an agreement.
        </div>
        <div className="absolute my-0 mx-[!important] top-[12.33rem] left-[9.44rem] rounded-[50%] bg-gainsboro-100 w-[8rem] h-[7.83rem] z-[3]" />
        <div className="absolute my-0 mx-[!important] top-[12.33rem] left-[29.89rem] rounded-[50%] bg-gainsboro-100 w-[8rem] h-[7.83rem] z-[4]" />
        <div className="absolute my-0 mx-[!important] top-[12.33rem] left-[50.33rem] rounded-[50%] bg-gainsboro-100 w-[8rem] h-[7.83rem] z-[5]" />
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[3.33rem] z-[7] text-[1.11rem]">
        <div className="h-[5.56rem] flex flex-row items-center justify-center gap-[3.33rem]">
          <div className="self-stretch relative leading-[1.56rem] flex items-center justify-center w-[16.33rem] shrink-0">
            © Chomp Spotlight 2024
          </div>
          <div className="self-stretch relative leading-[1.56rem] flex items-center justify-center w-[6.89rem] shrink-0">
            Privacy Policy
          </div>
          <div className="self-stretch relative leading-[1.56rem] flex items-center justify-center w-[8.33rem] shrink-0">
            Terms of Service
          </div>
        </div>
      </div>

    </div>
  );
};


export default HomePage;

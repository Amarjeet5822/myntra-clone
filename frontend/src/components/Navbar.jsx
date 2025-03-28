import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import {  useState } from "react";
import { AccountNavSignin, MenHover } from "../pages/index";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isMen, setIsMen] = useState(null);
  const [isAccount, setIsAccount] = useState(null);
  const { isAuthenticated, name } = useSelector(state => state.authUser.isUser);

  return (
    <nav className=" sticky top-0 z-50 bg-white w-full">
      <div className="min-w-[300px] max-w-[2500px] mx-auto h-[80px] flex justify-center items-center gap-5 text-xs lg:text-sm px-5 shadow-md">
        <div className="w-1/2 flex pr-1 h-full justify-between items-center">
          <div className="w-[20%] flex justify-center items-center h-full">
            <Link to="/">
              <div className="w-[53px] h-[36px] bg-[url('https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png')] bg-[length:1404px_105px] leading-[80px] bg-[-462px_0px] bg-no-repeat cursor-pointer"></div>
            </Link>
          </div>
          <div className="font-medium flex justify-items-start items-center w-[80%] h-full ">
            <div
              className="relative z-10 px-5 h-full flex justify-center items-center hover:border-b-4 hover:pb-[-4px]  hover:border-amber-400 "
              onMouseEnter={() => setIsMen(true)}
              onMouseLeave={() => setIsMen(null)}
            >
              MEN
              {isMen && <MenHover />}
            </div>

            <div className="relative px-5 h-full flex justify-center items-center">
              WOMEN
            </div>
            <div className="relative px-5 h-full flex justify-center items-center">
              KIDS
            </div>
            <div className="relative w-[132px] h-full flex justify-center items-center">
              HOME & LIVING
            </div>
            <div className="relative px-5 h-full flex justify-center items-center">
              BEAUTY
            </div>
            <div className="relative px-5 h-full flex justify-center items-center">
              STUDIO <sup className="text-rose-500 lg:text-[11px] ">NEW</sup>
            </div>
          </div>
        </div>
        <div className="w-1/2  flex gap-5 font-medium">
          <div className="w-[70%]  ">
            <div className="flex justify-left items-center w-full bg-gray-100 rounded-lg text-gray-700">
              <span className="text-gray-900 pl-2 ">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search for products, brands, and more"
                className="outline-none font-normal tracking-tighter w-full rounded-lg pl-2 py-3"
              />
            </div>
          </div>
          <div className="w=[30%]  flex gap-3 items-center pl-2 ">
            <div
              onMouseEnter={() => setIsAccount(true)}
              onMouseLeave={() => setIsAccount(null)}
              className="flex flex-col justify-center items-center hover:border-b-4 hover:pb-[-4px]  hover:border-pink-500 "
            >
              <div className="w-[24px] h-[24px] bg-[url('https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png')] bg-[length:1404px_105px] leading-[80px] bg-[-298px_-56px] bg-no-repeat cursor-pointer items-center justify-center"></div>
              <div className="relative ">
                Profile
                {isAccount && <AccountNavSignin />}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link to="/cart">
                <div className=" cursor-pointer text-xl flex justify-center items-center">
                  <IoMdHeartEmpty />
                </div>
                <div>Wishlist</div>
              </Link>
            </div>
            <div>
              <Link to="/bag">
                <div className="w-[22px] h-[22px] bg-[url('https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png')] bg-[length:1404px_105px] leading-[80px] bg-[-341px_-56px] bg-no-repeat cursor-pointer"></div>
                <p>Bag</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

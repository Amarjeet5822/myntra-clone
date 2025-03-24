import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 bg-white w-full">
      <div className="min-w-[300px] max-w-[2500px] mx-auto h-[80px] flex justify-center items-center gap-5 text-xs lg:text-sm px-5 shadow-md">
        <div className="w-1/2 flex pr-1 ">
          <div className="w-[20%] flex justify-center items-center">
            <Link to="/">
              <div class="w-[53px] h-[36px] bg-[url('https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png')] bg-[length:1404px_105px] leading-[80px] bg-[-462px_0px] bg-no-repeat cursor-pointer"></div>
            </Link>
          </div>
          <div className="font-medium flex justify-between items-center w-[80%]">
            <div>MEN</div>
            <div>WOMEN</div>
            <div>KIDS</div>
            <div>HOME & LIVING</div>
            <div>BEAUTY</div>
            <div>
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
            <div className="flex flex-col justify-center items-center">
              <div class="w-[24px] h-[24px] bg-[url('https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png')] bg-[length:1404px_105px] leading-[80px] bg-[-298px_-56px] bg-no-repeat cursor-pointer items-center justify-center"></div>
              <div>
                <Link to="/profile">Profile</Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link to="/cart">
                <div class=" cursor-pointer text-xl flex justify-center items-center">
                  <IoMdHeartEmpty />
                </div>
                <div>Wishlist</div>
              </Link>
            </div>
            <div>
              <Link to="/bag">
                <div class="w-[22px] h-[22px] bg-[url('https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png')] bg-[length:1404px_105px] leading-[80px] bg-[-341px_-56px] bg-no-repeat cursor-pointer"></div>
                <p>Bag</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

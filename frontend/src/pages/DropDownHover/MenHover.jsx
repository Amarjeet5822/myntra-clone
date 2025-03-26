import React from "react";
import { Link } from "react-router-dom";

const MenHover = () => {
  const menuData = [
    {
      category: "MEN",
      subcategories: [
        {
          title: "Topwear",
          items: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Jackets",
          ],
        },
        {
          title: "Bottomwear",
          items: [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Track Pants & Joggers",
          ],
        },
        {
          title: "Footwear",
          items: [
            "Casual Shoes",
            "Sports Shoes",
            "Formal Shoes",
            "Sandals & Floaters",
            "Flip Flops",
          ],
        },
        {
          title: "Sports & Active Wear",
          items: [
            "Sports Shoes",
            "Sports Sandals",
            "Active T-Shirts",
            "Track Pants & Shorts",
          ],
        },
        {
          title: "Fashion Accessories",
          items: [
            "Wallets",
            "Belts",
            "Perfumes & Body Mists",
            "Deodorants",
            "Ties & Cufflinks",
          ],
        },
      ],
    },
  ];
  return (
    <nav className="bg-white shadow-md absolute top-20 left-[-40px] max-w-5xl">
      <ul className="flex justify-center list-none max-w-full">
        {menuData.map((menu) => (
          <li key={menu.category} className=" ">
            {menu.subcategories.length > 0 && (
              <div className="absolute top-full left-0 bg-white w-6xl shadow-lg p-5 flex justify-around z-50">
                {menu.subcategories.map((subcategory, index) => (
                  <div key={index} className="flex-1 p-2">
                    <h3 className="text-amber-400 text-sm mb-2 uppercase">
                      {subcategory.title}
                    </h3>
                    <ul className="list-none">
                      {subcategory.items.map((item, idx) => (
                        <li key={idx} className="my-1">
                          <Link
                            to="#"
                            className=" text-sm font-normal hover:font-bold"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenHover;

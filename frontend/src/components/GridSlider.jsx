import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  [
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/x6fQm5XU_a5fda67e4cea4c478ab78d6647c71b19.png",
      title: "Category 1",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/7C135pzq_9f4283257fea4942aedd2d1e1685770b.png",
      title: "Category 2",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/htGdStbM_dc103175da2e41969bdc819276e6fcc7.png",
      title: "Category 3",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/19/I7c1rDNx_f864c5b3747f406ea154a73053cef948.png",
      title: "Category 4",
    },
  ],
  [
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/mWm3he1U_e468f657cbe242bba2477930bef4df3d.png",
      title: "Category 5",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/MMvGmLwM_4b0f767e353340029ceb1c8fb200da58.png",
      title: "Category 6",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/dn1wHVQF_8c1ed05a77e94076b59a6483df7c24fb.png",
      title: "Category 7",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/vxi6pLO1_5384e43d2038440ba98a738ce963a36d.png",
      title: "Category 8",
    },
  ],
  [
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/QScdYeg6_59e6f71262a442bcb797c17acf1d9ea9.png",
      title: "Category 9",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/pbvs21GH_06dbda6f2d5a4f72b602618ebbe22fbc.png",
      title: "Category 10",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/19/31zMK0H8_6c714a2f9e9149c5bb357d34a0a9f22c.png",
      title: "Category 11",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/Y3efHWmC_f6faf5e0dda84af4a437e64fb504c2d1.png",
      title: "Category 12",
    },
  ],
  [
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/17/84GFA7qz_f88f94635156436b8b6ee3f3b78aaa70.png",
      title: "Category 13",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/19/h0YIICGD_e80e8403650c4b218174528b8f8bd021.png",
      title: "Category 14",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/19/8w5e3irQ_fcfa2fe8f48a40c98ff914e257264c73.png",
      title: "Category 15",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/19/NFPu2elL_415a5041bc1745fcab33b120c33f90c1.png",
      title: "Category 16",
    },
  ],
];

const GridSlider = () => {
  return (
    <div className="max-w-full mx-auto bg-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView={1} // Show only 1 slide at a time
        className="mySwiper "
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 md:grid-cols-4 mb-10">
              {slide.map((item, idx) => (
                <div key={idx} className="bg-white  p-2">
                  <img src={item.image} alt={item.title} className="w-full" />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GridSlider;

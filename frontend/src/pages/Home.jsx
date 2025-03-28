import React, { useEffect } from "react";
import {
  DoubleImage,
  GridSlider,
  LandingImage,
  SingleImage,
} from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/authSlice";

function Home() {
  const dispatch = useDispatch();
  const { isUser, data } = useSelector((state) => state.authUser);
  useEffect(() => {
    dispatch(getUser());
  }, [isUser.isAuthenticated]);
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col gap-3 cursor-pointer">
        <SingleImage
          imgUrl="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/lWXUynw1_8e5d4f3aaa554faeaba43dc229fa59b3.jpg"
          imgAlt="code_coupons"
        />
        <DoubleImage
          imgUrlFirst="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/e62d1d04-03f7-4adb-a82c-812b62a5f0a71742464635977-desktop_home_01.gif"
          imgUrlSecond="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/3cab86aa-3900-4846-9aa3-e0448ff0616f1742464635956-desktop_home_02.jpg"
          imgAlt="brand"
        />
        <DoubleImage
          imgUrlFirst="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/af4febf6-e78a-4185-a9b9-1188cba73ea91742471767083-aa7daa59-52dd-4d5a-b68c-4b8bfd7d045a1742469400797-Sponsor-Strip_980x100_Title-Sponsor.jpg"
          imgUrlSecond="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/caa4aab8-4b29-44a3-bf8c-1b998398ba301742471767053-fa6e314c-38a4-4bf8-ba94-a46dc31b0ce21742469400825-Sponsor-Strip_980x100_Associate-Sponsor.jpg"
          imgAlt="loreal"
        />
        <SingleImage
          imgUrl="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/81e45545-e406-4288-8733-24b9490d74441742472348574-Bank-offer.gif"
          imgAlt="bank_offer"
        />
        <DoubleImage
          imgUrlFirst="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/17800f8a-d24f-49e8-9d80-2a22065d2a111742464840000-Flat-100-Off.jpg"
          imgUrlSecond="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/22c8b3ae-b14c-4b8d-913b-dc632978cd941742464839978-Flat-200-Off.jpg"
          imgAlt="loreal"
        />
        <SingleImage
          imgUrl="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/493ef63f-1a80-4d77-a9ae-d97bf4faff931742464933156-Crazy-Deals.jpg"
          imgAlt="crazy_deal"
        />
        <GridSlider />
        <SingleImage
          imgUrl="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/61e7100f-f0c0-4473-b46f-f56a547a10b61742464933208-Shop-By-Category--1-.jpg"
          imgAlt="category_shopping"
        />
        <div className="flex flex-col gap-0">
          <LandingImage
            images={[
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/MOF9lWdu_f9cd871357394bff9469d357be5522e0.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/g0GYHrWJ_e21fdc404e5b41f6936170164d4f38da.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/o7nvbSWf_3b855d7f68c747dab12230dffa18113b.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/t2OEtfFl_e0c9716caa254f9b9c200058401f4004.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/6WufWRmF_c0ac871794404a4381976b98b85cf31f.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/h5NrOvS0_b8841ac81a28492ba0885ccbcce6381b.jpg",
            ]}
            imgAlt="cloths"
          />
          <LandingImage
            images={[
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/VCDGJcn0_9b4ba11337f04335b5e7c5308e5f5d29.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/HKrysZxM_9cb825c09a0140af9e6d3b334aed3add.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/xFf7rxfJ_a99dcce98ba64682973aab98aca95ef1.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/Hze3QAb2_4ec5629a71d146b1a2f1cd942647aee8.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/zpSVDOHq_b8953d7ee4e6426ab00802d10145b3b6.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/c2OSF6DV_71b662112ce34aacb022991c3f27c52a.jpg",
            ]}
            imgAlt="innerwear"
          />
          <LandingImage
            images={[
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/MOF9lWdu_f9cd871357394bff9469d357be5522e0.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/g0GYHrWJ_e21fdc404e5b41f6936170164d4f38da.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/o7nvbSWf_3b855d7f68c747dab12230dffa18113b.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/t2OEtfFl_e0c9716caa254f9b9c200058401f4004.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/6WufWRmF_c0ac871794404a4381976b98b85cf31f.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/h5NrOvS0_b8841ac81a28492ba0885ccbcce6381b.jpg",
            ]}
            imgAlt="cloths"
          />
          <LandingImage
            images={[
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/VCDGJcn0_9b4ba11337f04335b5e7c5308e5f5d29.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/HKrysZxM_9cb825c09a0140af9e6d3b334aed3add.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/xFf7rxfJ_a99dcce98ba64682973aab98aca95ef1.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/Hze3QAb2_4ec5629a71d146b1a2f1cd942647aee8.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/zpSVDOHq_b8953d7ee4e6426ab00802d10145b3b6.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/c2OSF6DV_71b662112ce34aacb022991c3f27c52a.jpg",
            ]}
            imgAlt="innerwear"
          />
          <LandingImage
            images={[
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/MOF9lWdu_f9cd871357394bff9469d357be5522e0.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/g0GYHrWJ_e21fdc404e5b41f6936170164d4f38da.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/o7nvbSWf_3b855d7f68c747dab12230dffa18113b.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/t2OEtfFl_e0c9716caa254f9b9c200058401f4004.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/6WufWRmF_c0ac871794404a4381976b98b85cf31f.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/h5NrOvS0_b8841ac81a28492ba0885ccbcce6381b.jpg",
            ]}
            imgAlt="cloths"
          />
          <LandingImage
            images={[
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/MOF9lWdu_f9cd871357394bff9469d357be5522e0.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/g0GYHrWJ_e21fdc404e5b41f6936170164d4f38da.jpg",
              "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MARCH/20/o7nvbSWf_3b855d7f68c747dab12230dffa18113b.jpg",
            ]}
            imgAlt="cloths"
          />
          <SingleImage
            imgUrl="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/20/a1a514a5-cdea-48e4-9bf4-4ee267587fd11742465000276-App-Install-Banner.jpg"
            imgAlt="download_myntra"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

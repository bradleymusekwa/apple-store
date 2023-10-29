import React from "react";
import { vid, mobileHome, homeIphone14, homeM2, homeUltra, whiteLogo, blackLogo, homeWatch2, homeMac, homeIpad } from "../assets/images";
import FullPageBanner from "../componants/home/FullPageBanner";
import WhiteBGWatchBaner from "../componants/home/WhiteBGWatchBaner2";
import WatchHalfPageBanner from "../componants/home/WatchHalfPageBanner";
import WhiteBGWatchBanner from "../componants/home/WhiteBGWatchBanner";
import WatchHalfPageBaner from "../componants/home/WatchHalfPageBaner2";
import Footer from "../componants/footer/Footer";
import WatchBanner from "../componants/home/WatchBanner";

function Home() {
  return (
    <div className=" flex flex-col w-[100%] overflow-x-hidden ">
      {/* iPhone 15 Pro Banner */}
      <div className=" w-[100%] bg-black flex flex-col items-center justify-center">
        <div className=" flex-col justify-center items-center ">
          <h1 className=" font-semibold text-[45px] md:text-[40px] text-[rgb(164,161,151)] mt-[50px] ">
            iPhone 15 Pro
          </h1>
        </div>
        <video src={vid} 
        className="hidden md:flex  object-contain "
        autoPlay="true" />
        <img
          src={mobileHome}
          alt=" iphone 14 banner "
          className=" max-w-[100vw] object-contain md:hidden "
        />
      </div>
      {/* iphone 15 advert */}
      < FullPageBanner title="iPhone 15" description="New camera, New design, Newphoria" image={homeIphone14} link="product/104" />

      {/* watch advert */}
      < WatchBanner title=" Apple Watch" description="Smarter. Brighter. Mightier." image={homeM2} link="product/119" />


      {/* Watch */}
      <div className=" w-full flex justify-center flex-col md:flex-row md:justify-evenly md:items-center mt-[10px]  md:h-[500px] ">
        <WhiteBGWatchBanner image={homeUltra} logo={blackLogo} link="product/122" />
        <WhiteBGWatchBaner image={homeWatch2} logo={blackLogo} link="products/Watch" />
      </div>

      {/* Studio and iWatch */}
      <div className=" w-full flex justify-center flex-col md:flex-row md:justify-evenly md:items-center mt-[10px]  md:h-[500px] ">
        <WatchHalfPageBanner image={homeMac} logo={whiteLogo} link="product/110" />
        <WatchHalfPageBaner image={homeIpad} logo={whiteLogo} link="product/188" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

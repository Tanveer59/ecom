'use client';
import Sidebar from "@/components/sideBar";
import { StickyHeader } from "@/components/sticky-header";
import { TiSocialInstagramCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialPinterestCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import ProductCat from "@/components/productsCat";
import { Provider } from "react-redux";
import { store } from "@/redux/store";


export default function Home() {
  
  return (
    <Provider store={store}>
    <div className="flex flex-col">
      <StickyHeader />

    <div className="bg-background grid grid-cols-12 h-screen overflow-hidden">
      {/* Left side container - hidden on small screens, spans 3 columns on larger screens */}
      <div className="hidden md:flex md:col-span-4 lg:col-span-3  scrollBar">
        {/* Left nested container */}
        <div className="w-1/6 h-full  bg-white z-30 flex items-center justify-end flex-col py-4 pt-[1.4rem] ">
          {/* Add content here */}
          <div className="flex flex-col items-center justify-center overflow-y-hidden overflow-x-hidden">
            <TiSocialInstagramCircular size={40}   className="hover-grow"/>
            <TiSocialTwitterCircular size={40}   className="hover-grow"/>
            <TiSocialLinkedinCircular size={40}   className="hover-grow"/>
            <TiSocialFacebookCircular size={40}   className="hover-grow"/>
            <TiSocialPinterestCircular size={40}   className="hover-grow"/>
            <TiSocialYoutubeCircular size={40}  className="hover-grow"/>
            <IoSettingsOutline size={32} className="hover-grow" />
          </div>
        </div>
        <div className="flex-1 mt-[4.6rem] overflow-y-auto scrollBar border-right">
          {/* Add content here */}  
          <Sidebar />
        </div>
      </div>

      {/* Main content area - spans remaining columns based on screen size */}
      <ProductCat />
    </div>
    </div>
    </Provider>
  );
}

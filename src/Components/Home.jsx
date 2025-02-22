import React from "react";
import HomeHeader from "./HomeHeader";
import googlelogo from "../Assets/googlelogo.png";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center ">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img
            className="w-[172px] md:w-[272px] mb-8 "
            src={googlelogo}
            alt="logo"
          />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;

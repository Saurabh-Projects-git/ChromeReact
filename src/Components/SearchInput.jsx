import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import mic from "../Assets/mic.svg";
import image from "../Assets/image.svg";
import { useNavigate, useParams } from "react-router-dom";
const SearchInput = () => {
  const { query, startIndex } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div className="h-46 w-full md:w-[584px] flex item-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
      <AiOutlineSearch size={20} color="#9aa0a6" style={{ marginTop: 15 }} />
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        type="text"
        placeholder="Search Google or type a URL"
        className=" bg-transparent focus:outline-none
        grow outline-0 text-black/[0.87] h-12 w-full
        "
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#9aa0a6"
            onClick={() => {
              setSearchQuery("");
            }}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={mic} />
        {/* <img className="h-4 w-4 mr-2 cursor-pointer" src={image} /> */}
      </div>
    </div>
  );
};

export default SearchInput;

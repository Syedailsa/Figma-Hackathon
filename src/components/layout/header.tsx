// import React from "react";
// import { FaBell } from "react-icons/fa";
// import { IoHeart, IoHeartCircleOutline, IoSearch } from "react-icons/io5";
// import { RiSettings3Fill } from "react-icons/ri";
// import { VscSettings } from "react-icons/vsc";

// export default function Header() {
//   return (
//     <header className="flex justify-between border-b-2 border-gray-100 bg-[#FFFFFF] pb-7">

//         {/* left side */}

//         <div className="flex justify-start">
//         <img src='/Logo.png' height={44} width={148} className="h-[40px] w-[148px] mt-10 ml-[60px]"/>
//         <div className="flex mt-10 justify-between w-[492px] h-[44px] ml-[100px] border-[1px] rounded-[70px]">
//             <div className="flex">
//                 <IoSearch className="h-6 w-6 mx-4 mt-3"/>
//                 <input type="text" placeholder=' Search something here' className="">
//                 </input>                  
//             </div>
//             <VscSettings className="h-6 w-6 mx-4 mt-3" />          
//         </div>
//         </div>

//         {/* Right side */}

//         <div className="flex gap-5 mt-12 h-[44px] w-[236px] text-gray-500">
//         <IoHeart className="h-8 w-8 border-[1px] p-1 rounded-[90px] cursor-pointer"/>
//         <FaBell className="h-8 w-8 border-[1px] p-1 rounded-[90px] cursor-pointer" />
//         <RiSettings3Fill className="h-8 w-8 p-1 rounded-[90px] border-[1px] cursor-pointer"/>
//         <img src="/Profil.png" alt="dp" className="h-8 w-8 rounded-[90px] cursor-pointer" />
//         </div>


//     </header>
//   );
// }
// export const revalidate = 60; 

// 'use client'

// import React, { useState } from "react";
// import { FaBell } from "react-icons/fa";
// import { IoHeart, IoSearch } from "react-icons/io5";
// import { RiSettings3Fill } from "react-icons/ri";
// import { VscSettings } from "react-icons/vsc";

// export default function Header() {
//   const [showIcons, setShowIcons] = useState(false);

//   return (
//     <header className="flex justify-between border-b-2 border-gray-100 bg-[#FFFFFF] pb-7 px-4 md:px-16">
//       {/* Left side */}
//       <div className="flex items-center">
//         <img
//           src="/Logo.png"
//           height={44}
//           width={148}
//           className="h-[40px] w-[148px]"
//           alt="Logo"
//         />

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center ml-8 w-full max-w-[492px] h-[44px] border-[1px] rounded-[70px]">
//           <IoSearch className="h-6 w-6 mx-4" />
//           <input
//             type="text"
//             placeholder="Search something here"
//             className="flex-grow border-none focus:outline-none"
//           />
//           <VscSettings className="h-6 w-6 mx-4" />
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="flex items-center gap-4">
//         {/* Visible on larger screens */}
//         <div className="hidden md:flex gap-5 text-gray-500">
//           <IoHeart className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
//           <FaBell className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
//           <RiSettings3Fill className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
//           <img
//             src="/Profil.png"
//             alt="Profile"
//             className="h-8 w-8 rounded-full cursor-pointer"
//           />
//         </div>

//         {/* Settings Icon for smaller screens */}
//         <VscSettings
//           className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer md:hidden"
//           onClick={() => setShowIcons(!showIcons)}
//         />
//       </div>

//       {/* Dropdown for smaller screens */}
//       {showIcons && (
//         <div className="absolute right-4 top-16 bg-white border-[1px] rounded-md shadow-md p-4 flex flex-col gap-3 text-gray-500 md:hidden">
//           <IoHeart className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
//           <FaBell className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
//           <RiSettings3Fill className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
//           <img
//             src="/Profil.png"
//             alt="Profile"
//             className="h-8 w-8 rounded-full cursor-pointer"
//           />
//         </div>
//       )}
//     </header>
//   );
// }

// export const revalidate = 60;

'use client'

import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoHeart, IoSearch } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";

export default function Header() {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <header className="flex justify-between border-b-2 border-gray-100 bg-[#FFFFFF] p-4 md:p-6">
      {/* Left side */}
      <div className="flex items-center">
        <img
          src="/Logo.png"
          height={44}
          width={148}
          className="h-[40px] w-[148px]"
          alt="Logo"
        />

        {/* Search Bar */}
        <div className="hidden md:flex items-center ml-8 w-full max-w-[492px] h-[44px] border-[1px] rounded-[70px]">
          <IoSearch className="h-6 w-6 mx-4" />
          <input
            type="text"
            placeholder="Search something here"
            className="flex-grow border-none focus:outline-none"
          />
          <VscSettings className="h-6 w-6 mx-4" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Visible on larger screens */}
        <div className="hidden md:flex gap-5 text-gray-500">
          <IoHeart className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
          <FaBell className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
          <RiSettings3Fill className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
          <img
            src="/Profil.png"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </div>

        {/* Settings Icon for smaller screens */}
        <VscSettings
          className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer md:hidden"
          onClick={() => setShowIcons(!showIcons)}
        />
      </div>

      {/* Dropdown for smaller screens */}
      {showIcons && (
        <div className="absolute right-4 top-16 bg-white border-[1px] rounded-md shadow-md p-4 flex flex-col gap-3 text-gray-500 md:hidden">
          <IoHeart className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
          <FaBell className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
          <RiSettings3Fill className="h-8 w-8 border-[1px] p-1 rounded-full cursor-pointer" />
          <img
            src="/Profil.png"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </div>
      )}
    </header>
  );
}

export const revalidate = 60;



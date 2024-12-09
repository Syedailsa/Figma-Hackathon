'use client'

import React from "react";
import { IoHeart } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import router from "next/router";

export default function Cards() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container place-items-center">
          <div className="flex flex-wrap -m-4">
            <div className=" flex gap-8 p-4">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg text-gray-900 font-medium title-font ">
                        Koenigsegg
                        </h2>
                        <h3 className="tracking-widest text-gray-400 text-xs mb-4 font-medium title-font">
                        Sport
                        </h3>    
                    </div> 
                    <IoHeart className="h-6 w-6 text-red-600 hover:text-red-300 mt-2"/>                   
                </div>
                <img
                  className="rounded w-[232px] h-[72px] mt-[115px] object-cover object-center mb-6"
                  src="/car1.png"
                  alt="content"
                />
                <img src="/Spesification.png" alt="Specs Of Car" height={24} width={256} className="mt-12 mb-8"/>
                <div className="flex justify-between items-center">
                    <p className="leading-relaxed text-lg text-black font-bold">
                    $99.00/ <span className="text-gray-400 text-sm font-normal">day</span>
                    </p>
                    <button  onClick={() => router.push("/dashboard")} className="w-[116px] h-[44px] text-white rounded-[10px] bg-[#3563E9] hover:bg-[#435fb3]">Rent Now</button>
                </div>

              </div> 
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg text-gray-900 font-medium title-font ">
                        Koenigsegg
                        </h2>
                        <h3 className="tracking-widest text-gray-400 text-xs mb-4 font-medium title-font">
                        Sport
                        </h3>    
                    </div> 
                    <CiHeart className="h-6 w-6 mt-2 hover:text-red-300"/>                   
                </div>
                <img
                  className="rounded w-[232px] h-[72px] mt-[115px] object-cover object-center mb-6"
                  src="/car2.png"
                  alt="content"
                />
                <img src="/Spesification.png" alt="Specs Of Car" height={24} width={256} className="mt-12 mb-8"/>
                <div className="flex justify-between items-center">
                    <div className="flex-col ">
                        <p className="leading-relaxed text-lg text-black font-bold">
                        $80.00/ <span className="text-gray-400 text-sm font-normal">day</span>
                        </p>
                        <del className="text-gray-400 text-sm font-normal">$100.00</del>
                    </div>     
                    <button  onClick={() => router.push("/dashboard")}  className="w-[116px] h-[44px] text-white rounded-[10px] bg-[#3563E9] hover:bg-[#435fb3]">Rent Now</button>
                </div>

              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg text-gray-900 font-medium title-font ">
                        Koenigsegg
                        </h2>
                        <h3 className="tracking-widest text-gray-400 text-xs mb-4 font-medium title-font">
                        Sport
                        </h3>    
                    </div> 
                    <IoHeart className="h-6 w-6 text-red-600 hover:text-red-300 mt-2"/>                   
                </div>
                <img
                  className="rounded w-[232px] h-[72px] mt-[115px] object-cover object-center mb-6"
                  src="/Car3.png"
                  alt="content"
                />
                <img src="/Spesification.png" alt="Specs Of Car" height={24} width={256} className="mt-12 mb-8"/>
                <div className="flex justify-between items-center">
                    <p className="leading-relaxed text-lg text-black font-bold">
                    $96.00/ <span className="text-gray-400 text-sm font-normal">day</span>
                    </p>
                    <button  onClick={() => router.push("/dashboard")} className="w-[116px] h-[44px] text-white rounded-[10px] bg-[#3563E9] hover:bg-[#435fb3]">Rent Now</button>
                </div>

              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg text-gray-900 font-medium title-font ">
                        Koenigsegg
                        </h2>
                        <h3 className="tracking-widest text-gray-400 text-xs mb-4 font-medium title-font">
                        Sport
                        </h3>    
                    </div> 
                    <CiHeart className="h-6 w-6 mt-2 hover:text-red-300"/>                    
                </div>
                <img
                  className="rounded w-[232px] h-[72px] mt-[115px] object-cover object-center mb-6"
                  src="/Car4.png"
                  alt="content"
                />
                <img src="/Spesification.png" alt="Specs Of Car" height={24} width={256} className="mt-12 mb-8"/>
                <div className="flex justify-between items-center">
                    <div className="flex-col ">
                        <p className="leading-relaxed text-lg text-black font-bold">
                            $80.00/ <span className="text-gray-400 text-sm font-normal">day</span>
                        </p>
                        <del className="text-gray-400 text-sm font-normal">$100.00</del>
                    </div>
                <button  onClick={() => router.push("/dashboard")} className="w-[116px] h-[44px] text-white rounded-[10px] bg-[#3563E9] hover:bg-[#435fb3]">Rent Now</button>
                </div>

              </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
}

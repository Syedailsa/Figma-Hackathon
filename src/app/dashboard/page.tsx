import SidebarNav from "@/components/layout/adminSidebar";
import SeparatorAdmin from "@/components/layout/adminSeparator";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const AdminPanel = () => {
  return (
<div className="flex bg-[#F6F7F9]">
  <div className="hidden md:block">
    <SidebarNav />
  </div>

  <div className="md:flex mx-4 my-4 md:m-2">
    <div className="w-[534px] h-[836px] pl-0 ml-0 md:mx-16 mb-4 mt-2 bg-white rounded-xl">
        <div>
        <h1 className="text-xl font-bold pb-3 pt-2 ml-6">Details Rental</h1>
        <Image
            src={"/Maps.png"}
            alt="Map route"
            width={470}
            height={250}
            className="flex pb-4 ml-6"
        />
        </div>

        <div className="flex gap-x-44 md:ml-6 ">
        <div className="flex items-center gap-3 ">
            <Image src={"/small1.png"} alt="Nissan GTR" height={20} width={100} />
            <span className="flex flex-col ">
            <h3 className="font-bold text-2xl leading-10 ">Nissan GT-R</h3>
            <h5 className="text-sm font-medium leading-5 ">Sport Car</h5>
            </span>
        </div>
        <span className="">
            <h5>#9761</h5>
        </span>
        </div>
        <div className=" ">
        <SeparatorAdmin />
        </div>
        <hr className="w-[380px] mt-16 ml-4" />
        <div className="flex w-[390px] h-[48px] items-center justify-between mt-2 ml-4 ">
        <div className="flex flex-col ">
            <h2 className="font-bold text-xl text-[#1A202C]  ">
            Total Rental Price
            </h2>
            <p className="font-medium text-[#90A3BF] text-xs    ">
            Overall price and includes rental discount
            </p>
        </div>
        <h3 className="text-3xl font-semibold  ">$80.00</h3>
        </div>
    </div>

    <div className="col-start-3 col-end-4 flex flex-col gap-y-10  ">
    <div className="col-start-1 md:col-start-3 col-end-4 ml-2 mt-2">
        <Image
        src="/chart.png"
        alt="chart Analysis"
        width={524}
        height={324}
        className=""
        />
    </div>
    <div className="  bg-white rounded-xl   ">
        <div className="flex items-center gap-x-72 ml-8  w-[500px] h-[480px] -mt-48 ">
        <h1 className="font-bold text-base">Recent Transaction</h1>
        <Link href="/acr" className="text-blue-600 text-xs">
            View All
        </Link>
        </div>
        <div className="-mt-56">
        <div className="flex md:gap-x-60  ml-8 mb-4 mt-4">
                <div className="flex items-center gap-3 ">
                <Image
                    src={"/car.png"}
                    alt="Nissan GTR"
                    height={40}
                    width={100}
                />
                <span className="flex flex-col  ">
                    <h3 className="font-medium text-xs leading-10 ">Nissan GT-R</h3>
                    <h5 className="text-[10px] font-medium leading-5 -mt-[10px] text-[#90A3BF]">
                    Sport Car
                    </h5>
                </span>
                </div>

                <span className="mt-2">
                <h5 className="text-[#90A3BF] text-[10px] ">20 july</h5>
                <h4 className="text-sm font-semibold -ml-3">$80.00</h4>
                </span>
            </div>

            <hr className="w-[330px] ml-10" />

            {/* card 2 */}

            <div className="flex gap-x-[235px]  ml-8 mb-4 mt-4">
                <div className="flex items-center gap-3 ">
                <Image
                    src={"/car-1.png"}
                    alt="Koegnigsegg "
                    height={40}
                    width={100}
                />

                <span className="flex flex-col  ">
                    <h3 className="font-medium text-xs leading-10 ">Koegnigsegg</h3>
                    <h5 className="text-[10px] font-medium leading-5 -mt-[10px] text-[#90A3BF]">
                    Sport Car
                    </h5>
                </span>
                </div>

                <span className="mt-2">
                <h5 className="text-[#90A3BF] text-[10px] ">19 july</h5>
                <h4 className="text-sm font-semibold -ml-3">$99.00</h4>
                </span>
            </div>

            <hr className="w-[330px] ml-10" />
            {/* card 3 */}

            <div className="flex gap-x-60  ml-8 mb-4 mt-4">
                <div className="flex items-center gap-3 ">
                <Image
                    src={"/car-2.png"}
                    alt="Rolls-Royce "
                    height={40}
                    width={100}
                />

                <span className="flex flex-col  ">
                    <h3 className="font-medium text-xs leading-10 ">Rolls-Royce</h3>
                    <h5 className="text-[10px] font-medium leading-5 -mt-[10px] text-[#90A3BF]">
                    Vintage Car
                    </h5>
                </span>
                </div>

                <span className="mt-2">
                <h5 className="text-[#90A3BF] text-[10px] ">18 july</h5>
                <h4 className="text-sm font-semibold -ml-3">$96.00</h4>
                </span>
            </div>

            <hr className="w-[330px] ml-10" />
            {/* card 4 */}

            <div className="flex gap-x-[275px] ml-8 mb-4 mt-4 ">
                <div className="flex items-center gap-3 ">
                <Image src={"/car-3.png"} alt="CR-V " height={40} width={100} />

                <span className="flex flex-col  ">
                    <h3 className="font-medium text-xs leading-10 ">CR-V</h3>
                    <h5 className="text-[10px] font-medium leading-5 -mt-[10px] text-[#90A3BF]">
                    SUV{" "}
                    </h5>
                </span>
                </div>

                <span className="mt-2">
                <h5 className="text-[#90A3BF] text-[10px] ">17 july</h5>
                <h4 className="text-sm font-semibold -ml-3">$80.00</h4>
                </span>
            </div>

            <hr className="w-[330px] ml-10" />
            </div>
    

        
    </div>
    </div>
  </div>


</div>

  )

}

export default AdminPanel
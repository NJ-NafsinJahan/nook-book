import Image from "next/image";
import React from "react";
import { FaChalkboard, FaWifi } from "react-icons/fa";
import { LuProjector } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";

const StaticFirst = () => {
  return (
    <div className="w-full max-w-full p-4 shadow rounded-xl border border-gray-300 flex flex-col sm:flex-row justify-center items-center gap-4 mt-3">
      <div className="rounded-2xl flex justify-center items-center gap-1 m-2">
        <div className="avatar">
          <div
            className="w-20 h-20 rounded-full text-[#1E103F]
           flex items-center justify-center"
          >
            <FaWifi size={25} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl text-[#1E103F] p-0.5">
            Free Wifi
          </h2>
          <p className="font-normal text-[12px] text-[#1E103F]">
            Smart Connectivity for Serious Study
          </p>
        </div>

        {/* 02 */}
      </div>
      <div className=" rounded-2xl flex justify-center items-center gap-1 m-2">
        <div className="avatar">
          <div className="w-20 h-20 rounded-full text-[#1E103F] flex items-center justify-center">
            <LuProjector size={25} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl text-[#1E103F] p-0.5">
            Projector Access
          </h2>
          <p className="font-normal text-[12px] text-[#1E103F]">
            Present your Ideas with Clarity.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="rounded-2xl flex justify-center items-center gap-1 m-2">
        <div className="avatar">
          <div className="w-30 h-30 rounded-full text-[#1E103F] flex items-center justify-center">
            <FaChalkboard size={25} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl text-[#1E103F] p-0.5">
            Whiteboard
          </h2>
          <p className="font-normal text-[12px] text-[#1E103F]">
            Every great idea starts here!
          </p>
        </div>
      </div>
      {/* 4 */}
      <div className="rounded-2xl flex justify-center items-center gap-1 m-2">
        <div className="avatar">
          <div className="w-20 h-20 rounded-full text-[#1E103F] flex items-center justify-center">
            <TbAirConditioning size={25} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl text-[#1E103F] p-0.5">
            Air Conditioning
          </h2>
          <p className="font-normal text-[12px] text-[#1E103F]">
            Focused learning in perfect comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaticFirst;

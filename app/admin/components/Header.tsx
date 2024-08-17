import { notification, search } from "@/app/icons/icons";
import React from "react";

const Header = () => {
  return (
    <div className="h-[100px] mb-[22px] flex flex-col sm:flex-row items-center justify-between">
      <div className="flex-1 w-full mb-3 sm:mb-0 flex-row flex items-center">
        <div className="ml-12">
          <h4 className="text-blue-black text-[24px] font-semibold">
            اسم المدير
          </h4>
          <span className="text-mid-grey text-[16px] font-normal">
            مرحبا بك
          </span>
        </div>
        <div>
          <button className="rounded-full border border-solid border-[#D7DBE7] relative w-[44px] h-[44px] flex items-center justify-center">
            <div className="w-[12px] flex items-center justify-center h-[12px] text-[10px] font-bold rounded-full bg-[#FD3549] absolute top-0 right-0">
              <text className="text-[#FD3549] stroke-slate-600">2</text>
            </div>
            {notification}
          </button>
        </div>
      </div>
      <div className="flex-row flex-1 w-full relative flex items-center">
        <i className="absolute left-7 cursor-pointer">
            {search}
        </i>
        <input
          placeholder="البحث"
          className="pl-14 pr-3 h-[44px] w-[100%] rounded-3xl border border-solid border-[#D7DBE7] outline-none focus:outline-none max-w-[700px] inline-flex placeholder:text-mid-grey placeholder:text-[14px]"
        />
      </div>
    </div>
  );
};

export default Header;

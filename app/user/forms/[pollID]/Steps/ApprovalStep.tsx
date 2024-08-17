import Image from "next/image";
import React from "react";
import DonImage from "@/public/images/image.png";

const ApprovalStep = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-[75vh]">
      <div className="w-[300px] h-[300px] relative">
        <Image src={DonImage.src} alt="done step" fill />
      </div>
      <div>
        <p className="text-primary text-center text-[48px] font-semibold">
        تم الإنتهاء 
        </p>
        <p className="text-black text-[18px] font-normal text-center">شرح عن الأستطلاع</p>
      </div>
    </div>
  );
};

export default ApprovalStep;

"use client";
import DynamicImageOverlay from "@/app/ui/DynamicImageOverlay/DynamicImageOverlay";
import React from "react";
import ClientImage from "@/public/images/client.png";
import { request } from "@/app/apiFetch/request";
import { useQuery } from "@tanstack/react-query";

const Sidebar = ({
  pollId,
  step,
  totalStep,
}: {
  pollId: number;
  totalStep: number;
  step: number;
}) => {
  const getPoll = async () => {
    return request({
      url: `/poll/${pollId}`,
    });
  };

  const { data } = useQuery({
    queryKey: [`get-poll-${pollId}`],
    queryFn: getPoll,
  });
  return (
    <DynamicImageOverlay
      className="w-[560px] hidden lg:flex h-screen sticky top-0 left-0"
      image={ClientImage.src}
      component={() => {
        return (
          <div>
            <div className="mb-7">
              <h3 className="text-[62px] text-white font-semibold mb-[7px]">
                {data?.data?.data?.title || "عنوان الأستطلاع"}
              </h3>
              <p className="text-[18px] font-normal text-[#C9C9C9]">
                {data?.data?.data?.description || "شرح عن الأستطلاع"}
              </p>
            </div>
            <div>
              <span className="text-[14px] text-[#B5CCEC] font-semibold">
                الخطوة الاولى
              </span>
              <p className="text-[23px] font-bold mb-1 text-white">
                {Math.floor((step / totalStep) * 100)}% تم استكمال
              </p>
              <div className="w-full h-5 bg-white rounded-full">
                <div
                  className="h-5 bg-primary rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.floor((step / totalStep) * 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Sidebar;

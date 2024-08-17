import Link from "next/link";
import React from "react";
import Questions from "./components/Questions";
import { request } from "@/app/apiFetch/request";
import { useQuery } from "@tanstack/react-query";


interface Props {
  params: {
    pollID: number;
  };
}

export async function generateMetadata({ params: { pollID } }: Props) {
  const getPoll = async () => {
    return request({
      url: `/poll/${pollID}`,
    });
  };

  const data =await getPoll()
  

  return {
    title: `استبيان - ${data.data.data.title}`,
  };
}

const PollPage = ({ params: { pollID } }: Props) => {
  return (
    <div className="">
      <div className="w-full md:w-[80%] mx-auto">
        <Questions pollID={pollID} />
        <Link href={"#"} className="text-white rounded-[12px] font-bold bg-primary py-[6px] px-4 text-[16px] border-none outline-none focus:outline-none">
          إضافة سؤال جديد
        </Link>
      </div>
    </div>
  );
};

export default PollPage;

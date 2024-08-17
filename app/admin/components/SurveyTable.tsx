"use client";
import React, { ReactNode } from "react";
import Table, { Column } from "../Table";
import Link from "next/link";
import { request } from "@/app/apiFetch/request";
import { useQuery } from "@tanstack/react-query";

const getPolls = () => {
  return request({
    url: "/poll",
  });
};

type Poll = {
    id: number;
    title: string;
    description: string;
    questions: any[];
  };

const SurveyTable = () => {
  const columns: Column<Poll>[] = [
    {
      accessor: "title",
      header: "الاسم",
      cell(item) {
        return (
          <div className="flex items-center gap-3">
            <div className="rounded-full w-9 h-9 bg-mid-grey"></div>
            <p className="font-normal text-[14px]">{item.title}</p>
          </div>
        );
      },
    },
    {
      header: "عدد الاسئلة",
      accessor: "questions",
      accessorFn: (item) => item.questions.length,
    },
    {
      accessor: "description",
      header: "وصف بسيط",
    },
    {
      header: "تفاصيل",
      cell(item) {
        return (
          <div>
            <Link href={`/admin/allPolls/${item.id}`} className="text-primary">
              عرض
            </Link>
          </div>
        );
      },
    },
  ];
  const { data, isLoading } = useQuery({
    queryKey: ["polls"],
    queryFn: getPolls,
  });
  return (
    <div className="shadow-tableShadow p-6 rounded-[20px]">
      <div className="flex items-center justify-between flex-wrap mb-4">
        <p className="font-bold text-[20px]">الأستطلاعات</p>
        <div className="flex items-center gap-2">
          <button className="py-[6px] px-[16px] rounded-[12px] font-bold bg-[#E7E9ED] text-primary outline-none border-none">
            تصدير لأكسل
          </button>
          <button className="py-[6px] px-[16px] rounded-[12px] font-bold bg-primary text-white outline-none border-none">
            إضافة
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <Table
          isLoading={isLoading}
          data={data?.data?.data?.slice(0, 10) || []}
          columns={columns}
        />
      </div>
      <p className="text-center font-semibold pt-3 ">
        <Link href={"/admin/allPolls"}>عرض المزيد</Link>
      </p>
    </div>
  );
};

export default SurveyTable;

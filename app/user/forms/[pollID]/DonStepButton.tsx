"use client";
import { request } from "@/app/apiFetch/request";
import { RootState } from "@/app/store/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { useSelector } from "react-redux";

const DonStepButton = () => {
  const { enqueueSnackbar } = useSnackbar();
  const userPollAnswer = useSelector(
    (state: RootState) => state.userPollAnswer
  );
  const solve = useMutation({
    mutationKey: ["solve"],
    mutationFn: () => {
      return request({
        url: "/solve",
        method: "post",
        data: userPollAnswer,
      });
    },
    onSuccess: () => {
      enqueueSnackbar("تم تسجيل حلك بنجاح شكرا لوقتك الثمين", {
        variant: "success",
      });
    },
  });
  return (
    <button
      onClick={() => {
        solve.mutate();
      }}
      disabled={solve.isPending}
      className="sticky bottom-0 w-full bg-primary h-[68px] text-white text-[32px] font-semibold"
    >
      {solve.isPending ? "جاري تسجيل حلك" : "تم"}
    </button>
  );
};

export default DonStepButton;

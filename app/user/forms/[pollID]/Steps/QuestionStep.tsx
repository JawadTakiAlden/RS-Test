"use client";
import { ApiResponse, PollData } from "@/app/admin/allPolls/[pollID]/components/Questions";
import { request } from "@/app/apiFetch/request";
import { UpdateData } from "@/app/store/slices/userPollAnswerSlice";
import { RootState } from "@/app/store/store";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const QuestionStep = ({ pollID }: { pollID: number }) => {
  const { solve } = useSelector((state: RootState) => state.userPollAnswer);
  const dispatch = useDispatch();

  const handleAnswerChange = (questionId: number, answerId: number) => {
    const existingAnswer = solve.find((el) => el.questionId === questionId);

    if (existingAnswer) {
      // Update the existing answer
      const updatedSolve = solve.map((el) =>
        el.questionId === questionId ? { ...el, answerId } : el
      );
      dispatch(
        UpdateData({
          name: "solve",
          newValue: updatedSolve,
        })
      );
    } else {
      // Add a new answer to solve array
      dispatch(
        UpdateData({
          name: "solve",
          newValue: [
            ...solve,
            {
              questionId,
              answerId,
            },
          ],
        })
      );
    }
  };

  const getPoll = async (): Promise<ApiResponse> => {
    return request({
      url: `/poll/${pollID}`,
    });
  };

  const { data, isLoading, isError, refetch } = useQuery<ApiResponse>({
    queryKey: [`get-poll-${pollID}`],
    queryFn: getPoll,
  });

  if (isLoading) {
    return (
      <p className="text-center text-mid-grey font-semibold text-[18px] my-5">
        جاري التحميل
      </p>
    );
  }

  if (isError) {
    return (
      <div className="">
        <p className="text-center text-red-300 font-semibold text-[18px] my-5">
          حدث خطأ اثناء تحميل البيانات
        </p>
        <button
          onClick={() => {
            refetch();
          }}
          className="mx-auto bg-red-100 rounded-xl py-2 px-4"
        >
          اعادة التحميل
        </button>
      </div>
    );
  }
  return (
    <div className="min-h-[75vh]">
      {data?.data?.data?.questions?.map((question) => (
        <div key={question.id} className="mb-10 ">
          <div className="flex items-center justify-between pb-[14px] border-b border-solid border-divider-grey pl-[22px]">
            <p className="text-[24px] font-bold">{question.text}</p>
          </div>
          <div className="flex items-center gap-20">
            {question?.answers?.map((answer) => (
              <div
                key={answer.id}
                className="flex items-center gap-[17px] py-5"
              >
                <label className="flex items-center gap-x-2">
                  <span className="text-[18px] font-bold">{answer.text}</span>
                  <input
                    type="radio"
                    name="gender"
                    value={answer.id}
                    onChange={(e) => {
                      handleAnswerChange(question.id, answer.id);
                    }}
                    className="w-[19px] h-[19px]"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionStep;

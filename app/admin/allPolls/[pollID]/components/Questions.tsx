"use client"
import QuestionCard from '@/app/admin/components/Question'
import { request } from '@/app/apiFetch/request';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export interface Answer {
    id: number;
    text: string;
    points: number;
    createdAt: string;
    updatedAt: string;
  }
  
 export  interface Question {
    id: number;
    text: string;
    createdAt: string;
    updatedAt: string;
    answers: Answer[];
  }
  
 export  interface PollData {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    questions: Question[];
  }
  
 export interface ApiResponse {
    data: {
      data: PollData;
    };
  }
  

const Questions = ({pollID , withAction = true} : {pollID : number , withAction? : boolean}) => {
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
          <p className="text-center text-mid-grey font-semibold text-[18px]">
            جاري التحميل
          </p>
        );
      }
    
      if (isError) {
        return (
          <div>
            <p className="text-center text-red-300 font-semibold text-[18px]">
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
    <div>
    {data?.data.data.questions.map((question) => (
      <QuestionCard withAction={withAction} key={question.id} question={question} />
    ))}
  </div>
  )
}

export default Questions
import Link from "next/link";
import React from "react";

interface Answer {
  id: number;
  text: string;
  points: number;
  createdAt: string;
  updatedAt: string;
}

interface Question {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  answers: Answer[];
}

interface PollData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  questions: Question[];
}
const QuestionCard = ({
  question,
  withAction = false,
}: {
  question: Question;
  withAction?: boolean;
}) => {
  return (
    <div className="mb-10 ">
      <div className="flex items-center justify-between pb-[14px] border-b border-solid border-divider-grey pl-[22px]">
        <p className="text-[24px] font-bold">{question.text}</p>
        {withAction && (
          <div className="flex items-center gap-3">
            <Link href={"#"}>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_540)">
                  <path
                    d="M13.3243 2.22234C13.5302 2.02777 13.7746 1.87344 14.0435 1.76814C14.3125 1.66284 14.6008 1.60864 14.8919 1.60864C15.183 1.60864 15.4713 1.66284 15.7403 1.76814C16.0092 1.87344 16.2536 2.02777 16.4595 2.22234C16.6653 2.41691 16.8286 2.64789 16.94 2.9021C17.0514 3.15632 17.1088 3.42878 17.1088 3.70394C17.1088 3.9791 17.0514 4.25156 16.94 4.50577C16.8286 4.75999 16.6653 4.99097 16.4595 5.18554L5.87842 15.1863L1.56763 16.2975L2.7433 12.2231L13.3243 2.22234Z"
                    stroke="#007B8D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_540">
                    <rect width="18.8107" height="17.7792" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href={"#"}>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_537)">
                  <path
                    d="M2.35132 4.44482H3.91888H16.4594"
                    stroke="#FF3131"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.27029 4.44476V2.96317C6.27029 2.57022 6.43544 2.19337 6.72941 1.91552C7.02339 1.63766 7.4221 1.48157 7.83785 1.48157H10.973C11.3887 1.48157 11.7874 1.63766 12.0814 1.91552C12.3754 2.19337 12.5405 2.57022 12.5405 2.96317V4.44476M14.8919 4.44476V14.8159C14.8919 15.2089 14.7267 15.5857 14.4327 15.8636C14.1388 16.1414 13.7401 16.2975 13.3243 16.2975H5.48651C5.07076 16.2975 4.67205 16.1414 4.37807 15.8636C4.0841 15.5857 3.91895 15.2089 3.91895 14.8159V4.44476H14.8919Z"
                    stroke="#FF3131"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_537">
                    <rect width="18.8107" height="17.7792" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center gap-20">
        {question.answers.map((answer) => (
          <div key={answer.id} className="flex items-center gap-[17px] py-5">
            <div className="w-[28px] h-[28px] rounded-full bg-white border-[2px] border-solid border-primary"></div>
            <p>{answer.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

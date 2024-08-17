import React from "react";
import QuestionCard from "./Question";

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

interface Props {
  questions: Question[];
}

const Questions = ({ questions }: Props) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Questions;

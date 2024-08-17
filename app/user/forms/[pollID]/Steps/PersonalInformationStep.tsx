"use client";
import { InitialState, UpdateData } from "@/app/store/slices/userPollAnswerSlice";
import { RootState } from "@/app/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PersonalInformationStep = () => {
  const {
    name,
    address,
    date_of_birth,
    email,
    employment_status,
    gender,
    age,
    teaching,
  } = useSelector((state: RootState) => state.userPollAnswer);
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      UpdateData({
        name: e.target.name as keyof InitialState,
        newValue: e.target.value,
      })
    );
  };
  return (
    <div>
      <form>
        <div className="mb-7 flex items-center h-[68px] gap-7">
          <label
            className="text-[18px] font-bold text-[#474747] w-[20%]"
            htmlFor="email"
          >
            الأسم{" "}
          </label>
          <div className="flex w-full items-center h-full">
            <input
              value={name}
              className="h-full w-full px-3 bg-[#F5F7F8] focus:outline-none outline-none border-none"
              id="name"
              name="name"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-7 flex items-center h-[68px] gap-7">
          <label
            className="text-[18px] font-bold text-[#474747] w-[20%]"
            htmlFor="email"
          >
            البريد الالكتروني{" "}
          </label>
          <div className="flex w-full items-center h-full">
            <input
              value={email}
              className="h-full w-full px-3 bg-[#F5F7F8] focus:outline-none outline-none border-none"
              id="email"
              name="email"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <hr className="bg-[#F1F1F2] w-[80%] h-[3px] my-5 mr-[10%]" />
        <div className="mb-7 flex items-center h-[68px] gap-7">
          <label
            className="text-[18px] font-bold text-[#474747] w-[20%]"
            htmlFor="email"
          >
            الحالة وظيفية{" "}
          </label>
          <div className="flex w-full items-center h-full">
            <div className="w-full flex justify-center gap-24 items-center">
              <div>
                <label className="flex items-center gap-x-2">
                  <span className="text-[18px] font-bold">طالب</span>
                  <input
                    type="radio"
                    name="employment_status"
                    value="student"
                    checked={employment_status === "student"}
                    className="w-[19px] h-[19px]"
                    onChange={onChange}
                  />
                </label>
              </div>
              <div>
                <label className="flex items-center gap-x-2">
                  <span className="text-[18px] font-bold">موظف</span>
                  <input
                    type="radio"
                    name="employment_status"
                    value="employee"
                    checked={employment_status === "employee"}
                    className="w-[19px] h-[19px]"
                    onChange={onChange}
                  />
                </label>
              </div>
              <div>
                <label className="flex items-center gap-x-2">
                  <span className="text-[18px] font-bold">صاحب عمل</span>
                  <input
                    type="radio"
                    name="employment_status"
                    value="bla"
                    checked={employment_status === "bla"}
                    className="w-[19px] h-[19px]"
                    onChange={onChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-7 flex items-center h-[68px] gap-7">
          <label
            className="text-[18px] font-bold text-[#474747] w-[20%]"
            htmlFor="email"
          >
            التعليم{" "}
          </label>
          <div className="flex w-full items-center h-full">
            <input
              value={teaching}
              className="h-full w-full px-3 bg-[#F5F7F8] focus:outline-none outline-none border-none"
              id="teaching"
              name="teaching"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-7 flex items-center h-[68px] gap-[90px]">
          <div className="w-[50%] h-full flex items-center gap-7">
            <label
              className="text-[18px] font-bold text-[#474747] w-[60%]"
              htmlFor="email"
            >
              تاريخ ولادة{" "}
            </label>{" "}
            <div className="flex w-full items-center h-full">
              <input
                value={date_of_birth}
                className="h-full w-full px-3 bg-[#F5F7F8] focus:outline-none outline-none border-none"
                id="date_of_birth"
                name="date_of_birth"
                type="text"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="w-[50%] h-full flex items-center gap-7">
            <label
              className="text-[18px] font-bold text-[#474747] w-[60%]"
              htmlFor="email"
            >
              العمر{" "}
            </label>{" "}
            <div className="flex w-full items-center h-full">
              <input
                value={age}
                className="h-full w-full px-3 bg-[#F5F7F8] focus:outline-none outline-none border-none"
                id="age"
                name="age"
                type="number"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="mb-7 flex items-center h-[68px] gap-7">
          <label
            className="text-[18px] font-bold text-[#474747] w-[20%]"
            htmlFor="email"
          >
            عنوان السكن{" "}
          </label>
          <div className="flex w-full items-center h-full">
            <input
              value={address}
              className="h-full w-full px-3 bg-[#F5F7F8] focus:outline-none outline-none border-none"
              id="address"
              name="address"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-7 flex items-center h-[68px] gap-7">
          <label
            className="text-[18px] font-bold text-[#474747] w-[20%]"
            htmlFor="email"
          >
            الجنس{" "}
          </label>
          <div className="flex w-full items-center h-full">
            <div className="w-full flex justify-center gap-24 items-center">
              <div>
                <label className="flex items-center gap-x-2">
                  <span className="text-[18px] font-bold">ذكر</span>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={onChange}
                    className="w-[19px] h-[19px]"
                  />
                </label>
              </div>
              <div>
                <label className="flex items-center gap-x-2">
                  <span className="text-[18px] font-bold">أنثى</span>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={onChange}
                    className="w-[19px] h-[19px]"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformationStep;

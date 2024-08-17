"use client";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import useLogin from "../api/useLogin";

interface LoginData {
  username: string;

  password: string;
}

const LoginForm = () => {
  const loginUserMutation = useLogin();
  const { handleBlur, handleChange, touched, values, handleSubmit } =
    useFormik<LoginData>({
      onSubmit(values, formikHelpers) {
        loginUserMutation.mutate(values);
      },
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: yup.object({
        username: yup.string().required("البريد الالكتروني او االاسم مطلوبين"),
        password: yup.string().min(4).max(26).required("كلمة السر مطلوبة"),
      }),
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-9">
          <label
            className="text-[32px] text-slate-grey mb-5 block font-normal"
            htmlFor="email"
          >
            أسم المستخدم او الإيميل
          </label>
          <div className="flex items-center">
            <input
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
              className="bg-bg-grey px-5 h-[100px] rounded-[8px] text-[22px] placeholder:text-[#3F3F444D]  placeholder:text-[24px] w-full focus:outline-none"
              id="username"
              name="username"
              type="text"
              placeholder="youremal@guru.com"
            />
          </div>
        </div>
        <div className="mb-9">
          <label
            className="text-[32px] text-slate-grey mb-4 block font-normal"
            htmlFor="password"
          >
            كلمة المرور
          </label>
          <span className="block text-end mb-3 font-semibold text-[14px]">
            نسيت كلمة المرور ؟
          </span>
          <div className="flex items-center relative">
            <i className="absolute left-7">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_1901)">
                  <path
                    d="M23.0777 24.9036C20.8079 26.3432 18.1746 27.1057 15.4867 27.1014C8.52812 27.1014 2.73875 22.0941 1.52435 15.4865C2.07932 12.4805 3.59132 9.73442 5.83476 7.65807L1.79666 3.62384L3.62277 1.79773L29.1742 27.3504L27.3481 29.1753L23.0764 24.9036H23.0777ZM7.65958 9.48548C5.90574 11.0801 4.68401 13.1749 4.15964 15.4865C4.56266 17.25 5.37179 18.895 6.52262 20.2906C7.67345 21.6863 9.13419 22.794 10.7886 23.5257C12.4429 24.2573 14.2453 24.5926 16.0521 24.505C17.8589 24.4173 19.6203 23.909 21.1961 23.0207L18.5788 20.4035C17.4647 21.1053 16.1451 21.4076 14.8366 21.2609C13.528 21.1142 12.3082 20.5272 11.3771 19.5961C10.446 18.665 9.85896 17.4452 9.71227 16.1366C9.56558 14.8281 9.86794 13.5085 10.5698 12.3944L7.65958 9.48548ZM16.6663 18.4909L12.4823 14.3069C12.2527 14.8915 12.1987 15.5303 12.3268 16.1451C12.455 16.7599 12.7598 17.3239 13.2039 17.768C13.648 18.2121 14.212 18.5169 14.8268 18.6451C15.4416 18.7733 16.0804 18.7192 16.665 18.4896L16.6663 18.4909ZM26.8525 21.4127L25.0057 19.5672C25.8684 18.3377 26.4826 16.9515 26.8138 15.4865C26.4631 13.9504 25.8036 12.5017 24.8756 11.2283C23.9475 9.95503 22.7703 8.88373 21.4153 8.07957C20.0603 7.2754 18.556 6.75517 16.9937 6.55048C15.4314 6.3458 13.8439 6.46094 12.3275 6.88891L10.291 4.85244C11.9003 4.22007 13.6541 3.87163 15.4867 3.87163C22.4453 3.87163 28.2347 8.87893 29.4491 15.4865C29.0536 17.6361 28.1648 19.6647 26.8525 21.4127ZM15.1292 9.68938C15.9507 9.63862 16.7735 9.76303 17.5432 10.0544C18.313 10.3457 19.012 10.7973 19.5939 11.3793C20.1759 11.9612 20.6275 12.6602 20.9188 13.43C21.2102 14.1997 21.3346 15.0225 21.2838 15.844L15.1279 9.68938H15.1292Z"
                    fill="#3F3F44"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_1901">
                    <rect width="30.973" height="30.973" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <input
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="bg-bg-grey text-[22px]  px-5 h-[100px] rounded-[8px] w-full focus:outline-none placeholder:text-[24px] placeholder:text-[#3F3F444D]"
              id="password"
              name="password"
              type="password"
              placeholder="أدخل كلمة المرور"
            />
          </div>
        </div>
        <div>
          <button
            className="h-[100px] bg-primary w-full rounded-[8px] text-text-white text-[32px] font-bold disabled:bg-opacity-60"
            type="submit"
            disabled={loginUserMutation.isPending}
          >
            {loginUserMutation.isPending
              ? "جاري تسجيل الدخول..."
              : "تسجيل دخول"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

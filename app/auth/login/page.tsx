import React from "react";
import authImage from "@/public/images/auth-image.png";
import LoginForm from "./components/LoginForm";
import DynamicImageOverlay from "@/app/ui/DynamicImageOverlay/DynamicImageOverlay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "أستبيان - تسجيل الدخول",
};

const LoginPage = () => {
  return (
    <div className="flex items-stretch flex-row-reverse">
      {/* start left side */}
      <DynamicImageOverlay
        className="w-[492px] hidden lg:flex"
        image={authImage.src}
        component={() => {
          return (
            <div className="text-center">
              <h3 className="text-[62.24px] text-text-white mb-[24px]">
                تسجيل الدخول
              </h3>
              <p className="text-[18px] text-soft-grey">شرح بسيط</p>
            </div>
          );
        }}
      />
      {/* end left side */}

      {/* start right side */}
      <div className="flex-1 p-11">
        <h3 className="text-[96px] text-slate-grey font-light mb-[100px]">
          أهلن بك
        </h3>
        <LoginForm />
        <h5 className="text-[32px] font-normal mt-12">
          ليس لديك حساب ؟ <span className="text-primary">تواصل معنا</span>
        </h5>
        <div className="flex items-center justify-end gap-x-12">
          <p className="text-[18px] font-normal">الدعم الفني</p>
          <p className="text-[18px] font-normal">شروط الخصوصية </p>
        </div>
      </div>
      {/* end right side */}
    </div>
  );
};

export default LoginPage;

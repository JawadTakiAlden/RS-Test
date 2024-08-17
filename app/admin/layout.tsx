import React, { ReactNode } from "react";
import authImage from "@/public/images/auth-image.png";
import DynamicImageOverlay from "../ui/DynamicImageOverlay/DynamicImageOverlay";
import Header from "./components/Header";
const AdminLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main>
      <div className="flex items-stretch flex-row-reverse">
        <DynamicImageOverlay
          className="w-[296px] hidden lg:flex "
          image={authImage.src}
        />
        <div className="flex-1 px-2 md:pl-5 md:pr-14">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;

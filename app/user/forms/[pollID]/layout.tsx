import React, { ReactNode } from "react";
import DynamicImageOverlay from "../../../ui/DynamicImageOverlay/DynamicImageOverlay";
import ClientImage from "@/public/images/client.png";

const UserLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main>
       {children}
    </main>
  );
};

export default UserLayout;

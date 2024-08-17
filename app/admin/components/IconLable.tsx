import React, { ReactNode } from "react";

const IconLable = ({
  component,
  title,
}: {
  component: ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      {component}
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default IconLable;

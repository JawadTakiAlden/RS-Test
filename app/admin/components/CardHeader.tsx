import React, { ReactNode } from "react";

const CardHeader = ({
  title,
  component,
}: {
  title: string;
  component: ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <p className="flex-1 font-semibold">{title}</p>
      {component}
    </div>
  );
};

export default CardHeader;

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NextButton = ({ href }: { href: string }) => {
  return (
    <button className="sticky bottom-0 w-full bg-primary h-[68px] text-white text-[32px] font-semibold">
      <Link className="flex w-full h-full items-center justify-center" href={href}>التالي</Link>
    </button>
  );
};

export default NextButton;

import React, { ReactNode } from "react";
import CardHeader from "./CardHeader";
import IconLable from "./IconLable";
import classNames from "classnames";

const StatisticCard = ({
    className,
    headerCompoent,
    headerTitle,
    children
} : {
    className : string,
    headerTitle : string,
    headerCompoent : ReactNode,
    children : ReactNode

}) => {
  return (
    <div className={classNames("rounded-[20px] p-6" , className)}>
      <CardHeader
        title={headerTitle}
        component={headerCompoent }
      />
      {
        children
      }
      {/* <IconLable
        title="التاريخ"
        component={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.99992 14.6667C4.31992 14.6667 1.33325 11.6867 1.33325 8.00004C1.33325 4.32004 4.31992 1.33337 7.99992 1.33337C11.6866 1.33337 14.6666 4.32004 14.6666 8.00004C14.6666 11.6867 11.6866 14.6667 7.99992 14.6667ZM10.1266 10.4734C10.2066 10.52 10.2933 10.5467 10.3866 10.5467C10.5533 10.5467 10.7199 10.46 10.8133 10.3C10.9533 10.0667 10.8799 9.76004 10.6399 9.61337L8.26658 8.20004V5.12004C8.26658 4.84004 8.03992 4.62004 7.76658 4.62004C7.49325 4.62004 7.26658 4.84004 7.26658 5.12004V8.48671C7.26658 8.66004 7.35992 8.82004 7.51325 8.91337L10.1266 10.4734Z"
              fill="#007B8D"
            />
          </svg>
        }
      />
      <IconLable
        title="23344"
        component={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5294 4.86068C11.5294 6.8187 9.95948 8.38872 8.00008 8.38872C6.04135 8.38872 4.47076 6.8187 4.47076 4.86068C4.47076 2.90266 6.04135 1.33331 8.00008 1.33331C9.95948 1.33331 11.5294 2.90266 11.5294 4.86068ZM8.00008 14.6666C5.10833 14.6666 2.66675 14.1966 2.66675 12.3833C2.66675 10.5693 5.12367 10.1159 8.00008 10.1159C10.8925 10.1159 13.3334 10.5859 13.3334 12.3993C13.3334 14.2133 10.8765 14.6666 8.00008 14.6666Z"
              fill="#007B8D"
            />
          </svg>
        }
      /> */}
    </div>
  );
};

export default StatisticCard;

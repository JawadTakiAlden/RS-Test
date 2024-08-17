import React from "react";
import StatisticCard from "./StatisticCard";
import IconLable from "./IconLable";

const StatisticsCards = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-6 mb-7">
      <div className="w-full md:w-[30%]">
        <StatisticCard
          className="bg-[#E9EDF5] text-primary"
          headerTitle="عدد المشاركين"
          headerCompoent={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 2H14C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6H10C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2ZM6.50733 4.03003C6.50247 4.10272 6.5 4.17607 6.5 4.24999C6.5 6.04491 7.95507 7.49999 9.75 7.49999H14.25C16.0449 7.49999 17.5 6.04491 17.5 4.24999C17.5 4.17607 17.4975 4.10272 17.4927 4.03003C19.4694 4.27282 21 5.95766 21 7.99999V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.99999C3 5.95766 4.53062 4.27282 6.50733 4.03003ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H16C16.4142 14.75 16.75 14.4142 16.75 14C16.75 13.5858 16.4142 13.25 16 13.25H8ZM7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H12C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18Z"
                // fill="#007B8D"
                className="fill-primary"
              />
            </svg>
          }
        >
          <IconLable
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
                  className="fill-primary"
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
                  className="fill-primary"
                />
              </svg>
            }
          />
        </StatisticCard>
      </div>
      <div className="w-full md:w-[30%]">
        <StatisticCard
          className="bg-[#2A2828] text-white"
          headerTitle="عدد المشاركين"
          headerCompoent={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 2H14C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6H10C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2ZM6.50733 4.03003C6.50247 4.10272 6.5 4.17607 6.5 4.24999C6.5 6.04491 7.95507 7.49999 9.75 7.49999H14.25C16.0449 7.49999 17.5 6.04491 17.5 4.24999C17.5 4.17607 17.4975 4.10272 17.4927 4.03003C19.4694 4.27282 21 5.95766 21 7.99999V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.99999C3 5.95766 4.53062 4.27282 6.50733 4.03003ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H16C16.4142 14.75 16.75 14.4142 16.75 14C16.75 13.5858 16.4142 13.25 16 13.25H8ZM7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H12C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18Z"
                // fill="#007B8D"
                className="fill-white"
              />
            </svg>
          }
        >
          <IconLable
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
                  className="fill-white"
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
                  className="fill-white"
                />
              </svg>
            }
          />
        </StatisticCard>
      </div>
      <div className="w-full md:w-[30%]">
        <StatisticCard
          className="bg-primary text-white"
          headerTitle="عدد المشاركين"
          headerCompoent={
            <IconLable
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
                    className="fill-white"
                  />
                </svg>
              }
            />
          }
        >
          <IconLable title="" component={<p>10% زيادة أسبوعية</p>} />
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
                  className="fill-white"
                />
              </svg>
            }
          />
        </StatisticCard>
      </div>
    </div>
  );
};

export default StatisticsCards;

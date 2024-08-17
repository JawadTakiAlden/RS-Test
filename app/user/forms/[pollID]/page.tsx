import classNames from "classnames";
import React, { ReactNode } from "react";
import NextButton from "../NextButton";
import PersonalInformationStep from "./Steps/PersonalInformationStep";
import QuestionStep from "./Steps/QuestionStep";
import ApprovalStep from "./Steps/ApprovalStep";
import Sidebar from "./Sidebar";
import DonStepButton from "./DonStepButton";

interface Props {
  params: {
    pollID: number;
  };
  searchParams: {
    step: number;
  };
}



const UserPollForm = ({
  params: { pollID },
  searchParams: { step },
}: Props) => {
  const steps: {
    id: number;
    title: string;
    icon: ReactNode;
    relatedComponent: ReactNode;
    next: number;
  }[] = [
    {
      id: 1,
      title: "المعاومات الخاصة بك",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="28" height="28" fill="url(#pattern0_5_1203)" />
          <defs>
            <pattern
              id="pattern0_5_1203"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_5_1203" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0_5_1203"
              width="90"
              height="90"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQUlEQVR4nO2cu04EMQxFXcF+Aq9P5NGxKEZKCyhG4qd4VAufgthmq0HZpUAUM4xIYuPcI7kdbQ72HZKRQgQAAAAAAAAAAAAAiGJc0HW6IE4vxLImlsFprSnIMwU5p7OH/bZ/+nhzQixvBiQMTSuk1+3a20iOiy4l8zfZTTp7GxcGFsyalc7qi95lcu+in+qLDulDf6GiW9lBdbQXyUYKogWiSbsL0dHyh7yUDXG6pHh7VGya87OCLHfPRnQMX6KX1eIyPxui5Uv0/WE10fHuwJ5oryPM9kT7HGE2J9rpCLM10SUj4ydBjiG6RXRwuoLo7y/DLBsvw0Jo78i4k8hSF8udRJZB0RuXkaUulo0URAtEk3YXoqNFXxyiQ/SlIqMFopt1VnB6PGtQ9LLaWvGFRfwfz3Y3wmxPtM8RZnOinY4wWxPt9biSrYn2elzJ9kT7PK5ka6K1KjqNLHWx3ElkGRS9cRlZ6mLZSEG0QDRpdyE6WvTFITpEXyoyWiB6siPCL45Vf/NvFjq64EYjjByTQvSU6PvDIsekEF34ZcJ/iKCud4ZzKRFBXX6cnUuJCHLxcVZLdMQx6f+PDvZwTFpONI5JR0XHGSM/9qVDq6pT6oeGGSM/NsIQPSl6M/llBFtwAx3F6Gh9CYyMHtxUdXAd20AhvdcXjQsGh0YXDMq5+tiycgU5rS86X4CaL0LVXixrVVpRjHvUhHy1b5ey02q7S21K7ux862zOK88vyJDXlh63cdGskwEAAAAAAAAAAADINJ8P0eLRYMzH9AAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      ),
      relatedComponent: <PersonalInformationStep />,
      next: 1,
    },
    {
      id: 2,
      title: "الأسئلة",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="28" height="28" fill="url(#pattern0_5_1210)" />
          <defs>
            <pattern
              id="pattern0_5_1210"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_5_1210" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0_5_1210"
              width="90"
              height="90"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE2klEQVR4nO2cS4gcVRSGbzQ6vtCgiKgZ3wtxIegg6CIWTHf9/2F6UBFKEFEUI4jGqItkJYyC0YUaRTdGXPha6MaA6EIXovjeOLpSAqKISmDQmLRGQcaWw8yQyqWqraq+3V1dc364q6pbXfXdv869ffucds5kMplMJpPJZDKZTEcURdEJJO8n+QXJP0j2JqTpvX5OcruITLk6S0Q2A/i6BtAGbV/ps7i6OhnNgJyGXT9ncyVc9JrUANzn6iauxOSmgf7M1U0ku+MGM4TWdXUTxw9lKM3VTawBFAPN8QMzR7MwhC3+WxTH8bUGmkGd9ePCwsIxGRFrA4AfzNEMBvqJPnPDkwaawUBfmQcawIyBZhDI+/y4LCKneq7eZ5MhBwb9sOfgV0je7IF+xEBzMNAictka0JmZmeMA/AbgDQ/+pQaa1SED+NJzLlePdXW30Du2OAzYrm7iEB6S5I70ZwB4PnWs433+TgPNSpD/JXnBGkhdRwP4JeX2F71BmF7tY45mubDxkefYLd7xpSiKNnrnfGygWdpp93oQd/vn6FLPc/U2A81SkP+ZnZ09ywP9EMk96QZgPn2O9tG+NhmyMOh3S83ERw/IewaahUHfXhU0gDsMNAtNgn9HUbSpKmj9ek7yr1CwXd3EQA8G4M30daMoOgXA4T599mbcy14Dzf6gRSTxoN30PwNzOI7jk8v0WfeOBnBofn7+pDQ03dcoAObGjGSegwaaue58NQPYobL9Vl39moFmbtiY82BdXxDWgSRJjvf6dgw0J6e5uok1gGKgOX5gtXF00QRyf1XQ5Nw7nYjduBLI5+bmzs+6Bi2bNHgCeScH9PYGOnpbECdXTCDPTGYRkSnNkh83nIBt0V8yjjqB/Gf9NToH9uaGwF7sdDrnBoNcdRIDcFve9URkSksSNFt+wibILoBPNVwEdXIKdJWb2j/IVua6VFUHAHgnSZJjx33/E6MBX7cXDPZoQPcAvC0iZw7XDg1QiIkEwBLJu5MkOXHcz1NbBZ6539cs/HE/Uy0VCjKApTiOL/SvrzGcZBvAA3EcPxjHMfwMI1W73T5HM0VD3Y+rm4aVWaQSkStIfpMxKN9qpr7zRHKrge7v5p/8AvVWq3URyV/79DsA4JJ0H/2ioGt0c3Q+tGcz3PlWkRWL3w/AUwY6H9p1HqxpAMsFQC+32+3zvL43GOh8YNMerFtKwLrVHyQDnQMr8dbPJYt3Hs34pcdWHRlu/jMjPj9dAtZzGXG6XwrY+lzeAVj29zsA7CpxjcfTfXWvO0SJhKubQrymrVbrjPQ1ReSeEgN1l3c/Z1voyIElIldXKRvWt0HX2x7oawx0PrSdGW/KUd8IATymUNeaxmaSr2f00xIKmwyLVFCptL7EO68rIhenVhcb2+32ac5TqMoqVzeFeCiuhI+r/GvrRlK6eEcHpN8PBX6Jm4HOhvBhFkQRuRzAM3ocwAcag7Mgq8NJfmKgi01uuwZ4s/aEcnOjQwePtN05f8uTKwCnk/zdQFf7X8+5MsBF5E4DXd3d+0m+rEs2BblaA7iD5Esaj9XJKdYbQhZjunUQOnpVS900U7VIzYqBZiXY35P8bq3pJlVTQU9Sflyv4OAddHWTJZCPSJZAPiJZAvkIZQnkI5QlkJtMJpPJZDKZTCaTa57+A0bO5pmU1ONTAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      ),
      relatedComponent: <QuestionStep pollID={pollID} />,
      next: 2,
    },
    {
      id: 3,
      title: "الموافقة",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="28" height="28" fill="url(#pattern0_3_2142)" />
          <defs>
            <pattern
              id="pattern0_3_2142"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_3_2142" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0_3_2142"
              width="90"
              height="90"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFe0lEQVR4nO1cyY4cRRAtYQswZ0BsEtucxnRmRBfIDQcaho7oxoJjsxjulswi2SDZnJDgH2CwuLB+A/uFfRu4wIz4hMEcYJA848MMip6Fdru6a8vszMqqJ8Wlt3rvKToqIzMro6gC0JofVkjnNdCqRv53FECrCvgtrfsPueZXeRyNB3dr4M818s6sUEifKkV3uuZbSQDwAwr4QprJB2YD/4nYv98170pB6/4dCmk9q8ljZl+Qf4Fr/pWBBv4sr8ljZeQL1/wrAdWmpaImH0Rzg0zHaHSRZB7wRY10evG+4zfFcf9mhXRm97XEErKc4VL1hkZaS85UOj35WQX80hSjf3fDvkLQyBtJ5kkmT35WXkvOfvonCh0JzcWOiZByMXktec3U71emCcraXOjio4kzk9dUwC9bvJ5/TVDe5kIXCeCLYrZk8ehmOKrPtGnzml41QUWbC12R8KYJKtNc6IqE8ybISHOBFQmXN8gszUXeYZy2GTOGfV43QXmai0kopO/nbzR/m8rLxyZIMiSJ1KxM3ocCetFBCXg+SsHUsbnLJmiaoCzfXVgYXKOQfp2XyQr5l8XF4dW2dVlBWUKt1uC2eZgtJmu9dOu8dBmHCUILo8zmF6R+Gr5Bbiigb6RcZM1kk7qMwjtCoeryjlCourwjFKou7wiFqss7QqHq8o5QqLq8IxSqLu8IharLO0Kh6rJNCJEXdJue08gfauQVjfSXAr60F7J0tiLvAdApk6sgtTC62+0e1pqf2Wufc7XdCulrAD4xHA4P+aYr8omQQh4o5D/yGnxl0JrWxL7oKg1ThOL4ses08tvlDb4iw893Op0jrnQZgwlCStGNGuhn0yYfmA38I8DghnnrMoqyhJSYPHU5zGTQWh6zgzI6lnJhMZOTMvv2bvda27qsoAwhbaEmZzB7uVZGa008b5P3owX0qC1d1lCEULfbPWxmCFcwgFbTxtlBGK2RnnVm8n4JQXrKtC7/jIbRIqxjo/kr07qsIi8hlLkL48aNtu6elU07e08AnNVIWynf256197nyRgPQKdMmJ93cFPC5DN89aUqXdeQlpHdn4ayanPWRC4X0vild1pGXkJIdQ2ZM3lJIj0+7DmLvltTfAP7JlC7/jAYTj19Mz+T/r0OvZMjodVO6PCwdtJVhnPuuiukYAGuN/JpM8ucxWd7P9mwLbZrSVUGj6Z3J76h2r7+3sX1mubj8s9n+GaZ0Va50qJiOTctSc5lci9LBK7PE34MDVYRHXpPDvxkifTAzy4Bfn4vJu9d6z5Qu6zDdsCjgSwC947ZNDr5hOSqPMSNvpxiwmcXscibztjyIakqXdRQhpDJtI5g9wsg3ukisz1+a1mUVRQgB8ImMf+1Es0ubLNHuP2Fal1UUITQcDg9lX5ClTZkgGnvQ/lzZB+0V0m+1mPgXADCVysgyRrdpKUpBMEbPfLzZatAbUQYEZXSn0zkiWwDmZjLwd7XcbiCQTS1z2UADtBrH3eujjAjO6H2zFdIPNjO59lvCJsrIso2anLVcBJ/R4wDo9/ZOF9spO4TLMrqordECGeO2oPe0bAlIb9cvi23p+BTyk1H06lVRCdTC6HHIlgCZ/JGFVNkQuTufLYsHtCUneMlU5+g9pJOz5i7yonZGu4J3urwjFKou7wiFqss7QqHq8o5QqLq8IxSqrjLHsfmKadvJFNDfzkhNmxBKOoK4Kph2VLLTAwZHh1qnHEEcVQRx2lHJQG86Pf08Q2u8E0K0kB6MXEIhfeLaBG07gD+KXKMOB3W37n3krsgHyPHso0me0ExGWm+1e53IJ8hMW0hlRCF/bHJG0DgAel1ZLZHhkJPDuLFwbMiCgYwunN/4GjRo0KBBgwYNGjRo0CCaI/4Dwk6Zme1t+rAAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      ),
      relatedComponent: <ApprovalStep  />,
      next: -1,
    },
  ];
  const linkStep = step ? +step : 0;
  return (
    <div className="flex relative items-stretch flex-row-reverse">
      <Sidebar pollId={pollID} step={linkStep} totalStep={steps.length - 1} />
      <div className="flex-1 px-2 md:pl-5 md:pr-14 min-h-screen">
        <ul className="mt-14 flex items-center gap-9 w-full mb-10">
          {steps.map((currentStep) => {
            return (
              <li
                key={currentStep.id}
                className="flex items-center gap-8 w-full flex-1 group"
              >
                <div
                  className={classNames(
                    `flex flex-1 flex-col md:flex-row text-[18px] font-semibold items-center gap-4 whitespace-nowrap`,
                    currentStep.id === linkStep + 1
                      ? "text-primary"
                      : "text-text-dark"
                  )}
                >
                  <p>{currentStep.title}</p>
                  <span
                    className={classNames(
                      "h-14 flex items-center justify-center w-14 rounded-full border border-solid",
                      currentStep.id === linkStep + 1
                        ? "border-primary text-primary"
                        : "border-[#474747] text-text-dark"
                    )}
                  >
                    {currentStep.icon}
                  </span>
                </div>
                <span
                  className={classNames(
                    `h-[1px] w-[40px] hidden md:block group-last:hidden `,
                    currentStep.id === linkStep + 1
                      ? "bg-primary"
                      : "bg-[#474747]"
                  )}
                ></span>
              </li>
            );
          })}
        </ul>
        {steps[linkStep].relatedComponent}
        {steps[linkStep].next !== -1 && (
          <NextButton
            href={`/user/forms/${pollID}?step=${steps[linkStep].next}`}
          />
        )}
        {
          steps[linkStep].next === -1 && <DonStepButton /> 
        }
      </div>
    </div>
  );
};

export default UserPollForm;

const yourInformation = (
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
);

const question = (
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
);

const acceptence = (
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
);

const dashboardCard = (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 0H11C12.1046 0 13 0.895431 13 2C13 3.10457 12.1046 4 11 4H7C5.89543 4 5 3.10457 5 2C5 0.895431 5.89543 0 7 0ZM3.50733 2.03003C3.50247 2.10272 3.5 2.17607 3.5 2.24999C3.5 4.04491 4.95507 5.49999 6.75 5.49999H11.25C13.0449 5.49999 14.5 4.04491 14.5 2.24999C14.5 2.17607 14.4975 2.10272 14.4927 2.03003C16.4694 2.27282 18 3.95766 18 5.99999V16C18 18.2091 16.2091 20 14 20H4C1.79086 20 0 18.2091 0 16V5.99999C0 3.95766 1.53062 2.27282 3.50733 2.03003ZM4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H13C13.4142 12.75 13.75 12.4142 13.75 12C13.75 11.5858 13.4142 11.25 13 11.25H5ZM4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
      fill="white"
    />
  </svg>
);

export const notification = (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.7071 6.79645C15.7071 8.05238 16.039 8.79265 16.7695 9.64571C17.3231 10.2742 17.5 11.0809 17.5 11.9561C17.5 12.8304 17.2128 13.6603 16.6373 14.3341C15.884 15.1418 14.8215 15.6575 13.7372 15.7471C12.1659 15.8811 10.5937 15.9939 9.0005 15.9939C7.40634 15.9939 5.83505 15.9264 4.26375 15.7471C3.17846 15.6575 2.11602 15.1418 1.36367 14.3341C0.78822 13.6603 0.5 12.8304 0.5 11.9561C0.5 11.0809 0.677901 10.2742 1.23049 9.64571C1.98384 8.79265 2.29392 8.05238 2.29392 6.79645V6.37042C2.29392 4.68846 2.71333 3.58864 3.577 2.51198C4.86106 0.941819 6.91935 0.00012207 8.95577 0.00012207H9.04522C11.1254 0.00012207 13.2502 0.987141 14.5125 2.62479C15.3314 3.67929 15.7071 4.73278 15.7071 6.37042V6.79645ZM6.07367 18.061C6.07367 17.5574 6.53582 17.3267 6.96318 17.228C7.46309 17.1223 10.5093 17.1223 11.0092 17.228C11.4366 17.3267 11.8987 17.5574 11.8987 18.061C11.8738 18.5404 11.5926 18.9654 11.204 19.2353C10.7001 19.6281 10.1088 19.8769 9.49057 19.9665C9.14868 20.0108 8.81276 20.0118 8.48279 19.9665C7.86362 19.8769 7.27227 19.6281 6.76938 19.2343C6.37978 18.9654 6.09852 18.5404 6.07367 18.061Z"
      fill="#14213D"
    />
  </svg>
);

export const search = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.50167 6.05433C1.50167 3.46699 3.607 1.36233 6.19433 1.36233C8.781 1.36233 10.8863 3.46699 10.8863 6.05433C10.8863 8.64166 8.781 10.747 6.19433 10.747C3.607 10.747 1.50167 8.64166 1.50167 6.05433ZM13.8317 13.027L10.7657 9.96899C11.6697 8.91499 12.2197 7.54899 12.2197 6.05433C12.2197 2.73233 9.51633 0.0289917 6.19433 0.0289917C2.87167 0.0289917 0.168335 2.73233 0.168335 6.05433C0.168335 9.37699 2.87167 12.0803 6.19433 12.0803C7.54234 12.0803 8.78434 11.6297 9.789 10.8783L12.8903 13.971L13.8317 13.027Z"
      fill="#71778E"
    />
  </svg>
);

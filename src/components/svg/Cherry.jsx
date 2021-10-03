import React from "react";
import { css } from '@emotion/core';

const Cherry = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        height="1em"
        css={css`
          {
            &:hover {
              animation: wiggle 1000ms forwards 1 ease-in-out;
            }
          }
        `}>
    <path stroke="null" d="m4.36606,27.77421c-0.11916,0.11719 3.56638,-9.45871 15.30782,-11.70816c11.74145,-2.24946 23.63468,3.6813 23.44563,3.43445c0.18905,0.24686 -5.79115,13.28188 -16.18168,15.27252c-10.39052,1.99064 -22.20559,-5.08741 -22.57178,-6.9988z" strokeWidth="6" fill="#04a043"/>
    <path stroke="#04a043" d="m32.73023,58.90985c4.81685,-10.33997 9.6337,-20.67994 14.45055,-31.0199l19.57372,31.365" fillOpacity="0" strokeWidth="7" fill="none"/>
    <ellipse ry="19.62366" rx="19.62366" cy="80.37633" cx="24.54644" fill="#dd5e3e"/>
    <ellipse ry="17.65415" rx="17.65415" cy="77.4667" cx="77.98257" fill="#dd5e3e"/>
    </svg>
);

export default Cherry;
import React from "react";
import { css } from '@emotion/core';

const Logo = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        height="1em"
        css={css`
          {
            &:hover {
                .hand {
                  animation: lift 800ms forwards 1 ease-in-out;
                }
                .stem {
                  animation: stemgrow 900ms forwards 1 cubic-bezier(0.2, 0.8, 0.2, 1);
                  transform-origin: bottom;
                }
                .leaf1 {
                  animation: leafgrow 1100ms forwards 1 ease-in-out;
                  transform-origin: center;
                }
                .leaf2 {
                  animation: leafgrow 1500ms forwards 1 ease-in-out;
                  transform-origin: center;
                }
            }
          }
        `}>
        <path className="leaf1" stroke="null" d="m7.590672,19.324041c-0.209826,-0.017264 12.589177,-3.612901 23.408541,4.53994c10.819368,8.152843 13.075918,22.107494 13.201801,21.779795c-0.125882,0.327699 -18.240336,4.425227 -27.81487,-2.789581c-9.574529,-7.214805 -10.558686,-21.900889 -8.795472,-23.530153l0,-0.000001z" strokeWidth="6" fill="#04a043"/>
        <path className="leaf2" stroke="null" d="m92.758619,21.283291c0.195674,0.007462 -10.985146,-5.445698 -22.254219,1.977883c-11.269077,7.423582 -15.609478,22.146879 -15.67197,21.778946c0.062493,0.367933 16.047726,7.019928 26.020228,0.450474c9.972496,-6.569451 13.262106,-22.236943 11.905961,-24.207303z" strokeWidth="6" fill="#04a043"/>
        <line className="stem" stroke="#04a043" fill="none" strokeWidth="7" x1="49.999999" y1="46.775131" x2="49.999999" y2="66.532687" strokeLinejoin="null" stroke-linecap="null"/>
        <g className="hand">
          <rect stroke="null" transform="rotate(6.990903854370117 35.540729522704986,89.41365051269534) " height="14.133554" width="42.437271" y="82.346873" x="14.322094" strokeOpacity="null" strokeWidth="6" fill="#c1a562"/>
          <ellipse transform="rotate(6.990903854370117 15.189772605896088,81.49138641357422) " stroke="null" ry="12.453189" rx="12.82752" id="svg_14" cy="81.49139" cx="15.189772" strokeOpacity="null" strokeWidth="6" fill="#c1a562"/>
          <rect stroke="null" transform="rotate(8.59063720703125 31.15126991271974,74.98682403564452) matrix(0.9325529949398143,-0.1404343536973939,0.15990768513737433,0.8189880118671838,0.10925598020380178,20.745110635928043) " height="14.135805" width="36.627923" y="62.815337" x="2.990079" strokeOpacity="null" strokeWidth="6" fill="#c1a562"/>
          <rect stroke="null" transform="rotate(-20.40760612487793 69.89157104492192,87.04108428955077) " height="12.381594" width="35.378905" y="80.850287" x="52.202117" strokeOpacity="null" strokeWidth="6" fill="#c1a562"/>
          <path d="m80.342133,80.771834c0,-3.342192 2.707175,-6.049367 6.049367,-6.049367c3.342192,0 6.049367,2.707175 6.049367,6.049367c0,3.342192 -2.707175,6.049367 -6.049367,6.049367c-3.342192,0 -6.049367,-2.707175 -6.049367,-6.049367z" transform="rotate(6.990903854370117 86.3914947509766,80.77183532714832) " strokeOpacity="null" strokeLinecap="null" strokeLinejoin="null" strokeWidth="6" stroke="null" fillOpacity="null" fill="#c1a562"/>
          <ellipse stroke="null" ry="5.802454" rx="5.802454" cy="74.926634" cx="48.148153" fillOpacity="null" strokeOpacity="null" strokeWidth="6" fill="#c1a562"/>
        </g>

</svg>
);

export default Logo;
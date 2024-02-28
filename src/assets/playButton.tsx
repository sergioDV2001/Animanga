import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const PlayButtonIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {

    return (
        <svg {...props} width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L12.6667 8.5L1 16V1Z" stroke="url(#paint0_linear_625_28)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_625_28" x1="6.83333" y1="1" x2="6.83333" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F22323" />
                    <stop offset="1" stopColor="#9747FF" />
                </linearGradient>
            </defs>
        </svg>
    )
};

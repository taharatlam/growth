import React from 'react'

const Gradientballs = () => {
    return (
        <div className='gradient-balls'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="751"
                height="1735"
                fill="none"
                viewBox="0 0 751 1735"
            >
                <g opacity="0.45">
                    <g filter="url(#a)">
                        <circle cx="614.5" cy="614.5" r="257.5" fill="#BBDCF7"></circle>
                    </g>
                    <g filter="url(#b)">
                        <circle cx="842" cy="1075" r="303" fill="#BBF7E5"></circle>
                    </g>
                </g>
                <defs>
                    <filter
                        id="a"
                        width="1228.4"
                        height="1228.4"
                        x="0.3"
                        y="0.3"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        ></feBlend>
                        <feGaussianBlur
                            result="effect1_foregroundBlur_1662_3978"
                            stdDeviation="178.35"
                        ></feGaussianBlur>
                    </filter>
                    <filter
                        id="b"
                        width="1319.4"
                        height="1319.4"
                        x="182.3"
                        y="415.3"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        ></feBlend>
                        <feGaussianBlur
                            result="effect1_foregroundBlur_1662_3978"
                            stdDeviation="178.35"
                        ></feGaussianBlur>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Gradientballs
import css from "@emotion/css";

const animations = css`
    
    @keyframes wiggle {
        0% {transform: rotate(10deg);}
        25% {transform: rotate(-10deg);}
        50% {transform: rotate(20deg);}
        75% {transform: rotate(-5deg);}
        100% {transform: rotate(0deg);}
    }
    
    @keyframes lift {
        0% {
            transform: translateY(0) rotate(3deg);
        }
        50% {
            transform: translateY(-4px) rotate(-5deg);
        }
        100% {
            transform: translateY(0) rotate(0deg);
        }
    }
    
    @keyframes stemgrow {
        0% {
            stroke-opacity: 0%;
            transform: scaleY(0);
        }
        100% {
            stroke-opacity: 100%;
            transform: scaleY(100%);
        }
    }
    @keyframes leafgrow {
        0% {
            fill-opacity: 0%;
            transform: scale(0);
        }
        75% {
            fill-opacity: 0%;
            transform: scale(25%);
        }
        80% {
            fill-opacity: 100%;
            transform: scale(50%);
        }
        100% {
            fill-opacity: 100%;
            transform: scale(100%);
        }
    }
`

export default animations;
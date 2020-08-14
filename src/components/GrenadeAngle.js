import React from "react";

const GrenadeAngle = ({ grenadeAngle, setGrenadeAngle }) => {
  return (
    <svg
        style={{height: '50%'}}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMin meet"
      version="1.1"
      viewBox="0 0 210 297"
    >
      <g fillRule="evenodd" paintOrder="fill markers stroke">
        <rect
            id='270deg'
            onClick={() => setGrenadeAngle(270)}
            fill={grenadeAngle === 270 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="7.106"
          y="134.56"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
        ></rect>
        <rect
            id='90deg'
            onClick={() => setGrenadeAngle(90)}
            fill={grenadeAngle === 90 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="104.624"
          y="134.56"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
        ></rect>
        <rect
            id='0deg'
            onClick={() => setGrenadeAngle(0)}
            fill={grenadeAngle === 0 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="-139.549"
          y="98.267"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
          transform="rotate(-90.438)"
        ></rect>
        <rect
            id='180deg'
            onClick={() => setGrenadeAngle(180)}
            fill={grenadeAngle === 180 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="-238.735"
          y="98.255"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
          transform="rotate(-90.438)"
        ></rect>
        <rect
            id='45deg'
            onClick={() => setGrenadeAngle(45)}
            fill={grenadeAngle === 45 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="-20.047"
          y="167.218"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
          transform="rotate(-44.102)"
        ></rect>
        <rect
            id='225deg'
            onClick={() => setGrenadeAngle(225)}
            fill={grenadeAngle === 225 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="-122.043"
          y="168.036"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
          transform="rotate(-44.102)"
        ></rect>
        <rect
            id='135deg'
            onClick={() => setGrenadeAngle(135)}
            fill={grenadeAngle === 135 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="173.67"
          y="29.471"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
          transform="rotate(41.762)"
        ></rect>
        <rect
            id='315deg'
            onClick={() => setGrenadeAngle(315)}
            fill={grenadeAngle === 315 ? '#9aff6b' : '#000'}
          width="97.518"
          height="10.583"
          x="71.186"
          y="29.215"
          strokeWidth="0.265"
          opacity="0.998"
          ry="5.292"
          transform="rotate(41.762)"
        ></rect>
        <circle
          cx="104.44"
          cy="139.289"
          r="20"
          strokeWidth="0.207"
          opacity="0.998"
        ></circle>
      </g>
    </svg>
  );
}

export default GrenadeAngle;
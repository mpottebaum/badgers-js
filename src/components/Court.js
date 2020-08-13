import React from "react";
import { courtDimensions } from '../constants/index'

const Court = ({ user, badgers, grenade, gun }) => {
    const renderBadgers = () => {
        return badgers.map(badger => {
            if(badger.alive) {
                return <circle
                    key={badger.id}
                    id={`${badger.name}-${badger.id}`}
                    cx={`${badger.x}`}
                    cy={`${badger.y}`}
                    r={`${badger.radius}`}
                    fill="#000"
                    opacity="0.998"
                ></circle>
            } else return null
        })
    }

    const renderGrenade = () => {
        if(grenade) {
            return <circle
            id='grenade'
            cx={`${grenade.x}`}
            cy={`${grenade.y}`}
            r={`${grenade.radius}`}
            fill={grenade.color}
            opacity="0.998"
        ></circle>
        } else return null
    }

    const renderGun = () => {
        if(gun) {
            return <circle
            id='gun'
            cx={`${gun.x}`}
            cy={`${gun.y}`}
            r={`${gun.radius}`}
            fill="#000"
            opacity="0.998"
        ></circle>
        } else return null
    }

  return (
    <svg
        style={{height: '80vh'}}
      xmlns="http://www.w3.org/2000/svg"
      id="svg1057"
      fill="none"
      stroke="none"
      strokeLinecap="square"
      strokeMiterlimit="10"
      version="1.1"
      viewBox={`0 0 ${courtDimensions.x} ${courtDimensions.y}`}
      x="0"
      y="0"
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMin meet"
    >
      <g
        id="court"
        fillRule="nonzero"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth="2"
        display="inline"
      >
        <path
          id="path966"
          fill="#b45f06"
          stroke="#000"
          d="M5.712 1.081h368.535V657.27H5.712z"
        ></path>
        <path id="path968" stroke="#000" d="M-5.822 329.176h390.583"></path>
        <path
          id="path970"
          stroke="#000"
          d="M147.706 329.175h0c0-23.065 18.698-41.763 41.764-41.763h0a41.764 41.764 0 0141.764 41.764h0c0 23.065-18.699 41.763-41.764 41.763h0c-23.066 0-41.764-18.698-41.764-41.764z"
        ></path>
        <path
          id="path972"
          stroke="#000"
          d="M135.2 1.884h108.284v125.764H135.201z"
        ></path>
        <path id="path974" stroke="#000" d="M135.455 105.068h-4.63"></path>
        <path id="path976" stroke="#000" d="M248.114 105.068h-4.63"></path>
        <path id="path978" stroke="#000" d="M248.114 80.462h-4.63"></path>
        <path id="path980" stroke="#000" d="M135.455 80.462h-4.63"></path>
        <path id="path982" stroke="#000" d="M248.114 36.913h-4.63"></path>
        <path id="path984" stroke="#000" d="M135.455 36.913h-4.63"></path>
        <path
          id="path986"
          fill="#000"
          stroke="#000"
          d="M131.833 55.228h2.615v6.96h-2.615z"
        ></path>
        <path
          id="path988"
          fill="#000"
          stroke="#000"
          d="M244.492 55.228h2.614v6.96h-2.614z"
        ></path>
        <path
          id="path990"
          stroke="#000"
          d="M344.185 31.82a154.3 154.3 0 01-154.786 159.668"
        ></path>
        <path
          id="path992"
          stroke="#000"
          d="M35.773 31.82A154.3 154.3 0 00190.56 191.488"
        ></path>
        <path id="path994" stroke="#000" d="M35.683 34.297V1.825"></path>
        <path id="path996" stroke="#000" d="M344.278 34.297V1.825"></path>
        <path
          id="path998"
          stroke="#000"
          d="M232.272 127.115h0c-.632 23.369-19.839 41.94-43.216 41.784-23.376-.156-42.334-18.98-42.654-42.356"
        ></path>
        <path
          id="path1000"
          stroke="#073763"
          d="M218.416 37.2h0c0 .193-.002.386-.006.58"
        ></path>
        <path id="path1002" stroke="#000" d="M168.521 26.756h42.362"></path>
        <path
          id="path1004"
          stroke="#000"
          d="M183.248 36.78h0c0-3.375 2.729-6.11 6.095-6.11h0c1.616 0 3.166.643 4.309 1.789a6.118 6.118 0 011.785 4.32h0c0 3.375-2.729 6.11-6.094 6.11h0c-3.366 0-6.095-2.735-6.095-6.11z"
        ></path>
        <path id="path1006" stroke="#000" d="M189.314 26.69v3.906"></path>
        <path id="path1008" stroke="#000" d="M160.4 38.357V27.05"></path>
        <path id="path1010" stroke="#000" d="M218.416 37.197V26.77"></path>
        <path
          id="path1012"
          stroke="#000"
          d="M218.416 37.2h0c0 16.02-12.987 29.007-29.008 29.007-16.02 0-29.008-12.987-29.008-29.008"
        ></path>
        <path
          id="path1014"
          stroke="#000"
          d="M135.2 656.982h108.284V531.218H135.201z"
        ></path>
        <path id="path1016" stroke="#000" d="M135.455 553.798h-4.63"></path>
        <path id="path1018" stroke="#000" d="M248.114 553.798h-4.63"></path>
        <path id="path1020" stroke="#000" d="M248.114 578.404h-4.63"></path>
        <path id="path1022" stroke="#000" d="M135.455 578.404h-4.63"></path>
        <path id="path1024" stroke="#000" d="M248.114 621.953h-4.63"></path>
        <path id="path1026" stroke="#000" d="M135.455 621.953h-4.63"></path>
        <path
          id="path1028"
          fill="#000"
          stroke="#000"
          d="M131.833 603.638h2.615v-6.96h-2.615z"
        ></path>
        <path
          id="path1030"
          fill="#000"
          stroke="#000"
          d="M244.492 603.638h2.614v-6.96h-2.614z"
        ></path>
        <path
          id="path1032"
          stroke="#000"
          d="M344.185 627.046a154.3 154.3 0 00-154.786-159.668"
        ></path>
        <path
          id="path1034"
          stroke="#000"
          d="M35.773 627.046A154.3 154.3 0 01190.56 467.378"
        ></path>
        <path id="path1036" stroke="#000" d="M35.683 624.569v32.472"></path>
        <path id="path1038" stroke="#000" d="M344.278 624.569v32.472"></path>
        <path
          id="path1040"
          stroke="#000"
          d="M232.272 531.75h0c-.632-23.368-19.839-41.939-43.216-41.783-23.376.156-42.334 18.98-42.654 42.356"
        ></path>
        <path
          id="path1042"
          stroke="#073763"
          d="M218.416 621.667h0c0-.194-.002-.387-.006-.58"
        ></path>
        <path id="path1044" stroke="#000" d="M168.521 632.11h42.362"></path>
        <path
          id="path1046"
          stroke="#000"
          d="M183.248 622.087h0c0 3.374 2.729 6.11 6.095 6.11h0a6.087 6.087 0 004.309-1.79 6.118 6.118 0 001.785-4.32h0c0-3.375-2.729-6.11-6.094-6.11h0c-3.366 0-6.095 2.735-6.095 6.11z"
        ></path>
        <path id="path1048" stroke="#000" d="M189.314 632.176v-3.905"></path>
        <path id="path1050" stroke="#000" d="M160.4 620.51v11.306"></path>
        <path id="path1052" stroke="#000" d="M218.416 621.67v10.425"></path>
        <path
          id="path1054"
          stroke="#000"
          d="M218.416 621.667h0c0-16.02-12.987-29.008-29.008-29.008-16.02 0-29.008 12.987-29.008 29.008"
        ></path>
      </g>
      <g id="layer1" fillRule="evenodd" paintOrder="fill markers stroke">
        <circle
            style={user.alive ? {} : {display: 'none'}}
            id="path1070"
            cx={`${user.x}`}
            cy={`${user.y}`}
            r={`${user.radius}`}
            fill="#f9f9f9"
            opacity="0.998"
        ></circle>
        {renderBadgers()}
        {renderGrenade()}
        {renderGun()}
      </g>
    </svg>
  );
}

export default Court;
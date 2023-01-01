import React from 'react'
import { StyledWebGradients } from 'styled-webgradients/utils'

import { $styles } from './styles'
import { Svg } from 'components/svg'
import { cssText } from 'lib/format'

const sw = new StyledWebGradients()

type DevicesProps = {
  title?: string
  desc?: string
  rawStyles?: string
  rawContent?: string
  imgSrc?: string
}

export const DeviceIphoneX = (props: DevicesProps) => {
  return (
    <div className="relative h-full w-full">
      <div
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        className="absolute webgradients-bg h-full w-full z-0"
      />
      <div className="flex justify-between items-center w-full h-full p-24">
        <div className="text-left relative">
          <h1 className="text-white text-7xl font-bold">{props.title}</h1>
          <p className="text-gray-200 text-4xl">{props.desc}</p>
        </div>
        <div className="drop-shadow-md device device-iphone-x">
          <div className="device-frame">
            <img className="device-screen" src={props.imgSrc} />
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      </div>
    </div>
  )
}

export const DeviceIPadPro = (props: DevicesProps) => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div className="absolute webgradients-bg h-full w-full z-0" />
      <div className="drop-shadow-md scale-150 origin-center transform -rotate-90 device device-ipad-pro">
        <div className="device-frame">
          <img className="device-screen" src={props.imgSrc} />
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
        <div className="device-home"></div>
      </div>
    </div>
  )
}

export const Devices = (props: DevicesProps) => {
  const gradientCss = sw.unstable_buildRadialGradient('HappyFisher')
  return (
    <Svg
      responsive={true}
      style={
        <style
          dangerouslySetInnerHTML={{
            __html: `
    ${$styles}
    ${props.rawStyles}
    .webgradients-bg {
      ${cssText(gradientCss)}
    }
    .webgradients-bg {
      background-color: #f8fafc;
      animation: move 30s cubic-bezier(.62,0,.45,.99) infinite;
      background-size: 120%;
      width: 120%;
      height: 120%;
    }
    @media (prefers-color-scheme: dark) {
      .webgradients-bg {
        background-color: #0f172a;
      }
    }
    `,
          }}
        />
      }
    >
      <div
        style={{ width: '100%', height: '100%' }}
        dangerouslySetInnerHTML={{ __html: props.rawContent ?? '' }}
      />
    </Svg>
  )
}

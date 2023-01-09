import { css } from 'styled-components'
export const $styles = css`
  /*! Devices.css v0.2.0 | MIT License | github.com/picturepan2/devices.css */
  .device,
  .device::before,
  .device::after,
  .device *,
  .device *::before,
  .device *::after {
    box-sizing: border-box;
    display: block;
  }

  .device {
    position: relative;
    transform: scale(1);
    z-index: 1;
  }

  .device .device-frame {
    z-index: 1;
  }

  .device .device-screen {
    background-color: #000;
    background-position: center center;
    background-size: cover;
    object-fit: cover;
    position: relative;
  }

  .device-iphone-14-pro {
    height: calc(var(--tw-scale-x) * 868px);
    width: calc(var(--tw-scale-x) * 428px);
  }

  .device-iphone-14-pro .device-frame {
    background: #010101;
    border: calc(var(--tw-scale-x) * 1px) solid #1b1721;
    border-radius: calc(var(--tw-scale-x) * 68px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) #c0b7cd,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #342c3f;
    height: calc(var(--tw-scale-x) * 868px);
    padding: calc(var(--tw-scale-x) * 19px);
    width: calc(var(--tw-scale-x) * 428px);
  }

  .device-iphone-14-pro .device-screen {
    border-radius: calc(var(--tw-scale-x) * 49px);
    height: calc(var(--tw-scale-x) * 830px);
    width: calc(var(--tw-scale-x) * 390px);
  }

  .device-iphone-14-pro .device-stripe::after,
  .device-iphone-14-pro .device-stripe::before {
    border: solid rgba(1, 1, 1, 0.25);
    border-width: 0 calc(var(--tw-scale-x) * 7px);
    content: '';
    height: calc(var(--tw-scale-x) * 7px);
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-14-pro .device-stripe::after {
    top: calc(var(--tw-scale-x) * 85px);
  }

  .device-iphone-14-pro .device-stripe::before {
    bottom: calc(var(--tw-scale-x) * 85px);
  }

  .device-iphone-14-pro .device-header {
    background: #010101;
    border-radius: calc(var(--tw-scale-x) * 20px);
    height: calc(var(--tw-scale-x) * 35px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -60px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 29px);
    width: calc(var(--tw-scale-x) * 120px);
  }

  .device-iphone-14-pro .device-sensors::after,
  .device-iphone-14-pro .device-sensors::before {
    content: '';
    position: absolute;
  }

  .device-iphone-14-pro .device-sensors::after {
    background: #010101;
    border-radius: calc(var(--tw-scale-x) * 17px);
    height: calc(var(--tw-scale-x) * 33px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -60px);
    top: calc(var(--tw-scale-x) * 30px);
    width: calc(var(--tw-scale-x) * 74px);
  }

  .device-iphone-14-pro .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%),
      radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 1px)
      rgba(255, 255, 255, 0.05);
    height: calc(var(--tw-scale-x) * 9px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * 36px);
    top: calc(var(--tw-scale-x) * 42px);
    width: calc(var(--tw-scale-x) * 9px);
  }

  .device-iphone-14-pro .device-btns {
    background: #1b1721;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 32px);
    left: calc(var(--tw-scale-x) * -2px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 115px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-14-pro .device-btns::after,
  .device-iphone-14-pro .device-btns::before {
    background: #1b1721;
    border-radius: calc(var(--tw-scale-x) * 2px);
    content: '';
    height: calc(var(--tw-scale-x) * 62px);
    left: 0;
    position: absolute;
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-14-pro .device-btns::after {
    top: calc(var(--tw-scale-x) * 60px);
  }

  .device-iphone-14-pro .device-btns::before {
    top: calc(var(--tw-scale-x) * 140px);
  }

  .device-iphone-14-pro .device-power {
    background: #1b1721;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 100px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -2px);
    top: calc(var(--tw-scale-x) * 200px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-14-pro .device-home::after,
  .device-iphone-14-pro .device-home::before {
    border: solid rgba(1, 1, 1, 0.25);
    border-width: calc(var(--tw-scale-x) * 6px) 0;
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 6px);
    z-index: 9;
  }

  .device-iphone-14-pro .device-home::after {
    right: calc(var(--tw-scale-x) * 86px);
    top: 0;
  }

  .device-iphone-14-pro .device-home::before {
    bottom: 0;
    left: calc(var(--tw-scale-x) * 86px);
  }

  .device-iphone-14-pro.device-silver .device-frame {
    border-color: #c8cacb;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) white,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #e2e3e4;
  }

  .device-iphone-14-pro.device-silver .device-btns {
    background: #c8cacb;
  }

  .device-iphone-14-pro.device-silver .device-btns::after,
  .device-iphone-14-pro.device-silver .device-btns::before {
    background: #c8cacb;
  }

  .device-iphone-14-pro.device-silver .device-power {
    background: #c8cacb;
  }

  .device-iphone-14-pro.device-black .device-frame {
    border-color: #5c5956;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) white,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #76726f;
  }

  .device-iphone-14-pro.device-black .device-btns {
    background: #5c5956;
  }

  .device-iphone-14-pro.device-black .device-btns::after,
  .device-iphone-14-pro.device-black .device-btns::before {
    background: #5c5956;
  }

  .device-iphone-14-pro.device-black .device-power {
    background: #5c5956;
  }

  .device-iphone-14-pro.device-gold .device-frame {
    border-color: #e7d19e;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) white,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #d2ab4c;
  }

  .device-iphone-14-pro.device-gold .device-btns {
    background: #e7d19e;
  }

  .device-iphone-14-pro.device-gold .device-btns::after,
  .device-iphone-14-pro.device-gold .device-btns::before {
    background: #e7d19e;
  }

  .device-iphone-14-pro.device-gold .device-power {
    background: #e7d19e;
  }

  .device-iphone-14 {
    height: calc(var(--tw-scale-x) * 868px);
    width: calc(var(--tw-scale-x) * 428px);
  }

  .device-iphone-14 .device-frame {
    background: #010101;
    border: calc(var(--tw-scale-x) * 1px) solid #101315;
    border-radius: calc(var(--tw-scale-x) * 68px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) #b0b8c0,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #272c31;
    height: calc(var(--tw-scale-x) * 868px);
    padding: calc(var(--tw-scale-x) * 19px);
    width: calc(var(--tw-scale-x) * 428px);
  }

  .device-iphone-14 .device-screen {
    border-radius: calc(var(--tw-scale-x) * 49px);
    height: calc(var(--tw-scale-x) * 830px);
    width: calc(var(--tw-scale-x) * 390px);
  }

  .device-iphone-14 .device-stripe::after,
  .device-iphone-14 .device-stripe::before {
    border: solid rgba(1, 1, 1, 0.25);
    border-width: 0 calc(var(--tw-scale-x) * 7px);
    content: '';
    height: calc(var(--tw-scale-x) * 7px);
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-14 .device-stripe::after {
    top: calc(var(--tw-scale-x) * 85px);
  }

  .device-iphone-14 .device-stripe::before {
    bottom: calc(var(--tw-scale-x) * 85px);
  }

  .device-iphone-14 .device-header {
    background: #010101;
    border-bottom-left-radius: calc(var(--tw-scale-x) * 20px);
    border-bottom-right-radius: calc(var(--tw-scale-x) * 20px);
    height: calc(var(--tw-scale-x) * 30px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -80px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 20px);
    width: calc(var(--tw-scale-x) * 160px);
  }

  .device-iphone-14 .device-header::after,
  .device-iphone-14 .device-header::before {
    content: '';
    height: calc(var(--tw-scale-x) * 10px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 10px);
  }

  .device-iphone-14 .device-header::after {
    background: radial-gradient(
      circle at bottom left,
      transparent 0,
      transparent 75%,
      #010101 75%,
      #010101 100%
    );
    left: calc(var(--tw-scale-x) * -10px);
  }

  .device-iphone-14 .device-header::before {
    background: radial-gradient(
      circle at bottom right,
      transparent 0,
      transparent 75%,
      #010101 75%,
      #010101 100%
    );
    right: calc(var(--tw-scale-x) * -10px);
  }

  .device-iphone-14 .device-sensors::after,
  .device-iphone-14 .device-sensors::before {
    content: '';
    position: absolute;
  }

  .device-iphone-14 .device-sensors::after {
    background: #151515;
    border: calc(var(--tw-scale-x) * 1px) solid #010101;
    border-radius: calc(var(--tw-scale-x) * 4px);
    box-shadow: 0 0 calc(var(--tw-scale-x) * 4px) #151515;
    height: calc(var(--tw-scale-x) * 7px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -35px);
    top: calc(var(--tw-scale-x) * 8px);
    width: calc(var(--tw-scale-x) * 70px);
  }

  .device-iphone-14 .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%),
      radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 1px)
      rgba(255, 255, 255, 0.05);
    height: calc(var(--tw-scale-x) * 9px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -60px);
    top: calc(var(--tw-scale-x) * 26px);
    width: calc(var(--tw-scale-x) * 9px);
  }

  .device-iphone-14 .device-btns {
    background: #101315;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 32px);
    left: calc(var(--tw-scale-x) * -2px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 115px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-14 .device-btns::after,
  .device-iphone-14 .device-btns::before {
    background: #101315;
    border-radius: calc(var(--tw-scale-x) * 2px);
    content: '';
    height: calc(var(--tw-scale-x) * 62px);
    left: 0;
    position: absolute;
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-14 .device-btns::after {
    top: calc(var(--tw-scale-x) * 60px);
  }

  .device-iphone-14 .device-btns::before {
    top: calc(var(--tw-scale-x) * 140px);
  }

  .device-iphone-14 .device-power {
    background: #101315;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 100px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -2px);
    top: calc(var(--tw-scale-x) * 200px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-14 .device-home::after,
  .device-iphone-14 .device-home::before {
    border: solid rgba(1, 1, 1, 0.25);
    border-width: calc(var(--tw-scale-x) * 6px) 0;
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 6px);
    z-index: 9;
  }

  .device-iphone-14 .device-home::after {
    right: calc(var(--tw-scale-x) * 86px);
    top: 0;
  }

  .device-iphone-14 .device-home::before {
    bottom: 0;
    left: calc(var(--tw-scale-x) * 86px);
  }

  .device-iphone-14.device-purple .device-frame {
    border-color: #af9bbf;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) white,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #c8bad3;
  }

  .device-iphone-14.device-purple .device-btns {
    background: #af9bbf;
  }

  .device-iphone-14.device-purple .device-btns::after,
  .device-iphone-14.device-purple .device-btns::before {
    background: #af9bbf;
  }

  .device-iphone-14.device-purple .device-power {
    background: #af9bbf;
  }

  .device-iphone-14.device-starlight .device-frame {
    border-color: #bdb4aa;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) white,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #d3cdc7;
  }

  .device-iphone-14.device-starlight .device-btns {
    background: #bdb4aa;
  }

  .device-iphone-14.device-starlight .device-btns::after,
  .device-iphone-14.device-starlight .device-btns::before {
    background: #bdb4aa;
  }

  .device-iphone-14.device-starlight .device-power {
    background: #bdb4aa;
  }

  .device-iphone-14.device-red .device-frame {
    border-color: #d11813;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) white,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #ec302b;
  }

  .device-iphone-14.device-red .device-btns {
    background: #d11813;
  }

  .device-iphone-14.device-red .device-btns::after,
  .device-iphone-14.device-red .device-btns::before {
    background: #d11813;
  }

  .device-iphone-14.device-red .device-power {
    background: #d11813;
  }

  .device-iphone-14.device-blue .device-frame {
    border-color: #7992aa;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) white,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #98abbe;
  }

  .device-iphone-14.device-blue .device-btns {
    background: #7992aa;
  }

  .device-iphone-14.device-blue .device-btns::after,
  .device-iphone-14.device-blue .device-btns::before {
    background: #7992aa;
  }

  .device-iphone-14.device-blue .device-power {
    background: #7992aa;
  }

  .device-iphone-x {
    height: calc(var(--tw-scale-x) * 868px);
    width: calc(var(--tw-scale-x) * 428px);
  }

  .device-iphone-x .device-frame {
    background: #222;
    border-radius: calc(var(--tw-scale-x) * 68px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px) #c8cacb,
      inset 0 0 0 calc(var(--tw-scale-x) * 7px) #e2e3e4;
    height: calc(var(--tw-scale-x) * 868px);
    padding: calc(var(--tw-scale-x) * 28px);
    width: calc(var(--tw-scale-x) * 428px);
  }

  .device-iphone-x .device-screen {
    border-radius: calc(var(--tw-scale-x) * 40px);
    height: calc(var(--tw-scale-x) * 812px);
    width: calc(var(--tw-scale-x) * 375px);
  }

  .device-iphone-x .device-stripe::after,
  .device-iphone-x .device-stripe::before {
    border: solid rgba(1, 1, 1, 0.25);
    border-width: 0 calc(var(--tw-scale-x) * 7px);
    content: '';
    height: calc(var(--tw-scale-x) * 7px);
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-x .device-stripe::after {
    top: calc(var(--tw-scale-x) * 85px);
  }

  .device-iphone-x .device-stripe::before {
    bottom: calc(var(--tw-scale-x) * 85px);
  }

  .device-iphone-x .device-header {
    background: #222;
    border-bottom-left-radius: calc(var(--tw-scale-x) * 20px);
    border-bottom-right-radius: calc(var(--tw-scale-x) * 20px);
    height: calc(var(--tw-scale-x) * 30px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -102px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 28px);
    width: calc(var(--tw-scale-x) * 204px);
  }

  .device-iphone-x .device-header::after,
  .device-iphone-x .device-header::before {
    content: '';
    height: calc(var(--tw-scale-x) * 10px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 10px);
  }

  .device-iphone-x .device-header::after {
    background: radial-gradient(
      circle at bottom left,
      transparent 0,
      transparent 75%,
      #222 75%,
      #222 100%
    );
    left: calc(var(--tw-scale-x) * -10px);
  }

  .device-iphone-x .device-header::before {
    background: radial-gradient(
      circle at bottom right,
      transparent 0,
      transparent 75%,
      #222 75%,
      #222 100%
    );
    right: calc(var(--tw-scale-x) * -10px);
  }

  .device-iphone-x .device-sensors::after,
  .device-iphone-x .device-sensors::before {
    content: '';
    position: absolute;
  }

  .device-iphone-x .device-sensors::after {
    background: #333;
    border-radius: calc(var(--tw-scale-x) * 3px);
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -25px);
    top: calc(var(--tw-scale-x) * 32px);
    width: calc(var(--tw-scale-x) * 50px);
  }

  .device-iphone-x .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%),
      radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 1px)
      rgba(255, 255, 255, 0.05);
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * 42px);
    top: calc(var(--tw-scale-x) * 30px);
    width: calc(var(--tw-scale-x) * 10px);
  }

  .device-iphone-x .device-btns {
    background: #c8cacb;
    height: calc(var(--tw-scale-x) * 32px);
    left: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 115px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-x .device-btns::after,
  .device-iphone-x .device-btns::before {
    background: #c8cacb;
    content: '';
    height: calc(var(--tw-scale-x) * 62px);
    left: 0;
    position: absolute;
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-x .device-btns::after {
    top: calc(var(--tw-scale-x) * 60px);
  }

  .device-iphone-x .device-btns::before {
    top: calc(var(--tw-scale-x) * 140px);
  }

  .device-iphone-x .device-power {
    background: #c8cacb;
    height: calc(var(--tw-scale-x) * 100px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -3px);
    top: calc(var(--tw-scale-x) * 200px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-8 {
    height: calc(var(--tw-scale-x) * 871px);
    width: calc(var(--tw-scale-x) * 419px);
  }

  .device-iphone-8 .device-frame {
    background: #fff;
    border-radius: calc(var(--tw-scale-x) * 68px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8cacb,
      inset 0 0 0 calc(var(--tw-scale-x) * 7px) #e2e3e4;
    height: calc(var(--tw-scale-x) * 871px);
    padding: calc(var(--tw-scale-x) * 102px) calc(var(--tw-scale-x) * 22px);
    width: calc(var(--tw-scale-x) * 419px);
  }

  .device-iphone-8 .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #222;
    border-radius: calc(var(--tw-scale-x) * 4px);
    height: calc(var(--tw-scale-x) * 667px);
    width: calc(var(--tw-scale-x) * 375px);
  }

  .device-iphone-8 .device-stripe::after,
  .device-iphone-8 .device-stripe::before {
    border: solid rgba(51, 51, 51, 0.15);
    border-width: 0 calc(var(--tw-scale-x) * 7px);
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-8 .device-stripe::after {
    top: calc(var(--tw-scale-x) * 68px);
  }

  .device-iphone-8 .device-stripe::before {
    bottom: calc(var(--tw-scale-x) * 68px);
  }

  .device-iphone-8 .device-home {
    border: calc(var(--tw-scale-x) * 2px) solid #c8cacb;
    border-radius: 50%;
    bottom: calc(var(--tw-scale-x) * 25px);
    height: calc(var(--tw-scale-x) * 58px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -29px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 58px);
  }

  .device-iphone-8 .device-sensors {
    background: #666;
    border-radius: calc(var(--tw-scale-x) * 3px);
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -38px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 52px);
    width: calc(var(--tw-scale-x) * 76px);
  }

  .device-iphone-8 .device-sensors::after,
  .device-iphone-8 .device-sensors::before {
    background: #666;
    border-radius: 50%;
    content: '';
    position: absolute;
  }

  .device-iphone-8 .device-sensors::after {
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -5px);
    top: calc(var(--tw-scale-x) * -25px);
    width: calc(var(--tw-scale-x) * 10px);
  }

  .device-iphone-8 .device-sensors::before {
    height: calc(var(--tw-scale-x) * 12px);
    left: calc(var(--tw-scale-x) * -42px);
    margin-top: calc(var(--tw-scale-x) * -6px);
    top: 50%;
    width: calc(var(--tw-scale-x) * 12px);
  }

  .device-iphone-8 .device-btns {
    background: #c8cacb;
    height: calc(var(--tw-scale-x) * 30px);
    left: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 102px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-8 .device-btns::after,
  .device-iphone-8 .device-btns::before {
    background: #c8cacb;
    content: '';
    height: calc(var(--tw-scale-x) * 56px);
    left: 0;
    position: absolute;
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-8 .device-btns::after {
    top: calc(var(--tw-scale-x) * 62px);
  }

  .device-iphone-8 .device-btns::before {
    top: calc(var(--tw-scale-x) * 132px);
  }

  .device-iphone-8 .device-power {
    background: #c8cacb;
    height: calc(var(--tw-scale-x) * 80px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -2px);
    top: calc(var(--tw-scale-x) * 160px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-iphone-8.device-gold .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #e4b08a,
      inset 0 0 0 calc(var(--tw-scale-x) * 7px) #f7e8dd;
  }

  .device-iphone-8.device-gold .device-home {
    border-color: #e4b08a;
  }

  .device-iphone-8.device-gold .device-btns,
  .device-iphone-8.device-gold .device-btns::after,
  .device-iphone-8.device-gold .device-btns::before {
    background: #e4b08a;
  }

  .device-iphone-8.device-gold .device-power {
    background: #e4b08a;
  }

  .device-iphone-8.device-spacegray .device-frame {
    background: #222;
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #74747a,
      inset 0 0 0 calc(var(--tw-scale-x) * 7px) #9b9ba0;
  }

  .device-iphone-8.device-spacegray .device-stripe::after,
  .device-iphone-8.device-spacegray .device-stripe::before {
    border-color: rgba(204, 204, 204, 0.35);
  }

  .device-iphone-8.device-spacegray .device-btns,
  .device-iphone-8.device-spacegray .device-btns::after,
  .device-iphone-8.device-spacegray .device-btns::before {
    background: #74747a;
  }

  .device-the-iphone {
    height: calc(var(--tw-scale-x) * 610px);
    width: calc(var(--tw-scale-x) * 320px);
  }

  .device-the-iphone .device-frame {
    background: #010101;
    border: calc(var(--tw-scale-x) * 1px) solid darkgray;
    border-radius: calc(var(--tw-scale-x) * 56px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 3px) #010101,
      inset 0 0 calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 13px) #f5f5f5;
    height: calc(var(--tw-scale-x) * 610px);
    padding: calc(var(--tw-scale-x) * 100px) calc(var(--tw-scale-x) * 22px);
    width: calc(var(--tw-scale-x) * 320px);
  }

  .device-the-iphone .device-frame::before {
    border: calc(var(--tw-scale-x) * 8px) solid #010101;
    border-left-width: calc(var(--tw-scale-x) * 2px);
    border-radius: calc(var(--tw-scale-x) * 48px);
    border-right-width: calc(var(--tw-scale-x) * 2px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 2px) #010101;
    content: '';
    height: calc(var(--tw-scale-x) * 594px);
    left: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 9px);
    width: calc(var(--tw-scale-x) * 316px);
  }

  .device-the-iphone .device-frame::after {
    border: calc(var(--tw-scale-x) * 4px) solid gainsboro;
    border-radius: calc(var(--tw-scale-x) * 38px);
    content: '';
    height: calc(var(--tw-scale-x) * 590px);
    left: calc(var(--tw-scale-x) * 13px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 11px);
    width: calc(var(--tw-scale-x) * 294px);
  }

  .device-the-iphone .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #272727;
    border-radius: calc(var(--tw-scale-x) * 4px);
    height: calc(var(--tw-scale-x) * 410px);
    width: calc(var(--tw-scale-x) * 276px);
  }

  .device-the-iphone .device-sensors::before {
    background: linear-gradient(to bottom, #272727 50%, rgba(220, 220, 220, 0.25) 50%, darkgray);
    border-radius: calc(var(--tw-scale-x) * 5px);
    content: '';
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -28px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 52px);
    width: calc(var(--tw-scale-x) * 56px);
  }

  .device-the-iphone .device-sensors::after {
    background: #272727;
    border: calc(var(--tw-scale-x) * 1px) solid #010101;
    border-radius: calc(var(--tw-scale-x) * 3px);
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -26px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 54px);
    width: calc(var(--tw-scale-x) * 52px);
  }

  .device-the-iphone .device-btns {
    background: dimgray;
    border-radius: calc(var(--tw-scale-x) * 2px) 0 0 calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 30px);
    left: calc(var(--tw-scale-x) * -2px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 60px);
    width: calc(var(--tw-scale-x) * 2px);
  }

  .device-the-iphone .device-btns::after,
  .device-the-iphone .device-btns::before {
    background: dimgray;
    content: '';
    height: calc(var(--tw-scale-x) * 56px);
    left: 0;
    position: absolute;
    width: calc(var(--tw-scale-x) * 2px);
  }

  .device-the-iphone .device-btns::after {
    border-radius: calc(var(--tw-scale-x) * 2px) 0 0 50%;
    top: calc(var(--tw-scale-x) * 50px);
  }

  .device-the-iphone .device-btns::before {
    border-radius: 50% 0 0 calc(var(--tw-scale-x) * 2px);
    top: calc(var(--tw-scale-x) * 131px);
  }

  .device-the-iphone .device-home {
    background: radial-gradient(
      circle at top center,
      #010101 70%,
      rgba(220, 220, 220, 0.25) 70%,
      darkgray
    );
    border: calc(var(--tw-scale-x) * 1px) solid #292929;
    border-radius: 50%;
    bottom: calc(var(--tw-scale-x) * 28px);
    height: calc(var(--tw-scale-x) * 56px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -28px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 56px);
  }

  .device-the-iphone .device-home::before {
    border: calc(var(--tw-scale-x) * 1px) solid gainsboro;
    border-radius: calc(var(--tw-scale-x) * 4px);
    content: '';
    height: calc(var(--tw-scale-x) * 20px);
    left: calc(var(--tw-scale-x) * 17px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 17px);
    width: calc(var(--tw-scale-x) * 20px);
  }

  .device-the-iphone .device-power {
    background: dimgray;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px) 0 0;
    height: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 52px);
    top: calc(var(--tw-scale-x) * -2px);
    width: calc(var(--tw-scale-x) * 52px);
  }

  .device-google-pixel-6-pro {
    height: calc(var(--tw-scale-x) * 862px);
    width: calc(var(--tw-scale-x) * 404px);
  }

  .device-google-pixel-6-pro .device-frame {
    background: #121212;
    border-radius: calc(var(--tw-scale-x) * 28px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 12px) #8d8d86,
      inset 0 calc(var(--tw-scale-x) * 7px) 0 calc(var(--tw-scale-x) * 3px) #fdfdfc,
      inset 0 calc(var(--tw-scale-x) * -6px) 0 calc(var(--tw-scale-x) * 3px) #fdfdfc;
    height: calc(var(--tw-scale-x) * 862px);
    margin: 0 calc(var(--tw-scale-x) * 2px);
    padding: calc(var(--tw-scale-x) * 20px) calc(var(--tw-scale-x) * 12px)
      calc(var(--tw-scale-x) * 26px) calc(var(--tw-scale-x) * 12px);
    width: calc(var(--tw-scale-x) * 400px);
  }

  .device-google-pixel-6-pro .device-screen {
    border-radius: calc(var(--tw-scale-x) * 27px);
    height: calc(var(--tw-scale-x) * 816px);
    width: calc(var(--tw-scale-x) * 376px);
  }

  .device-google-pixel-6-pro .device-header {
    background: linear-gradient(to bottom, #8d8d86 0, #cbcbc8 30%, #cbcbc8 100%);
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -147px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 294px);
  }

  .device-google-pixel-6-pro .device-stripe::after {
    background: linear-gradient(to top, #121212, #666661);
    border-radius: calc(var(--tw-scale-x) * 50px) calc(var(--tw-scale-x) * 50px) 0 0;
    bottom: 0;
    content: '';
    height: calc(var(--tw-scale-x) * 2px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -22px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 44px);
  }

  .device-google-pixel-6-pro .device-stripe::before {
    background: #cbcbc8;
    bottom: 0;
    content: '';
    height: calc(var(--tw-scale-x) * 9px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * 40px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 11px);
  }

  .device-google-pixel-6-pro .device-sensors {
    background: #121212;
    border-radius: 50%;
    height: calc(var(--tw-scale-x) * 22px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -11px);
    margin-top: calc(var(--tw-scale-x) * -11px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 39px);
    width: calc(var(--tw-scale-x) * 22px);
  }

  .device-google-pixel-6-pro .device-sensors::after,
  .device-google-pixel-6-pro .device-sensors::before {
    content: '';
    position: absolute;
  }

  .device-google-pixel-6-pro .device-sensors::after {
    background: linear-gradient(to bottom, #121212, #666661);
    border-radius: 0 0 calc(var(--tw-scale-x) * 50px) calc(var(--tw-scale-x) * 50px);
    height: calc(var(--tw-scale-x) * 4px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -103px);
    top: calc(var(--tw-scale-x) * -18px);
    width: calc(var(--tw-scale-x) * 206px);
  }

  .device-google-pixel-6-pro .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%),
      radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 1px)
      rgba(255, 255, 255, 0.05);
    height: calc(var(--tw-scale-x) * 8px);
    left: calc(var(--tw-scale-x) * 7px);
    top: calc(var(--tw-scale-x) * 7px);
    width: calc(var(--tw-scale-x) * 8px);
  }

  .device-google-pixel-6-pro .device-btns {
    background: #b2b2ae;
    height: calc(var(--tw-scale-x) * 102px);
    position: absolute;
    right: 0;
    top: calc(var(--tw-scale-x) * 306px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-google-pixel-6-pro .device-power {
    background: #b2b2ae;
    height: calc(var(--tw-scale-x) * 58px);
    position: absolute;
    right: 0;
    top: calc(var(--tw-scale-x) * 194px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-google-pixel-6-pro.device-gold .device-frame {
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 12px) #ff962e,
      inset 0 calc(var(--tw-scale-x) * 7px) 0 calc(var(--tw-scale-x) * 3px) white,
      inset 0 calc(var(--tw-scale-x) * -6px) 0 calc(var(--tw-scale-x) * 3px) white;
  }

  .device-google-pixel-6-pro.device-gold .device-header {
    background: linear-gradient(to bottom, #ff962e 0, #ffd6ad 30%, #ffd6ad 100%);
  }

  .device-google-pixel-6-pro.device-gold .device-stripe::after {
    background: linear-gradient(to top, #121212, #e07000);
  }

  .device-google-pixel-6-pro.device-gold .device-stripe::before {
    background: #ffd6ad;
  }

  .device-google-pixel-6-pro.device-gold .device-btns {
    background: #ffbd7a;
  }

  .device-google-pixel-6-pro.device-gold .device-power {
    background: #ffbd7a;
  }

  .device-google-pixel-6-pro.device-black .device-frame {
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 12px) black,
      inset 0 calc(var(--tw-scale-x) * 7px) 0 calc(var(--tw-scale-x) * 3px) #646668,
      inset 0 calc(var(--tw-scale-x) * -6px) 0 calc(var(--tw-scale-x) * 3px) #646668;
  }

  .device-google-pixel-6-pro.device-black .device-header {
    background: linear-gradient(to bottom, black 0, #323334 30%, #323334 100%);
  }

  .device-google-pixel-6-pro.device-black .device-stripe::after {
    background: linear-gradient(to top, #121212, black);
  }

  .device-google-pixel-6-pro.device-black .device-stripe::before {
    background: #323334;
  }

  .device-google-pixel-6-pro.device-black .device-btns {
    background: #191a1a;
  }

  .device-google-pixel-6-pro.device-black .device-power {
    background: #191a1a;
  }

  .device-google-pixel-2-xl {
    height: calc(var(--tw-scale-x) * 832px);
    width: calc(var(--tw-scale-x) * 404px);
  }

  .device-google-pixel-2-xl .device-frame {
    background: #121212;
    border-radius: calc(var(--tw-scale-x) * 36px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #cfcfcf,
      inset 0 0 0 calc(var(--tw-scale-x) * 7px) #9c9c9c;
    height: calc(var(--tw-scale-x) * 832px);
    padding: calc(var(--tw-scale-x) * 56px) calc(var(--tw-scale-x) * 22px);
    width: calc(var(--tw-scale-x) * 404px);
  }

  .device-google-pixel-2-xl .device-screen {
    border-radius: calc(var(--tw-scale-x) * 27px);
    height: calc(var(--tw-scale-x) * 720px);
    width: calc(var(--tw-scale-x) * 360px);
  }

  .device-google-pixel-2-xl .device-header {
    height: calc(var(--tw-scale-x) * 832px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -150px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 300px);
  }

  .device-google-pixel-2-xl .device-header::after,
  .device-google-pixel-2-xl .device-header::before {
    background: #333;
    border-radius: calc(var(--tw-scale-x) * 3px);
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -73px);
    margin-top: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 146px);
  }

  .device-google-pixel-2-xl .device-header::after {
    top: calc(var(--tw-scale-x) * 24px);
  }

  .device-google-pixel-2-xl .device-header::before {
    bottom: calc(var(--tw-scale-x) * 28px);
  }

  .device-google-pixel-2-xl .device-sensors {
    background: #333;
    border-radius: calc(var(--tw-scale-x) * 7px);
    height: calc(var(--tw-scale-x) * 14px);
    left: calc(var(--tw-scale-x) * 54px);
    margin-top: calc(var(--tw-scale-x) * -7px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 36px);
    width: calc(var(--tw-scale-x) * 14px);
  }

  .device-google-pixel-2-xl .device-btns {
    background: #cfcfcf;
    height: calc(var(--tw-scale-x) * 102px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -3px);
    top: calc(var(--tw-scale-x) * 306px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-google-pixel-2-xl .device-power {
    background: #cfcfcf;
    height: calc(var(--tw-scale-x) * 58px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -3px);
    top: calc(var(--tw-scale-x) * 194px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-google-pixel {
    height: calc(var(--tw-scale-x) * 744px);
    width: calc(var(--tw-scale-x) * 360px);
  }

  .device-google-pixel .device-frame {
    background: #f7f7f8;
    border-radius: calc(var(--tw-scale-x) * 54px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8cacb,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #e2e3e4,
      inset 0 0 0 calc(var(--tw-scale-x) * 10px) white;
    height: calc(var(--tw-scale-x) * 744px);
    padding: calc(var(--tw-scale-x) * 82px) calc(var(--tw-scale-x) * 18px)
      calc(var(--tw-scale-x) * 86px) calc(var(--tw-scale-x) * 18px);
    width: calc(var(--tw-scale-x) * 360px);
  }

  .device-google-pixel .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #222;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 576px);
    width: calc(var(--tw-scale-x) * 324px);
  }

  .device-google-pixel .device-stripe {
    border-top: calc(var(--tw-scale-x) * 6px) solid rgba(51, 51, 51, 0.15);
    bottom: 0;
    left: calc(var(--tw-scale-x) * 254px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 8px);
  }

  .device-google-pixel .device-stripe::after,
  .device-google-pixel .device-stripe::before {
    border: solid rgba(51, 51, 51, 0.15);
    border-width: 0 calc(var(--tw-scale-x) * 6px);
    content: '';
    height: calc(var(--tw-scale-x) * 10px);
    left: calc(var(--tw-scale-x) * -254px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 360px);
    z-index: 9;
  }

  .device-google-pixel .device-stripe::after {
    top: calc(var(--tw-scale-x) * 60px);
  }

  .device-google-pixel .device-stripe::before {
    bottom: calc(var(--tw-scale-x) * 46px);
  }

  .device-google-pixel .device-sensors {
    background: #ddd;
    border-radius: 2calc (var(--tw-scale-x) * 5px);
    height: calc(var(--tw-scale-x) * 5px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -39px);
    margin-top: -2calc (var(--tw-scale-x) * 5px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 41px);
    width: calc(var(--tw-scale-x) * 78px);
  }

  .device-google-pixel .device-sensors::after,
  .device-google-pixel .device-sensors::before {
    background: #333;
    border-radius: calc(var(--tw-scale-x) * 6px);
    content: '';
    position: absolute;
  }

  .device-google-pixel .device-sensors::after {
    height: calc(var(--tw-scale-x) * 12px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -14px);
    top: 21calc (var(--tw-scale-x) * 5px);
    width: calc(var(--tw-scale-x) * 28px);
  }

  .device-google-pixel .device-sensors::before {
    height: calc(var(--tw-scale-x) * 10px);
    left: calc(var(--tw-scale-x) * -81px);
    margin-top: calc(var(--tw-scale-x) * -5px);
    top: 50%;
    width: calc(var(--tw-scale-x) * 10px);
  }

  .device-google-pixel .device-btns {
    background: #c8cacb;
    height: calc(var(--tw-scale-x) * 102px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -2px);
    top: calc(var(--tw-scale-x) * 298px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-google-pixel .device-power {
    background: #c8cacb;
    height: calc(var(--tw-scale-x) * 50px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -2px);
    top: calc(var(--tw-scale-x) * 184px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-google-pixel.device-black .device-frame {
    background: #211d1c;
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #363635,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #6a6967,
      inset 0 0 0 calc(var(--tw-scale-x) * 10px) #3d3533;
  }

  .device-google-pixel.device-black .device-stripe,
  .device-google-pixel.device-black .device-stripe::after,
  .device-google-pixel.device-black .device-stripe::before {
    border-color: rgba(13, 13, 13, 0.35);
  }

  .device-google-pixel.device-black .device-sensors {
    background: #444;
  }

  .device-google-pixel.device-black .device-sensors::after {
    background: #0d0d0d;
  }

  .device-google-pixel.device-black .device-btns,
  .device-google-pixel.device-black .device-btns::after,
  .device-google-pixel.device-black .device-btns::before {
    background: #363635;
  }

  .device-google-pixel.device-black .device-power {
    background: #363635;
  }

  .device-google-pixel.device-blue .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #2a5aff,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #7695ff,
      inset 0 0 0 calc(var(--tw-scale-x) * 10px) white;
  }

  .device-google-pixel.device-blue .device-btns,
  .device-google-pixel.device-blue .device-btns::after,
  .device-google-pixel.device-blue .device-btns::before {
    background: #2a5aff;
  }

  .device-google-pixel.device-blue .device-power {
    background: #2a5aff;
  }

  .device-galaxy-s8 {
    height: calc(var(--tw-scale-x) * 828px);
    width: calc(var(--tw-scale-x) * 380px);
  }

  .device-galaxy-s8 .device-frame {
    background: #222;
    border: solid #cfcfcf;
    border-radius: calc(var(--tw-scale-x) * 55px);
    border-width: calc(var(--tw-scale-x) * 5px) 0;
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #9c9c9c;
    height: calc(var(--tw-scale-x) * 828px);
    padding: calc(var(--tw-scale-x) * 48px) calc(var(--tw-scale-x) * 10px)
      calc(var(--tw-scale-x) * 40px) calc(var(--tw-scale-x) * 10px);
    width: calc(var(--tw-scale-x) * 380px);
  }

  .device-galaxy-s8 .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #222;
    border-radius: calc(var(--tw-scale-x) * 34px);
    height: calc(var(--tw-scale-x) * 740px);
    width: calc(var(--tw-scale-x) * 360px);
  }

  .device-galaxy-s8 .device-stripe::after,
  .device-galaxy-s8 .device-stripe::before {
    border: solid rgba(51, 51, 51, 0.15);
    border-width: calc(var(--tw-scale-x) * 5px) 0;
    content: '';
    height: calc(var(--tw-scale-x) * 828px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 6px);
    z-index: 9;
  }

  .device-galaxy-s8 .device-stripe::after {
    left: calc(var(--tw-scale-x) * 48px);
  }

  .device-galaxy-s8 .device-stripe::before {
    right: calc(var(--tw-scale-x) * 48px);
  }

  .device-galaxy-s8 .device-sensors {
    background: #666;
    border-radius: calc(var(--tw-scale-x) * 3px);
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -24px);
    margin-top: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 32px);
    width: calc(var(--tw-scale-x) * 48px);
  }

  .device-galaxy-s8 .device-sensors::after,
  .device-galaxy-s8 .device-sensors::before {
    background: #666;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
  }

  .device-galaxy-s8 .device-sensors::after {
    box-shadow: calc(var(--tw-scale-x) * -192px) 0 #333, calc(var(--tw-scale-x) * -174px) 0 #333,
      calc(var(--tw-scale-x) * -240px) 0 #333;
    height: calc(var(--tw-scale-x) * 8px);
    margin-top: calc(var(--tw-scale-x) * -4px);
    right: calc(var(--tw-scale-x) * -90px);
    width: calc(var(--tw-scale-x) * 8px);
  }

  .device-galaxy-s8 .device-sensors::before {
    box-shadow: calc(var(--tw-scale-x) * 186px) 0 #666;
    height: calc(var(--tw-scale-x) * 12px);
    left: calc(var(--tw-scale-x) * -90px);
    margin-top: calc(var(--tw-scale-x) * -6px);
    width: calc(var(--tw-scale-x) * 12px);
  }

  .device-galaxy-s8 .device-btns {
    background: #9c9c9c;
    border-radius: calc(var(--tw-scale-x) * 3px) 0 0 calc(var(--tw-scale-x) * 3px);
    height: calc(var(--tw-scale-x) * 116px);
    left: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 144px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-galaxy-s8 .device-btns::after {
    background: #9c9c9c;
    border-radius: calc(var(--tw-scale-x) * 3px) 0 0 calc(var(--tw-scale-x) * 3px);
    content: '';
    height: calc(var(--tw-scale-x) * 54px);
    left: 0;
    position: absolute;
    top: calc(var(--tw-scale-x) * 164px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-galaxy-s8 .device-power {
    background: #9c9c9c;
    border-radius: 0 calc(var(--tw-scale-x) * 3px) calc(var(--tw-scale-x) * 3px) 0;
    height: calc(var(--tw-scale-x) * 54px);
    position: absolute;
    right: calc(var(--tw-scale-x) * -3px);
    top: calc(var(--tw-scale-x) * 260px);
    width: calc(var(--tw-scale-x) * 3px);
  }

  .device-galaxy-s8.device-blue .device-frame {
    border-color: #a3c5e8;
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #5192d4;
  }

  .device-galaxy-s8.device-blue .device-stripe::after,
  .device-galaxy-s8.device-blue .device-stripe::before {
    border-color: rgba(255, 255, 255, 0.35);
  }

  .device-galaxy-s8.device-blue .device-btns,
  .device-galaxy-s8.device-blue .device-btns::after {
    background: #5192d4;
  }

  .device-galaxy-s8.device-blue .device-power {
    background: #5192d4;
  }

  .device-macbook-pro {
    height: calc(var(--tw-scale-x) * 434px);
    width: calc(var(--tw-scale-x) * 740px);
  }

  .device-macbook-pro .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 20px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8cacb;
    height: calc(var(--tw-scale-x) * 418px);
    margin: 0 auto;
    padding: calc(var(--tw-scale-x) * 9px) calc(var(--tw-scale-x) * 9px)
      calc(var(--tw-scale-x) * 23px) calc(var(--tw-scale-x) * 9px);
    position: relative;
    width: calc(var(--tw-scale-x) * 618px);
  }

  .device-macbook-pro .device-frame::after {
    background: linear-gradient(to bottom, #272727, #0d0d0d);
    border-radius: 0 0 calc(var(--tw-scale-x) * 20px) calc(var(--tw-scale-x) * 20px);
    bottom: calc(var(--tw-scale-x) * 2px);
    content: '';
    height: calc(var(--tw-scale-x) * 24px);
    left: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 614px);
  }

  .device-macbook-pro .device-header {
    background: #0d0d0d;
    border-bottom-left-radius: calc(var(--tw-scale-x) * 4px);
    border-bottom-right-radius: calc(var(--tw-scale-x) * 4px);
    height: calc(var(--tw-scale-x) * 12px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -32px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 11px);
    width: calc(var(--tw-scale-x) * 64px);
    z-index: 2;
  }

  .device-macbook-pro .device-header::after,
  .device-macbook-pro .device-header::before {
    content: '';
    height: calc(var(--tw-scale-x) * 4px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 4px);
  }

  .device-macbook-pro .device-header::after {
    background: radial-gradient(
      circle at bottom left,
      transparent 0,
      transparent 75%,
      #0d0d0d 75%,
      #0d0d0d 100%
    );
    left: calc(var(--tw-scale-x) * -4px);
  }

  .device-macbook-pro .device-header::before {
    background: radial-gradient(
      circle at bottom right,
      transparent 0,
      transparent 75%,
      #0d0d0d 75%,
      #0d0d0d 100%
    );
    right: calc(var(--tw-scale-x) * -4px);
  }

  .device-macbook-pro .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 10px) calc(var(--tw-scale-x) * 10px) 0 0;
    height: calc(var(--tw-scale-x) * 375px);
    width: calc(var(--tw-scale-x) * 600px);
  }

  .device-macbook-pro .device-power {
    background: radial-gradient(circle at center, #e2e3e4 85%, #c8cacb 100%);
    border: solid #a0a3a7;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px)
      calc(var(--tw-scale-x) * 12px) calc(var(--tw-scale-x) * 12px);
    border-width: calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 2px) 0
      calc(var(--tw-scale-x) * 2px);
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 8px) 0 #6c7074;
    height: calc(var(--tw-scale-x) * 24px);
    margin-top: calc(var(--tw-scale-x) * -10px);
    position: relative;
    width: calc(var(--tw-scale-x) * 740px);
    z-index: 9;
  }

  .device-macbook-pro .device-power::after {
    background: #e2e3e4;
    border-radius: 0 0 calc(var(--tw-scale-x) * 10px) calc(var(--tw-scale-x) * 10px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) #babdbf;
    content: '';
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -60px);
    position: absolute;
    top: 0;
    width: calc(var(--tw-scale-x) * 120px);
  }

  .device-macbook-pro .device-power::before {
    background: transparent;
    border-radius: 0 0 calc(var(--tw-scale-x) * 3px) calc(var(--tw-scale-x) * 3px);
    bottom: calc(var(--tw-scale-x) * -2px);
    box-shadow: calc(var(--tw-scale-x) * -300px) 0 #272727,
      calc(var(--tw-scale-x) * 300px) 0 #272727;
    content: '';
    height: calc(var(--tw-scale-x) * 2px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -20px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 40px);
  }

  .device-macbook-pro.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #767a7d;
  }

  .device-macbook-pro.device-spacegray .device-power {
    background: radial-gradient(circle at center, #83878a 85%, #767a7d 100%);
    border-color: #454749;
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 8px) 0 #202121;
  }

  .device-macbook-pro.device-spacegray .device-power::after {
    background: #b7babc;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) #6a6d70;
  }

  .device-macbook-pro-2018 {
    height: calc(var(--tw-scale-x) * 444px);
    width: calc(var(--tw-scale-x) * 740px);
  }

  .device-macbook-pro-2018 .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 20px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8cacb;
    height: calc(var(--tw-scale-x) * 428px);
    margin: 0 auto;
    padding: calc(var(--tw-scale-x) * 29px) calc(var(--tw-scale-x) * 19px)
      calc(var(--tw-scale-x) * 39px) calc(var(--tw-scale-x) * 19px);
    position: relative;
    width: calc(var(--tw-scale-x) * 614px);
  }

  .device-macbook-pro-2018 .device-frame::after {
    background: #272727;
    border-radius: 0 0 calc(var(--tw-scale-x) * 20px) calc(var(--tw-scale-x) * 20px);
    bottom: calc(var(--tw-scale-x) * 2px);
    content: '';
    height: calc(var(--tw-scale-x) * 26px);
    left: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 610px);
  }

  .device-macbook-pro-2018 .device-frame::before {
    bottom: calc(var(--tw-scale-x) * 10px);
    color: #c8cacb;
    content: 'MacBook Pro';
    font-size: calc(var(--tw-scale-x) * 12px);
    height: calc(var(--tw-scale-x) * 16px);
    left: 50%;
    line-height: calc(var(--tw-scale-x) * 16px);
    margin-left: calc(var(--tw-scale-x) * -100px);
    position: absolute;
    text-align: center;
    width: calc(var(--tw-scale-x) * 200px);
    z-index: 1;
  }

  .device-macbook-pro-2018 .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 360px);
    width: calc(var(--tw-scale-x) * 576px);
  }

  .device-macbook-pro-2018 .device-power {
    background: #e2e3e4;
    border: solid #d5d6d8;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px) 0 0;
    border-width: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 4px) 0
      calc(var(--tw-scale-x) * 4px);
    height: calc(var(--tw-scale-x) * 14px);
    margin-top: calc(var(--tw-scale-x) * -10px);
    position: relative;
    width: calc(var(--tw-scale-x) * 740px);
    z-index: 9;
  }

  .device-macbook-pro-2018 .device-power::after,
  .device-macbook-pro-2018 .device-power::before {
    content: '';
    position: absolute;
  }

  .device-macbook-pro-2018 .device-power::after {
    background: #d5d6d8;
    border-radius: 0 0 calc(var(--tw-scale-x) * 10px) calc(var(--tw-scale-x) * 10px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) #babdbf;
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -60px);
    top: calc(var(--tw-scale-x) * -2px);
    width: calc(var(--tw-scale-x) * 120px);
  }

  .device-macbook-pro-2018 .device-power::before {
    background: #a0a3a7;
    border-radius: 0 0 calc(var(--tw-scale-x) * 180px) calc(var(--tw-scale-x) * 180px) / 0 0
      calc(var(--tw-scale-x) * 12px) calc(var(--tw-scale-x) * 12px);
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 6px) 0 #474a4d;
    height: calc(var(--tw-scale-x) * 12px);
    left: calc(var(--tw-scale-x) * -4px);
    margin: 0 auto;
    top: calc(var(--tw-scale-x) * 10px);
    width: calc(var(--tw-scale-x) * 740px);
  }

  .device-macbook-pro-2018.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #767a7d;
  }

  .device-macbook-pro-2018.device-spacegray .device-power {
    background: #909496;
    border-color: #767a7d;
  }

  .device-macbook-pro-2018.device-spacegray .device-power::after {
    background: #83878a;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) #6a6d70;
  }

  .device-macbook-pro-2018.device-spacegray .device-power::before {
    background: #515456;
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 6px) 0 black;
  }

  .device-macbook {
    height: calc(var(--tw-scale-x) * 432px);
    width: calc(var(--tw-scale-x) * 740px);
  }

  .device-macbook .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 20px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8cacb;
    height: calc(var(--tw-scale-x) * 428px);
    margin: 0 auto;
    padding: calc(var(--tw-scale-x) * 29px) calc(var(--tw-scale-x) * 19px)
      calc(var(--tw-scale-x) * 39px) calc(var(--tw-scale-x) * 19px);
    position: relative;
    width: calc(var(--tw-scale-x) * 614px);
  }

  .device-macbook .device-frame::after {
    background: #272727;
    border-radius: 0 0 calc(var(--tw-scale-x) * 20px) calc(var(--tw-scale-x) * 20px);
    bottom: calc(var(--tw-scale-x) * 2px);
    content: '';
    height: calc(var(--tw-scale-x) * 26px);
    left: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 610px);
  }

  .device-macbook .device-frame::before {
    bottom: calc(var(--tw-scale-x) * 10px);
    color: #c8cacb;
    content: 'MacBook';
    font-size: calc(var(--tw-scale-x) * 12px);
    height: calc(var(--tw-scale-x) * 16px);
    left: 50%;
    line-height: calc(var(--tw-scale-x) * 16px);
    margin-left: calc(var(--tw-scale-x) * -100px);
    position: absolute;
    text-align: center;
    width: calc(var(--tw-scale-x) * 200px);
    z-index: 1;
  }

  .device-macbook .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 360px);
    width: calc(var(--tw-scale-x) * 576px);
  }

  .device-macbook .device-power {
    background: #e2e3e4;
    border: solid #d5d6d8;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px) 0 0;
    border-width: 0 calc(var(--tw-scale-x) * 4px);
    height: calc(var(--tw-scale-x) * 4px);
    margin-top: calc(var(--tw-scale-x) * -10px);
    position: relative;
    width: calc(var(--tw-scale-x) * 740px);
    z-index: 9;
  }

  .device-macbook .device-power::after,
  .device-macbook .device-power::before {
    content: '';
    position: absolute;
  }

  .device-macbook .device-power::after {
    background: radial-gradient(circle at center, #e2e3e4 0, #e2e3e4 85%, #a0a3a7 100%);
    border: solid #adb0b3;
    border-width: 0 calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 4px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -60px);
    width: calc(var(--tw-scale-x) * 120px);
  }

  .device-macbook .device-power::before {
    background: #a0a3a7;
    border-radius: 0 0 calc(var(--tw-scale-x) * 180px) calc(var(--tw-scale-x) * 180px) / 0 0
      calc(var(--tw-scale-x) * 10px) calc(var(--tw-scale-x) * 10px);
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 6px) 0 #474a4d;
    height: calc(var(--tw-scale-x) * 10px);
    left: calc(var(--tw-scale-x) * -4px);
    margin: 0 auto;
    top: calc(var(--tw-scale-x) * 4px);
    width: calc(var(--tw-scale-x) * 740px);
  }

  .device-macbook.device-gold .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #edccb4;
  }

  .device-macbook.device-gold .device-power {
    background: #f7e8dd;
    border-color: #edccb4;
  }

  .device-macbook.device-gold .device-power::after {
    background: radial-gradient(circle at center, #f7e8dd 0, #f7e8dd 85%, #dfa276 100%);
    border-color: #e4b08a;
  }

  .device-macbook.device-gold .device-power::before {
    background: #edccb4;
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 6px) 0 #83491f;
  }

  .device-macbook.device-rosegold .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #f6a69a;
  }

  .device-macbook.device-rosegold .device-power {
    background: #facfc9;
    border-color: #f6a69a;
  }

  .device-macbook.device-rosegold .device-power::after {
    background: radial-gradient(circle at center, #facfc9 0, #facfc9 85%, #ef6754 100%);
    border-color: #f6a69a;
  }

  .device-macbook.device-rosegold .device-power::before {
    background: #f6a69a;
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 6px) 0 #851b0c;
  }

  .device-macbook.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #767a7d;
  }

  .device-macbook.device-spacegray .device-power {
    background: #909496;
    border-color: #767a7d;
  }

  .device-macbook.device-spacegray .device-power::after {
    background: radial-gradient(circle at center, #909496 0, #909496 85%, #515456 100%);
    border-color: #5d6163;
  }

  .device-macbook.device-spacegray .device-power::before {
    background: #515456;
    box-shadow: inset 0 calc(var(--tw-scale-x) * -2px) calc(var(--tw-scale-x) * 6px) 0 black;
  }

  .device-imac {
    height: calc(var(--tw-scale-x) * 540px);
    width: calc(var(--tw-scale-x) * 640px);
  }

  .device-imac .device-frame {
    background: #edeef0;
    border-radius: calc(var(--tw-scale-x) * 18px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 1px) #d4d5d7;
    height: calc(var(--tw-scale-x) * 440px);
    padding: calc(var(--tw-scale-x) * 16px) calc(var(--tw-scale-x) * 16px)
      calc(var(--tw-scale-x) * 80px) calc(var(--tw-scale-x) * 16px);
    position: relative;
    width: calc(var(--tw-scale-x) * 640px);
  }

  .device-imac .device-frame::after {
    background: #d4d5d7;
    border-radius: 0 0 calc(var(--tw-scale-x) * 18px) calc(var(--tw-scale-x) * 18px);
    bottom: calc(var(--tw-scale-x) * 1px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 18px) 0 #c7c8cb;
    content: '';
    height: calc(var(--tw-scale-x) * 63px);
    left: calc(var(--tw-scale-x) * 1px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 638px);
  }

  .device-imac .device-frame::before {
    background: #050505;
    border-radius: 50%;
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    text-align: center;
    top: calc(var(--tw-scale-x) * 6px);
    width: calc(var(--tw-scale-x) * 6px);
    z-index: 9;
  }

  .device-imac .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 342px);
    width: calc(var(--tw-scale-x) * 608px);
  }

  .device-imac .device-power::after {
    background: radial-gradient(circle at center, #d4d5d7 85%, #9fa1a6 100%);
    border-top: calc(var(--tw-scale-x) * 1px) solid #d4d5d7;
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    margin: 0 auto;
    position: relative;
    width: calc(var(--tw-scale-x) * 152px);
  }

  .device-imac .device-power::before {
    background: linear-gradient(
      to bottom,
      #9fa1a6 0,
      #c7c8cb 40%,
      #c7c8cb 85%,
      white 90%,
      #6b6e74 100%
    );
    content: '';
    height: calc(var(--tw-scale-x) * 92px);
    margin: 0 auto;
    position: relative;
    width: calc(var(--tw-scale-x) * 152px);
  }

  .device-imac .device-home {
    background: transparent;
    border-radius: 0 0 calc(var(--tw-scale-x) * 3px) calc(var(--tw-scale-x) * 3px);
    bottom: 0;
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #d4d5d7, calc(var(--tw-scale-x) * 61px) 0 #d4d5d7;
    height: calc(var(--tw-scale-x) * 2px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -15px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 30px);
  }

  .device-imac.device-blue .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #b4c7da;
  }

  .device-imac.device-blue .device-frame::after {
    background: #b4c7da;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 18px) 0 #a3bad2;
  }

  .device-imac.device-blue .device-power::after {
    background: radial-gradient(circle at center, #b4c7da 85%, #7094b8 100%);
    border-top-color: #b4c7da;
  }

  .device-imac.device-blue .device-power::before {
    background: linear-gradient(
      to bottom,
      #7094b8 0,
      #a3bad2 40%,
      #a3bad2 85%,
      white 90%,
      #406182 100%
    );
  }

  .device-imac.device-blue .device-home {
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #b4c7da, calc(var(--tw-scale-x) * 61px) 0 #b4c7da;
  }

  .device-imac.device-green .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #bbd0c8;
  }

  .device-imac.device-green .device-frame::after {
    background: #bbd0c8;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 18px) 0 #acc6bc;
  }

  .device-imac.device-green .device-power::after {
    background: radial-gradient(circle at center, #bbd0c8 85%, #7fa697 100%);
    border-top-color: #bbd0c8;
  }

  .device-imac.device-green .device-power::before {
    background: linear-gradient(
      to bottom,
      #7fa697 0,
      #acc6bc 40%,
      #acc6bc 85%,
      white 90%,
      #4e7164 100%
    );
  }

  .device-imac.device-green .device-home {
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #bbd0c8, calc(var(--tw-scale-x) * 61px) 0 #bbd0c8;
  }

  .device-imac.device-pink .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #edccc6;
  }

  .device-imac.device-pink .device-frame::after {
    background: #edccc6;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 18px) 0 #e7bbb3;
  }

  .device-imac.device-pink .device-power::after {
    background: radial-gradient(circle at center, #edccc6 85%, #d58778 100%);
    border-top-color: #edccc6;
  }

  .device-imac.device-pink .device-power::before {
    background: linear-gradient(
      to bottom,
      #d58778 0,
      #e7bbb3 40%,
      #e7bbb3 85%,
      white 90%,
      #b04a37 100%
    );
  }

  .device-imac.device-pink .device-home {
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #edccc6, calc(var(--tw-scale-x) * 61px) 0 #edccc6;
  }

  .device-imac.device-yellow .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #f4d595;
  }

  .device-imac.device-yellow .device-frame::after {
    background: #f4d595;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 18px) 0 #f2cc7e;
  }

  .device-imac.device-yellow .device-power::after {
    background: radial-gradient(circle at center, #f4d595 85%, #eab039 100%);
    border-top-color: #f4d595;
  }

  .device-imac.device-yellow .device-power::before {
    background: linear-gradient(
      to bottom,
      #eab039 0,
      #f2cc7e 40%,
      #f2cc7e 85%,
      white 90%,
      #ab7912 100%
    );
  }

  .device-imac.device-yellow .device-home {
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #f4d595, calc(var(--tw-scale-x) * 61px) 0 #f4d595;
  }

  .device-imac.device-orange .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #e9b5a0;
  }

  .device-imac.device-orange .device-frame::after {
    background: #e9b5a0;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 18px) 0 #e4a58b;
  }

  .device-imac.device-orange .device-power::after {
    background: radial-gradient(circle at center, #e9b5a0 85%, #d6744d 100%);
    border-top-color: #e9b5a0;
  }

  .device-imac.device-orange .device-power::before {
    background: linear-gradient(
      to bottom,
      #d6744d 0,
      #e4a58b 40%,
      #e4a58b 85%,
      white 90%,
      #994524 100%
    );
  }

  .device-imac.device-orange .device-home {
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #e9b5a0, calc(var(--tw-scale-x) * 61px) 0 #e9b5a0;
  }

  .device-imac.device-purple .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c4c4e5;
  }

  .device-imac.device-purple .device-frame::after {
    background: #c4c4e5;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 18px) 0 #b2b2dd;
  }

  .device-imac.device-purple .device-power::after {
    background: radial-gradient(circle at center, #c4c4e5 85%, #7d7dc6 100%);
    border-top-color: #c4c4e5;
  }

  .device-imac.device-purple .device-power::before {
    background: linear-gradient(
      to bottom,
      #7d7dc6 0,
      #b2b2dd 40%,
      #b2b2dd 85%,
      white 90%,
      #449 100%
    );
  }

  .device-imac.device-purple .device-home {
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #c4c4e5, calc(var(--tw-scale-x) * 61px) 0 #c4c4e5;
  }

  .device-imac-pro {
    height: calc(var(--tw-scale-x) * 484px);
    width: calc(var(--tw-scale-x) * 624px);
  }

  .device-imac-pro .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 18px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #080808;
    height: calc(var(--tw-scale-x) * 428px);
    padding: calc(var(--tw-scale-x) * 24px) calc(var(--tw-scale-x) * 24px)
      calc(var(--tw-scale-x) * 80px) calc(var(--tw-scale-x) * 24px);
    position: relative;
    width: calc(var(--tw-scale-x) * 624px);
  }

  .device-imac-pro .device-frame::after {
    background: #2f2e33;
    border-radius: 0 0 calc(var(--tw-scale-x) * 18px) calc(var(--tw-scale-x) * 18px);
    bottom: calc(var(--tw-scale-x) * 2px);
    content: '';
    height: calc(var(--tw-scale-x) * 54px);
    left: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 620px);
  }

  .device-imac-pro .device-frame::before {
    bottom: calc(var(--tw-scale-x) * 15px);
    color: #0d0d0d;
    content: '';
    font-size: calc(var(--tw-scale-x) * 24px);
    height: calc(var(--tw-scale-x) * 24px);
    left: 50%;
    line-height: calc(var(--tw-scale-x) * 24px);
    margin-left: calc(var(--tw-scale-x) * -100px);
    position: absolute;
    text-align: center;
    width: calc(var(--tw-scale-x) * 200px);
    z-index: 9;
  }

  .device-imac-pro .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 324px);
    width: calc(var(--tw-scale-x) * 576px);
  }

  .device-imac-pro .device-power::after,
  .device-imac-pro .device-power::before {
    content: '';
  }

  .device-imac-pro .device-power::after {
    background: #222225;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 6px);
    margin: 0 auto;
    position: relative;
    width: calc(var(--tw-scale-x) * 180px);
  }

  .device-imac-pro .device-power::before {
    border: solid transparent;
    border-bottom-color: #333;
    border-width: 0 calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 50px)
      calc(var(--tw-scale-x) * 8px);
    height: calc(var(--tw-scale-x) * 50px);
    margin: 0 auto;
    position: relative;
    width: calc(var(--tw-scale-x) * 130px);
  }

  .device-surface-book {
    height: calc(var(--tw-scale-x) * 424px);
    width: calc(var(--tw-scale-x) * 728px);
  }

  .device-surface-book .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 12px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8c8c8;
    height: calc(var(--tw-scale-x) * 408px);
    margin: 0 auto;
    padding: calc(var(--tw-scale-x) * 24px) calc(var(--tw-scale-x) * 22px);
    position: relative;
    width: calc(var(--tw-scale-x) * 584px);
  }

  .device-surface-book .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 360px);
    width: calc(var(--tw-scale-x) * 540px);
  }

  .device-surface-book .device-btns::after,
  .device-surface-book .device-btns::before {
    background: #c8c8c8;
    content: '';
    height: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    top: calc(var(--tw-scale-x) * -2px);
  }

  .device-surface-book .device-btns::after {
    left: calc(var(--tw-scale-x) * 122px);
    width: calc(var(--tw-scale-x) * 20px);
  }

  .device-surface-book .device-btns::before {
    left: calc(var(--tw-scale-x) * 168px);
    width: calc(var(--tw-scale-x) * 44px);
  }

  .device-surface-book .device-power {
    background: linear-gradient(to bottom, #eee, #c8c8c8);
    border: solid #c8c8c8;
    border-radius: calc(var(--tw-scale-x) * 2px);
    border-width: 0 calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 16px);
    margin-top: calc(var(--tw-scale-x) * 4px);
    position: relative;
    width: calc(var(--tw-scale-x) * 728px);
  }

  .device-surface-book .device-power::after,
  .device-surface-book .device-power::before {
    content: '';
    position: absolute;
  }

  .device-surface-book .device-power::after {
    background: radial-gradient(circle at center, #eee 0, #eee 95%, #a2a2a2 100%);
    border-radius: 0 0 calc(var(--tw-scale-x) * 6px) calc(var(--tw-scale-x) * 6px);
    height: calc(var(--tw-scale-x) * 8px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -125px);
    top: 0;
    width: calc(var(--tw-scale-x) * 250px);
    z-index: 1;
  }

  .device-surface-book .device-power::before {
    background: linear-gradient(to bottom, #eee, #c8c8c8);
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px) 0 0;
    bottom: calc(var(--tw-scale-x) * 16px);
    height: calc(var(--tw-scale-x) * 8px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -292px);
    width: calc(var(--tw-scale-x) * 584px);
  }

  .device-surface-studio {
    height: calc(var(--tw-scale-x) * 506px);
    width: calc(var(--tw-scale-x) * 640px);
  }

  .device-surface-studio .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 10px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) black;
    height: calc(var(--tw-scale-x) * 440px);
    padding: calc(var(--tw-scale-x) * 20px);
    width: calc(var(--tw-scale-x) * 640px);
  }

  .device-surface-studio .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 400px);
    width: calc(var(--tw-scale-x) * 600px);
  }

  .device-surface-studio .device-stripe {
    background: #444;
    border-radius: 0 0 calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px);
    bottom: 0;
    height: calc(var(--tw-scale-x) * 4px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -117px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 234px);
  }

  .device-surface-studio .device-stripe::after,
  .device-surface-studio .device-stripe::before {
    content: '';
    left: 50%;
    position: absolute;
    top: calc(var(--tw-scale-x) * -75px);
  }

  .device-surface-studio .device-stripe::after {
    border: calc(var(--tw-scale-x) * 1px) solid #e2e3e4;
    border-radius: 0 0 calc(var(--tw-scale-x) * 18px) calc(var(--tw-scale-x) * 18px);
    border-top: 0;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 1px) #c8cacb,
      inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) #e2e3e4,
      inset 0 0 0 calc(var(--tw-scale-x) * 8px) #c8cacb;
    height: calc(var(--tw-scale-x) * 60px);
    margin-left: calc(var(--tw-scale-x) * -140px);
    width: calc(var(--tw-scale-x) * 280px);
    z-index: -1;
  }

  .device-surface-studio .device-stripe::before {
    border: calc(var(--tw-scale-x) * 15px) solid #e2e3e4;
    border-radius: 0 0 calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px);
    border-top: 0;
    height: calc(var(--tw-scale-x) * 70px);
    margin-left: calc(var(--tw-scale-x) * -150px);
    width: calc(var(--tw-scale-x) * 300px);
    z-index: -2;
  }

  .device-surface-studio .device-power {
    background: radial-gradient(circle at center, #e2e3e4 85%, #c8cacb 100%);
    border-radius: 0 0 calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 32px);
    margin: calc(var(--tw-scale-x) * 30px) auto 0 auto;
    position: relative;
    width: calc(var(--tw-scale-x) * 250px);
  }

  .device-surface-studio .device-power::after {
    background: #babdbf;
    content: '';
    height: calc(var(--tw-scale-x) * 1px);
    left: 0;
    position: absolute;
    top: calc(var(--tw-scale-x) * 4px);
    width: calc(var(--tw-scale-x) * 250px);
  }

  .device-ipad-pro {
    height: calc(var(--tw-scale-x) * 778px);
    width: calc(var(--tw-scale-x) * 560px);
  }

  .device-ipad-pro .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 36px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 1px) #babdbf,
      inset 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 3px) #e2e3e4;
    height: calc(var(--tw-scale-x) * 778px);
    padding: calc(var(--tw-scale-x) * 27px);
    width: calc(var(--tw-scale-x) * 560px);
  }

  .device-ipad-pro .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 11px);
    height: calc(var(--tw-scale-x) * 724px);
    width: calc(var(--tw-scale-x) * 506px);
  }

  .device-ipad-pro .device-btns::after,
  .device-ipad-pro .device-btns::before {
    background: #babdbf;
    content: '';
    position: absolute;
  }

  .device-ipad-pro .device-btns::after {
    height: calc(var(--tw-scale-x) * 2px);
    right: calc(var(--tw-scale-x) * 40px);
    top: calc(var(--tw-scale-x) * -2px);
    width: calc(var(--tw-scale-x) * 36px);
  }

  .device-ipad-pro .device-btns::before {
    box-shadow: 0 calc(var(--tw-scale-x) * 37px) #babdbf;
    height: calc(var(--tw-scale-x) * 32px);
    right: calc(var(--tw-scale-x) * -2px);
    top: calc(var(--tw-scale-x) * 63px);
    width: calc(var(--tw-scale-x) * 2px);
  }

  .device-ipad-pro .device-sensors::after,
  .device-ipad-pro .device-sensors::before {
    content: '';
    position: absolute;
  }

  .device-ipad-pro .device-sensors::after {
    background: #1a1a1a;
    border-radius: calc(var(--tw-scale-x) * 17px);
    box-shadow: calc(var(--tw-scale-x) * -20px) 0 #1a1a1a, calc(var(--tw-scale-x) * 70px) 0 #1a1a1a;
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -30px);
    top: calc(var(--tw-scale-x) * 12px);
    width: calc(var(--tw-scale-x) * 10px);
  }

  .device-ipad-pro .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%),
      radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 1px)
      rgba(255, 255, 255, 0.05);
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -3px);
    top: calc(var(--tw-scale-x) * 14px);
    width: calc(var(--tw-scale-x) * 6px);
  }

  .device-ipad-pro.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 1px) #6a6d70,
      inset 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 3px) #83878a;
  }

  .device-ipad-pro.device-spacegray .device-btns::after,
  .device-ipad-pro.device-spacegray .device-btns::before {
    background: #6a6d70;
  }

  .device-ipad-pro.device-spacegray .device-btns::before {
    box-shadow: 0 calc(var(--tw-scale-x) * 37px) #6a6d70;
  }

  .device-ipad-pro-2017 {
    height: calc(var(--tw-scale-x) * 804px);
    width: calc(var(--tw-scale-x) * 560px);
  }

  .device-ipad-pro-2017 .device-frame {
    background: #fff;
    border-radius: calc(var(--tw-scale-x) * 38px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8cacb,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #e2e3e4;
    height: calc(var(--tw-scale-x) * 804px);
    padding: calc(var(--tw-scale-x) * 62px) calc(var(--tw-scale-x) * 25px);
    width: calc(var(--tw-scale-x) * 560px);
  }

  .device-ipad-pro-2017 .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #222;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 680px);
    width: calc(var(--tw-scale-x) * 510px);
  }

  .device-ipad-pro-2017 .device-home {
    border: calc(var(--tw-scale-x) * 2px) solid #c8cacb;
    border-radius: 50%;
    bottom: calc(var(--tw-scale-x) * 17px);
    height: calc(var(--tw-scale-x) * 34px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -17px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 34px);
  }

  .device-ipad-pro-2017 .device-sensors {
    background: #666;
    border-radius: 50%;
    height: calc(var(--tw-scale-x) * 10px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -5px);
    margin-top: calc(var(--tw-scale-x) * -5px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 34px);
    width: calc(var(--tw-scale-x) * 10px);
  }

  .device-ipad-pro-2017.device-gold .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #e4b08a,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #f7e8dd;
  }

  .device-ipad-pro-2017.device-gold .device-header {
    border-color: #e4b08a;
  }

  .device-ipad-pro-2017.device-rosegold .device-frame {
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #f6a69a,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #facfc9;
  }

  .device-ipad-pro-2017.device-rosegold .device-home {
    border-color: #f6a69a;
  }

  .device-ipad-pro-2017.device-spacegray .device-frame {
    background: #222;
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #818187,
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #9b9ba0;
  }

  .device-ipad-pro-2017.device-spacegray .device-home {
    border-color: #818187;
  }

  .device-surface-pro-2017 {
    height: calc(var(--tw-scale-x) * 394px);
    width: calc(var(--tw-scale-x) * 561px);
  }

  .device-surface-pro-2017 .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 10px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #c8c8c8;
    height: calc(var(--tw-scale-x) * 394px);
    margin: 0 auto;
    padding: calc(var(--tw-scale-x) * 26px) calc(var(--tw-scale-x) * 24px);
    width: calc(var(--tw-scale-x) * 561px);
  }

  .device-surface-pro-2017 .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 342px);
    width: calc(var(--tw-scale-x) * 513px);
  }

  .device-surface-pro-2017 .device-btns::after,
  .device-surface-pro-2017 .device-btns::before {
    background: #c8c8c8;
    content: '';
    height: calc(var(--tw-scale-x) * 2px);
    position: absolute;
    top: calc(var(--tw-scale-x) * -2px);
  }

  .device-surface-pro-2017 .device-btns::after {
    left: calc(var(--tw-scale-x) * 48px);
    width: calc(var(--tw-scale-x) * 26px);
  }

  .device-surface-pro-2017 .device-btns::before {
    left: calc(var(--tw-scale-x) * 94px);
    width: calc(var(--tw-scale-x) * 48px);
  }

  .device-surface-pro-2017 .device-sensors {
    background: #333;
    border-radius: 50%;
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -3px);
    margin-top: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 14px);
    width: calc(var(--tw-scale-x) * 6px);
  }

  .device-apple-watch-ultra {
    height: calc(var(--tw-scale-x) * 380px);
    width: calc(var(--tw-scale-x) * 360px);
  }

  .device-apple-watch-ultra .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 92px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 12px) calc(var(--tw-scale-x) * 1px)
        rgba(13, 13, 13, 0.75),
      inset 0 0 0 calc(var(--tw-scale-x) * 6px) #d6ccc2,
      inset 0 0 0 calc(var(--tw-scale-x) * 12px) #d6ccc2;
    height: calc(var(--tw-scale-x) * 380px);
    margin: 0 calc(var(--tw-scale-x) * 20px);
    padding: calc(var(--tw-scale-x) * 38px);
    position: relative;
    width: calc(var(--tw-scale-x) * 320px);
  }

  .device-apple-watch-ultra .device-frame::before {
    border: calc(var(--tw-scale-x) * 1px) solid #f5f2f0;
    border-radius: calc(var(--tw-scale-x) * 80px);
    box-shadow: 0 0 calc(var(--tw-scale-x) * 6px) rgba(13, 13, 13, 0.2),
      inset 0 0 calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 1px) #f5f2f0,
      inset 0 0 0 calc(var(--tw-scale-x) * 10px) #d6ccc2;
    content: '';
    height: calc(var(--tw-scale-x) * 356px);
    left: calc(var(--tw-scale-x) * 12px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 12px);
    width: calc(var(--tw-scale-x) * 296px);
  }

  .device-apple-watch-ultra .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 62px);
    height: calc(var(--tw-scale-x) * 304px);
    width: calc(var(--tw-scale-x) * 244px);
  }

  .device-apple-watch-ultra .device-header {
    background: radial-gradient(circle at center, #d6ccc2 50%, #ebe6e1 85%, #a38c76 100%);
    border-radius: calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 4px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 4px) / calc(var(--tw-scale-x) * 8px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 8px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 16px) calc(var(--tw-scale-x) * 1px)
        rgba(13, 13, 13, 0.5),
      calc(var(--tw-scale-x) * -8px) 0 calc(var(--tw-scale-x) * 4px) rgba(13, 13, 13, 0.2),
      inset calc(var(--tw-scale-x) * 4px) 0 calc(var(--tw-scale-x) * 4px) rgba(13, 13, 13, 0.2);
    height: calc(var(--tw-scale-x) * 214px);
    margin-top: calc(var(--tw-scale-x) * -107px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 4px);
    top: 50%;
    width: calc(var(--tw-scale-x) * 18px);
    z-index: 1;
  }

  .device-apple-watch-ultra .device-header::before {
    border-radius: calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 4px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 8px) / calc(var(--tw-scale-x) * 32px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 32px);
    box-shadow: calc(var(--tw-scale-x) * -10px) 0 calc(var(--tw-scale-x) * 8px)
      rgba(13, 13, 13, 0.2);
    content: '';
    height: calc(var(--tw-scale-x) * 194px);
    margin-top: calc(var(--tw-scale-x) * -97px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 8px);
    top: 50%;
    width: calc(var(--tw-scale-x) * 12px);
  }

  .device-apple-watch-ultra .device-btns {
    background: #d6ccc2;
    border-left: calc(var(--tw-scale-x) * 1px) solid #4c4033;
    border-radius: calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 6px)
      calc(var(--tw-scale-x) * 6px) calc(var(--tw-scale-x) * 8px) / calc(var(--tw-scale-x) * 20px)
      calc(var(--tw-scale-x) * 6px) calc(var(--tw-scale-x) * 6px) calc(var(--tw-scale-x) * 20px);
    box-shadow: inset calc(var(--tw-scale-x) * 8px) 0 calc(var(--tw-scale-x) * 8px) 0 #5c4d3e,
      inset calc(var(--tw-scale-x) * -2px) 0 calc(var(--tw-scale-x) * 6px) #a38c76;
    height: calc(var(--tw-scale-x) * 72px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 1px);
    top: calc(var(--tw-scale-x) * 108px);
    width: calc(var(--tw-scale-x) * 24px);
    z-index: 9;
  }

  .device-apple-watch-ultra .device-btns::after {
    background: #d6ccc2;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 4px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) / calc(var(--tw-scale-x) * 20px)
      calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 20px);
    box-shadow: inset calc(var(--tw-scale-x) * -2px) 0 calc(var(--tw-scale-x) * 2px) 0 #6b5948,
      inset calc(var(--tw-scale-x) * -6px) 0 calc(var(--tw-scale-x) * 18px) #a38c76;
    content: '';
    height: calc(var(--tw-scale-x) * 78px);
    position: absolute;
    right: 0;
    top: calc(var(--tw-scale-x) * -4px);
    width: calc(var(--tw-scale-x) * 6px);
  }

  .device-apple-watch-ultra .device-btns::before {
    background: #d6ccc2;
    border-radius: 20%;
    box-shadow: 0 calc(var(--tw-scale-x) * -30px) rgba(163, 140, 118, 0.5),
      0 calc(var(--tw-scale-x) * -27px) #d6ccc2, 0 calc(var(--tw-scale-x) * -25px) #89735c,
      0 calc(var(--tw-scale-x) * -21px) rgba(163, 140, 118, 0.5),
      0 calc(var(--tw-scale-x) * -18px) #d6ccc2, 0 calc(var(--tw-scale-x) * -16px) #89735c,
      0 calc(var(--tw-scale-x) * -12px) rgba(163, 140, 118, 0.5),
      0 calc(var(--tw-scale-x) * -9px) #d6ccc2, 0 calc(var(--tw-scale-x) * -7px) #89735c,
      0 calc(var(--tw-scale-x) * -3px) rgba(163, 140, 118, 0.5), 0 0 #d6ccc2,
      0 calc(var(--tw-scale-x) * 2px) #89735c,
      0 calc(var(--tw-scale-x) * 6px) rgba(163, 140, 118, 0.5),
      0 calc(var(--tw-scale-x) * 9px) #d6ccc2, 0 calc(var(--tw-scale-x) * 11px) #89735c,
      0 calc(var(--tw-scale-x) * 15px) rgba(163, 140, 118, 0.5),
      0 calc(var(--tw-scale-x) * 18px) #d6ccc2, 0 calc(var(--tw-scale-x) * 20px) #89735c,
      0 calc(var(--tw-scale-x) * 24px) rgba(163, 140, 118, 0.5),
      0 calc(var(--tw-scale-x) * 27px) #d6ccc2, 0 calc(var(--tw-scale-x) * 29px) #89735c;
    content: '';
    height: calc(var(--tw-scale-x) * 3px);
    margin-top: calc(var(--tw-scale-x) * -2px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 2px);
    top: 50%;
    width: calc(var(--tw-scale-x) * 16px);
    z-index: 9;
  }

  .device-apple-watch-ultra .device-stripe {
    background: #e0d9d1;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 8px)
      calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 2px);
    box-shadow: 0 calc(var(--tw-scale-x) * 14px) 0 #d6ccc2,
      0 calc(var(--tw-scale-x) * 28px) 0 #d6ccc2;
    height: calc(var(--tw-scale-x) * 10px);
    left: calc(var(--tw-scale-x) * 19px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 98px);
    width: calc(var(--tw-scale-x) * 4px);
    z-index: 1;
  }

  .device-apple-watch-ultra .device-power {
    background: #d6ccc2;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 4px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) / calc(var(--tw-scale-x) * 2px)
      calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 2px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 1px) #a38c76;
    height: calc(var(--tw-scale-x) * 72px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 1px);
    top: calc(var(--tw-scale-x) * 212px);
    width: calc(var(--tw-scale-x) * 4px);
  }

  .device-apple-watch-ultra .device-home {
    background: #f18f42;
    border: calc(var(--tw-scale-x) * 1px) solid #a7500c;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 4px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) / calc(var(--tw-scale-x) * 2px)
      calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 2px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 1px) calc(var(--tw-scale-x) * 1px) #ef812a;
    height: calc(var(--tw-scale-x) * 106px);
    left: calc(var(--tw-scale-x) * 19px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 162px);
    width: calc(var(--tw-scale-x) * 4px);
    z-index: 1;
  }

  .device-apple-watch-s8 {
    height: calc(var(--tw-scale-x) * 380px);
    width: calc(var(--tw-scale-x) * 360px);
  }

  .device-apple-watch-s8 .device-frame {
    background: #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 92px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 24px) calc(var(--tw-scale-x) * 1px) #0d0d0d,
      inset 0 0 0 calc(var(--tw-scale-x) * 12px) #606c78;
    height: calc(var(--tw-scale-x) * 380px);
    margin: 0 calc(var(--tw-scale-x) * 20px);
    padding: calc(var(--tw-scale-x) * 28px) calc(var(--tw-scale-x) * 26px);
    position: relative;
    width: calc(var(--tw-scale-x) * 320px);
  }

  .device-apple-watch-s8 .device-frame::before {
    border: calc(var(--tw-scale-x) * 1px) solid #0d0d0d;
    border-radius: calc(var(--tw-scale-x) * 80px);
    box-shadow: 0 0 calc(var(--tw-scale-x) * 12px) rgba(255, 255, 255, 0.5),
      inset 0 0 calc(var(--tw-scale-x) * 12px) calc(var(--tw-scale-x) * 2px)
        rgba(255, 255, 255, 0.75);
    content: '';
    height: calc(var(--tw-scale-x) * 356px);
    left: calc(var(--tw-scale-x) * 12px);
    position: absolute;
    top: calc(var(--tw-scale-x) * 12px);
    width: calc(var(--tw-scale-x) * 298px);
  }

  .device-apple-watch-s8 .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 62px);
    height: calc(var(--tw-scale-x) * 324px);
    width: calc(var(--tw-scale-x) * 268px);
  }

  .device-apple-watch-s8 .device-btns {
    background: #606c78;
    border-left: calc(var(--tw-scale-x) * 1px) solid black;
    border-radius: calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 6px)
      calc(var(--tw-scale-x) * 6px) calc(var(--tw-scale-x) * 8px) / calc(var(--tw-scale-x) * 20px)
      calc(var(--tw-scale-x) * 6px) calc(var(--tw-scale-x) * 6px) calc(var(--tw-scale-x) * 20px);
    box-shadow: inset calc(var(--tw-scale-x) * 8px) 0 calc(var(--tw-scale-x) * 8px) 0 #1c1f23,
      inset calc(var(--tw-scale-x) * -2px) 0 calc(var(--tw-scale-x) * 6px) #272c31,
      calc(var(--tw-scale-x) * -4px) 0 calc(var(--tw-scale-x) * 8px) rgba(13, 13, 13, 0.25);
    height: calc(var(--tw-scale-x) * 72px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 10px);
    top: calc(var(--tw-scale-x) * 108px);
    width: calc(var(--tw-scale-x) * 18px);
    z-index: 9;
  }

  .device-apple-watch-s8 .device-btns::after {
    background: #272c31;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 4px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) / calc(var(--tw-scale-x) * 20px)
      calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 20px);
    box-shadow: inset calc(var(--tw-scale-x) * -2px) 0 calc(var(--tw-scale-x) * 2px) 0 black,
      inset calc(var(--tw-scale-x) * -6px) 0 calc(var(--tw-scale-x) * 18px) #272c31;
    content: '';
    height: calc(var(--tw-scale-x) * 72px);
    position: absolute;
    right: 0;
    top: 0;
    width: calc(var(--tw-scale-x) * 6px);
  }

  .device-apple-watch-s8 .device-btns::before {
    background: #272c31;
    border-radius: 20%;
    box-shadow: 0 calc(var(--tw-scale-x) * -30px) rgba(62, 70, 77, 0.75),
      0 calc(var(--tw-scale-x) * -27px) #272c31, 0 calc(var(--tw-scale-x) * -25px) black,
      0 calc(var(--tw-scale-x) * -21px) rgba(62, 70, 77, 0.75),
      0 calc(var(--tw-scale-x) * -18px) #272c31, 0 calc(var(--tw-scale-x) * -16px) black,
      0 calc(var(--tw-scale-x) * -12px) rgba(62, 70, 77, 0.75),
      0 calc(var(--tw-scale-x) * -9px) #272c31, 0 calc(var(--tw-scale-x) * -7px) black,
      0 calc(var(--tw-scale-x) * -3px) rgba(62, 70, 77, 0.75), 0 0 #272c31,
      0 calc(var(--tw-scale-x) * 2px) black, 0 calc(var(--tw-scale-x) * 6px) rgba(62, 70, 77, 0.75),
      0 calc(var(--tw-scale-x) * 9px) #272c31, 0 calc(var(--tw-scale-x) * 11px) black,
      0 calc(var(--tw-scale-x) * 15px) rgba(62, 70, 77, 0.75),
      0 calc(var(--tw-scale-x) * 18px) #272c31, 0 calc(var(--tw-scale-x) * 20px) black,
      0 calc(var(--tw-scale-x) * 24px) rgba(62, 70, 77, 0.75),
      0 calc(var(--tw-scale-x) * 27px) #272c31, 0 calc(var(--tw-scale-x) * 29px) black;
    content: '';
    height: calc(var(--tw-scale-x) * 3px);
    margin-top: calc(var(--tw-scale-x) * -2px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 2px);
    top: 50%;
    width: calc(var(--tw-scale-x) * 10px);
    z-index: 9;
  }

  .device-apple-watch-s8 .device-power {
    background: #272c31;
    border-radius: calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 4px)
      calc(var(--tw-scale-x) * 4px) calc(var(--tw-scale-x) * 2px) / calc(var(--tw-scale-x) * 2px)
      calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 2px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 2px) calc(var(--tw-scale-x) * 1px) #101315;
    height: calc(var(--tw-scale-x) * 72px);
    position: absolute;
    right: calc(var(--tw-scale-x) * 18px);
    top: calc(var(--tw-scale-x) * 212px);
    width: calc(var(--tw-scale-x) * 4px);
  }

  .device-homepod {
    height: calc(var(--tw-scale-x) * 395px);
    width: calc(var(--tw-scale-x) * 320px);
  }

  .device-homepod .device-frame {
    background: linear-gradient(
      to right,
      #36373a 0,
      #8d8f95 25%,
      #1d1e20 60%,
      #111112 90%,
      #1d1e20 100%
    );
    border-radius: calc(var(--tw-scale-x) * 80px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #36373a,
      inset 0 0 calc(var(--tw-scale-x) * 40px) calc(var(--tw-scale-x) * 1px) #1d1e20,
      inset 0 calc(var(--tw-scale-x) * 12px) calc(var(--tw-scale-x) * 40px)
        calc(var(--tw-scale-x) * 1px) white,
      inset 0 calc(var(--tw-scale-x) * -24px) calc(var(--tw-scale-x) * 40px)
        calc(var(--tw-scale-x) * 1px) black;
    height: calc(var(--tw-scale-x) * 385px);
    margin: calc(var(--tw-scale-x) * 5px) auto;
    overflow: hidden;
    position: relative;
    width: calc(var(--tw-scale-x) * 320px);
  }

  .device-homepod .device-stripe {
    background: repeating-linear-gradient(
        45deg,
        rgba(141, 143, 149, 0.35) 0,
        rgba(141, 143, 149, 0.35) calc(var(--tw-scale-x) * 2px),
        transparent calc(var(--tw-scale-x) * 2px),
        transparent calc(var(--tw-scale-x) * 6px)
      ),
      repeating-linear-gradient(
        135deg,
        rgba(141, 143, 149, 0.35) 0,
        rgba(141, 143, 149, 0.35) calc(var(--tw-scale-x) * 2px),
        transparent calc(var(--tw-scale-x) * 2px),
        transparent calc(var(--tw-scale-x) * 6px)
      ),
      repeating-linear-gradient(
        45deg,
        transparent 0,
        transparent calc(var(--tw-scale-x) * 2px),
        rgba(29, 30, 32, 0.35) calc(var(--tw-scale-x) * 2px),
        rgba(29, 30, 32, 0.35) calc(var(--tw-scale-x) * 4px),
        transparent calc(var(--tw-scale-x) * 4px),
        transparent calc(var(--tw-scale-x) * 6px)
      ),
      repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent calc(var(--tw-scale-x) * 2px),
        rgba(29, 30, 32, 0.35) calc(var(--tw-scale-x) * 2px),
        rgba(29, 30, 32, 0.35) calc(var(--tw-scale-x) * 4px),
        transparent calc(var(--tw-scale-x) * 4px),
        transparent calc(var(--tw-scale-x) * 6px)
      );
    border-radius: calc(var(--tw-scale-x) * 80px);
    box-shadow: inset 0 0 0 calc(var(--tw-scale-x) * 2px) #36373a,
      inset 0 0 calc(var(--tw-scale-x) * 40px) calc(var(--tw-scale-x) * 1px) #1d1e20,
      inset 0 calc(var(--tw-scale-x) * 12px) calc(var(--tw-scale-x) * 24px)
        calc(var(--tw-scale-x) * 1px) #9b9ca1,
      inset 0 calc(var(--tw-scale-x) * -12px) calc(var(--tw-scale-x) * 24px)
        calc(var(--tw-scale-x) * 1px) #050505;
    height: calc(var(--tw-scale-x) * 385px);
    left: 0;
    overflow: hidden;
    position: absolute;
    top: calc(var(--tw-scale-x) * 5px);
    width: calc(var(--tw-scale-x) * 320px);
    z-index: 9;
  }

  .device-homepod .device-stripe::before {
    top: 0;
    transform: translateY(-34%) perspective(calc(var(--tw-scale-x) * 500px)) rotateX(51deg);
  }

  .device-homepod .device-stripe::after {
    bottom: 0;
    transform: translateY(34%) perspective(calc(var(--tw-scale-x) * 500px)) rotateX(-51deg);
  }

  .device-homepod .device-home::before,
  .device-homepod .device-home::after {
    background: #36373a;
    content: '';
    left: 50%;
    position: absolute;
  }

  .device-homepod .device-home::before {
    border-radius: 50% 50% calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px);
    height: calc(var(--tw-scale-x) * 10px);
    margin-left: calc(var(--tw-scale-x) * -85px);
    top: 0;
    width: calc(var(--tw-scale-x) * 170px);
  }

  .device-homepod .device-home::after {
    border-radius: 0 0 10% 10% / 0 0 calc(var(--tw-scale-x) * 8px) calc(var(--tw-scale-x) * 8px);
    bottom: 0;
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 4px) 0 #111112;
    height: calc(var(--tw-scale-x) * 5px);
    margin-left: calc(var(--tw-scale-x) * -85px);
    width: calc(var(--tw-scale-x) * 170px);
  }

  .device-pro-display-xdr {
    height: calc(var(--tw-scale-x) * 475px);
    width: calc(var(--tw-scale-x) * 640px);
  }

  .device-pro-display-xdr .device-frame {
    background: #151515;
    border-radius: calc(var(--tw-scale-x) * 4px);
    box-shadow: inset 0 0 calc(var(--tw-scale-x) * 2px) #d4d5d7;
    height: calc(var(--tw-scale-x) * 368px);
    padding: calc(var(--tw-scale-x) * 8px);
    position: relative;
    width: calc(var(--tw-scale-x) * 640px);
  }

  .device-pro-display-xdr .device-frame::before {
    background: #050505;
    border-radius: 50%;
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -3px);
    position: absolute;
    text-align: center;
    top: calc(var(--tw-scale-x) * 6px);
    width: calc(var(--tw-scale-x) * 6px);
    z-index: 9;
  }

  .device-pro-display-xdr .device-screen {
    border: calc(var(--tw-scale-x) * 2px) solid #121212;
    border-radius: calc(var(--tw-scale-x) * 2px);
    height: calc(var(--tw-scale-x) * 352px);
    width: calc(var(--tw-scale-x) * 624px);
  }

  .device-pro-display-xdr .device-power::after {
    background: radial-gradient(circle at center, #d4d5d7 85%, #9fa1a6 100%);
    border-top: calc(var(--tw-scale-x) * 1px) solid #d4d5d7;
    content: '';
    height: calc(var(--tw-scale-x) * 6px);
    margin: 0 auto;
    position: relative;
    width: calc(var(--tw-scale-x) * 152px);
  }

  .device-pro-display-xdr .device-power::before {
    background: linear-gradient(
      to bottom,
      #9fa1a6 0,
      #c7c8cb 40%,
      #c7c8cb 85%,
      white 90%,
      #6b6e74 100%
    );
    content: '';
    height: calc(var(--tw-scale-x) * 102px);
    margin: 0 auto;
    position: relative;
    width: calc(var(--tw-scale-x) * 152px);
  }

  .device-pro-display-xdr .device-home {
    background: transparent;
    border-radius: 0 0 calc(var(--tw-scale-x) * 3px) calc(var(--tw-scale-x) * 3px);
    bottom: calc(var(--tw-scale-x) * -2px);
    box-shadow: calc(var(--tw-scale-x) * -61px) 0 #6b6e74, calc(var(--tw-scale-x) * 61px) 0 #6b6e74;
    height: calc(var(--tw-scale-x) * 1px);
    left: 50%;
    margin-left: calc(var(--tw-scale-x) * -15px);
    position: absolute;
    width: calc(var(--tw-scale-x) * 30px);
  }
`

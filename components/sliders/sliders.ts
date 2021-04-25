import { defaultProps } from './constants'

export type SlidersProps = {
  dataSource: {
    value: string
  }[]
}

export const Sliders = (props: SlidersProps = defaultProps) => {
  return `
  <svg width="800px" height="400px" viewBox="0 0 800 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        @keyframes tonext {
          75% {
            left: 0;
          }
          95% {
            left: 100%;
          }
          98% {
            left: 100%;
          }
          99% {
            left: 0;
          }
        }
        
        @keyframes tostart {
          75% {
            left: 0;
          }
          95% {
            left: -${(props.dataSource.length - 1) * 100}%;
          }
          98% {
            left: -${(props.dataSource.length - 1) * 100}%;
          }
          99% {
            left: 0;
          }
        }
        
        @keyframes snap {
          96% {
            scroll-snap-align: center;
          }
          97% {
            scroll-snap-align: none;
          }
          99% {
            scroll-snap-align: none;
          }
          100% {
            scroll-snap-align: center;
          }
        }
        
        * {
          box-sizing: border-box;
          scrollbar-color: transparent transparent; /* thumb and track color */
          scrollbar-width: 0px;
        }
        
        *::-webkit-scrollbar {
          width: 0;
        }
        
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        
        *::-webkit-scrollbar-thumb {
          background: transparent;
          border: none;
        }
        
        * {
          -ms-overflow-style: none;
        }
        
        ol, li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .carousel {
          position: relative;
          padding-top: 75%;
          filter: drop-shadow(0 0 10px #0003);
          perspective: 100px;
        }
        
        .carousel__viewport {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          overflow-x: scroll;
          counter-reset: item;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
        }
        
        .carousel__slide {
          position: relative;
          flex: 0 0 100%;
          width: 100%;
          background-color: #f99;
        }
        
        .carousel__slide:nth-child(even) {
          background-color: #99f;
        }
        
        .carousel__slide:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%,-40%,70px);
          color: #fff;
          font-size: 2em;
        }
        
        .carousel__snapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          scroll-snap-align: center;
        }
        
        .carousel__snapper {
          animation-name: tonext, snap;
          animation-timing-function: ease;
          animation-duration: 4s;
          animation-iteration-count: infinite;
        }
        
        .carousel__slide:last-child .carousel__snapper {
          animation-name: tostart, snap;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      </style>
      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          ${props.dataSource.map(v => {
            return (
              `<li id="carousel__slide1"
                tabindex="0"
                class="carousel__slide">
                <div class="carousel__snapper" />
                <img src="${v.value}" />
              </li>`
            )
          }).join('\n')}
        </ol>
      </section>
    </div>
  </foreignObject>
</svg>
  `
}
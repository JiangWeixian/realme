import { NextApiRequest, NextApiResponse } from 'next'

export const createYearOfProgress = () => {
  return `
  <svg width="560px" height="420px" viewBox="0 0 560 420" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
            left: -200%;
          }
          98% {
            left: -200%;
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
      </style>
      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper">
            <image width="500" height="350" xlink:href="https://www.tutorialspoint.com/videotutorials/images/coding_ground_home.jpg" />
            </div>
          </li>
          <li id="carousel__slide2"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper">
            <image href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" height="200" width="200"/>
            </div>
          </li>
          <li id="carousel__slide3"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper">
            <image href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" height="200" width="200"/>
            </div>
          </li>
        </ol>
      </section>
    </div>
  </foreignObject>
</svg>
  `
}

export default (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const yearOfProgress = createYearOfProgress()
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(yearOfProgress)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
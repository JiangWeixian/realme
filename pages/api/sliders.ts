import { NextApiRequest, NextApiResponse } from 'next'

export const createYearOfProgress = ({ color = 'black', scale = 1 }: { color: string, scale: string | number }) => {
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
          counter-increment: item;
        }
        
        .carousel__slide:nth-child(even) {
          background-color: #99f;
        }
        
        .carousel__slide:before {
          content: counter(item);
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
        
        .carousel::before,
        .carousel::after,
        .carousel__prev,
        .carousel__next {
          position: absolute;
          top: 0;
          margin-top: 37.5%;
          width: 4rem;
          height: 4rem;
          transform: translateY(-50%);
          border-radius: 50%;
          font-size: 0;
          outline: 0;
        }
        
        .carousel::before,
        .carousel__prev {
          left: -1rem;
        }
        
        .carousel::after,
        .carousel__next {
          right: -1rem;
        }
        
        .carousel::before,
        .carousel::after {
          content: '';
          z-index: 1;
          background-color: #333;
          background-size: 1.5rem 1.5rem;
          background-repeat: no-repeat;
          background-position: center center;
          color: #fff;
          font-size: 2.5rem;
          line-height: 4rem;
          text-align: center;
          pointer-events: none;
        }
        
        .carousel::before {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
        }
        
        .carousel::after {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
        }
      
      </style>
      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper">
              <a href="#carousel__slide4"
                class="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2"
                class="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4"
              class="carousel__next">Go to next slide</a>
          </li>
        </ol>
      </section>
    </div>
  </foreignObject>
</svg>
  `
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const yearOfProgress = createYearOfProgress({ color: req.query.color as string, scale: req.query.scale as string })
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(yearOfProgress)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
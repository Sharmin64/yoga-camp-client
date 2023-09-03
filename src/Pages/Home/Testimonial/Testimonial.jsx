import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import {FaQuoteLeft} from "react-icons/fa";

const Testimonial = () => {
  return (
    <div>
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      />
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full flex flex-col justify-center items-center m-24"
        >
          <FaQuoteLeft
            style={{fontSize: "4rem", color: "mediumpurple"}}
          ></FaQuoteLeft>
          <p className="leading-8 sm:break-words text-center text-2xl py-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus alias amet pariatur! Facere dolorum natus sint ex,
            aliquam optio repellat. Similique molestias libero perferendis
            eveniet quos repellat, cum ad maiores.
          </p>
          <h3 className="text-center bottom-0 ms-24 text-3xl items-center text-indigo-500 justify-center">
            Sima Patel
          </h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full flex flex-col justify-center items-center m-24"
        >
          <FaQuoteLeft style={{fontSize: "4rem"}}></FaQuoteLeft>

          <p className="leading-8 text-center text-2xl sm:break-words">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus alias amet pariatur! Facere dolorum natus sint ex,
            aliquam optio repellat. Similique molestias libero perferendis
            eveniet quos repellat, cum ad maiores.
          </p>
          <h3 className="text-center bottom-0 ms-24 text-3xl items-center text-indigo-500 justify-center">
            Lean Paul
          </h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full flex flex-col justify-center items-center m-24"
        >
          <FaQuoteLeft style={{fontSize: "4rem"}}></FaQuoteLeft>

          <p className="leading-8 text-center text-2xl sm:break-words">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus alias amet pariatur! Facere dolorum natus sint ex,
            aliquam optio repellat. Similique molestias libero perferendis
            eveniet quos repellat, cum ad maiores.
          </p>
          <h3 className="text-center bottom-0 ms-24 item-center justify-center text-indigo-500 text-3xl">
            Sima Patel
          </h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full flex flex-col justify-center items-center m-24"
        >
          <FaQuoteLeft style={{fontSize: "4rem"}}></FaQuoteLeft>
          <p className="leading-8 sm:break-words text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus alias amet pariatur! Facere dolorum natus sint ex,
            aliquam optio repellat. Similique molestias libero perferendis
            eveniet quos repellat, cum ad maiores.
          </p>
          <h3 className="text-center text-3xl items-center text-indigo-500  justify-center bottom-0 ms-24">
            Dora Bridges
          </h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full  flex flex-col justify-center items-center m-24"
        >
          <FaQuoteLeft style={{fontSize: "4rem"}}></FaQuoteLeft>

          <p className="leading-8 sm:break-words text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus alias amet pariatur! Facere dolorum natus sint ex,
            aliquam optio repellat. Similique molestias libero perferendis
            eveniet quos repellat, cum ad maiores.
          </p>
          <h3 className="text-center text-3xl items-center text-indigo-500 justify-center bottom-0 ms-24">
            Brad Stevens
          </h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

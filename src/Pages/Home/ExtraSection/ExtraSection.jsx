import React from "react";
import offerImg from "../../../assets/images/offerA-removebg-preview.png";
import offerB from "../../../assets/images/offerD-removebg-preview.png";
import offerC from "../../../assets/images/offerE-removebg-preview.png";
import {motion} from "framer-motion";
import SectionTitle from "../../../components/SectionTitle";
const ExtraSection = () => {
  return (
    <>
      <div className="divider my-10">
        <SectionTitle
          heading={"Best Offer"}
          subHeading={"here are our"}
        ></SectionTitle>
      </div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 sm:w-full sm:mx-auto mt-16 mb-14"
      >
        <div className="card card-compact w-96 bg-[#c0c5ce] shadow-xl hover:scale-110 transition-all">
          <figure>
            <img
              src="https://kodesolution.com/2019/martialz/yoga/wp-content/uploads/sites/12/2019/02/meditation.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Improve Flexibilities</h2>
            <p className="text-center">
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-[#c0c5ce] shadow-xl hover:scale-110 transition-all">
          <figure>
            <img
              src="https://kodesolution.com/2019/martialz/yoga/wp-content/uploads/sites/12/2019/02/martial-arts.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Stretch Body</h2>
            <p className="text-center">
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-[#c0c5ce] shadow-xl hover:scale-110 transition-all">
          <figure>
            <img
              className="bg-[#c0c5ce]"
              src="https://kodesolution.com/2019/martialz/yoga/wp-content/uploads/sites/12/2019/02/belt.png"
              alt="belt"
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Quality Service</h2>
            <p className="text-center">
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-[#c0c5ce] shadow-xl hover:scale-110 transition-all">
          <figure>
            <img
              className="w-24 rounded-full bg-[#c0c5ce]"
              src={offerImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title ml-28">Best Trainers</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-[#c0c5ce] shadow-xl hover:scale-110 transition-all">
          <figure>
            <img className="w-24" src={offerB} alt="" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title ml-28">Amazing Classes</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-[#c0c5ce] shadow-xl hover:scale-110 transition-all">
          <figure>
            <img className="w-24" src={offerC} alt="yoga" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-center ml-28">Healthy Life</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">Book Now</button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ExtraSection;

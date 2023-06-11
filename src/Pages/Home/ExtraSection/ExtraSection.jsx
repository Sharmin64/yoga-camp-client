import React from "react";
import offerImg from "../../../assets/images/offerA.jpeg";
import offerB from "../../../assets/images/offerD.png";
import offerC from "../../../assets/images/offerE.png";

const ExtraSection = () => {
  return (
    <>
      <div className="divider">
        <h3 className="text-3xl font-mono font-bold text-center mb-3">
          |What We Offer|
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 sm:w-full sm:mx-auto lg:mx-auto">
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition duration-150 ease-out hover:ease-in">
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition duration-150 ease-out hover:ease-in">
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition duration-150 ease-out hover:ease-in">
          <figure>
            <img
              src="https://kodesolution.com/2019/martialz/yoga/wp-content/uploads/sites/12/2019/02/belt.png"
              alt="Shoes"
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition duration-150 ease-out hover:ease-in">
          <figure>
            <img className="w-24 rounded-full" src={offerImg} alt="Shoes" />
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition duration-150 ease-out hover:ease-in">
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition duration-150 ease-out hover:ease-in">
          <figure>
            <img className="w-24" src={offerC} alt="Shoes" />
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
      </div>
    </>
  );
};

export default ExtraSection;

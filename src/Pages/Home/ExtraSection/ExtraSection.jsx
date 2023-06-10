import React from "react";

const ExtraSection = () => {
  return (
    <>
      <div className="divider">
        <h3 className="text-3xl font-mono font-bold text-center mb-3">
          |What We Offer|
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 sm:w-full sm:mx-auto">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://kodesolution.com/2019/martialz/yoga/wp-content/uploads/sites/12/2019/02/meditation.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Improve Flexibilities</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://kodesolution.com/2019/martialz/yoga/wp-content/uploads/sites/12/2019/02/martial-arts.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Stretch Body</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://kodesolution.com/2019/martialz/yoga/wp-content/uploads/sites/12/2019/02/belt.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Quality Service</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Best Trainers</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Amazing Classes</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Healthy Life</h2>
            <p>
              Default text for Box Content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraSection;

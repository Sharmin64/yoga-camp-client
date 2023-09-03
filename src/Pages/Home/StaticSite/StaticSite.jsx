import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import instructor from "../../../assets/testimon/portraitU.jpeg";

const StaticSite = () => {
  return (
    <div>
      <SectionTitle heading={"Reviews"} subHeading={"In Our Website"} />

      <div className="container mx-auto py-10">
        <div className="lg:flex">
          {/* Right Div (Placeholder) */}
          <div className="lg:w-1/2 lg:pr-4 mr-4">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Website Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={instructor} />
                    </div>
                  </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">
                  31 tasks remaining
                </div>
              </div>
            </div>
          </div>
          {/* Left Div (Image and Text) */}
          <div className="lg:w-1/2 lg:pl-4 ml-5 bg-slate-200 rounded-lg">
            <img src={instructor} alt="Image" className="rounded-full" />
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos molestias, impedit possimus temporibus dicta et
              explicabo ipsum sequi rerum hic cupiditate! Asperiores laboriosam
              error animi suscipit sed illum officiis illo?
            </p>
          </div>
        </div>
      </div>
      {/*<div className="flex flex-col mx-auto">
        <div className="w-1/2">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Website Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={instructor} />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-violet-300">
          <h1 className="text-4xl font-semibold text-left px-3">
            Why fitness needed?
          </h1>
          <div className="flex">
            <div className="items-center justify-center rounded-full bg-lime-300 mx-auto w-1/2">
              icon
            </div>
            <div className="items-center w-1/2">
              <h3>Fitness group </h3>
              <p>
                I thought about my fitness. I then remembered the team I had
                when I joined yoga with my brother.
              </p>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default StaticSite;

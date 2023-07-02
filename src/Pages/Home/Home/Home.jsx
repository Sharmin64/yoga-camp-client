import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import {Helmet} from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CorePower Yoga || Home</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <PopularInstructor />
      <div className=" w-full ms-4">
        <ExtraSection />
      </div>
    </div>
  );
};

export default Home;

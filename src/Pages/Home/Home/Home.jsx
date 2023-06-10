import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import {Helmet} from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Yoga Summer Camp || Home</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <ExtraSection />
    </div>
  );
};

export default Home;

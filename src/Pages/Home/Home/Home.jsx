import React from "react";

import PopularInstructor from "../PopularInstructor/PopularInstructor";

import ExtraSection from "../ExtraSection/ExtraSection";
import {Helmet} from "react-helmet-async";
import {useNavigation} from "react-router-dom";
import Loader from "../../Shared/Loader";
import PopularClass from "../PopularClasses/PopularClass";

import Banner from "../../../components/Banner/Banner";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-20 lg:px-8 lg:py-10">
      <Helmet>
        <title>Core Power| Home</title>
      </Helmet>
      <Banner />
      <PopularClass />
      <PopularInstructor />
      <div className=" w-full ms-4">
        <ExtraSection />
      </div>
    </div>
  );
};

export default Home;

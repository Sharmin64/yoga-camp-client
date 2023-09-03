import React from "react";
import SectionTitle from "../../../components/SectionTitle";

const AboutSection = () => {
  return (
    <div>
      <SectionTitle
        heading={"About Section"}
        subHeading={"Wanna know about this site?"}
      />
      <div
        className="hero min-h-screen  bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/mvb8wcX/yoga.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">
              This is a yoga website. Click here to add your own text and edit
              me. It is easy. Just click double click me to add your own content
              and make changes to the font. Feel free to drag and drop me
              anywhere you like on your page. I am a great place for you to tell
              a story and let your users know a little more about you. This is a
              great space to write a long text about your company and your
              services. You can use this space to go into a little more detail
              about your company. Talk about your team and what services you
              provide. Tell your visitors the story of how you came up with the
              idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

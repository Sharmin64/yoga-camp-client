import React from "react";
//import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <strong className="footer-title">CorePower Yoga </strong>
          <a className="link link-hover">Classes</a>
          <a className="link link-hover">Instructors</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Camp</span>
          <a className="link link-hover">About Yoga</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Fitness</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Yoga Camp</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <footer
        className="footer items-center mb-16 relative bg-indigo-800 text-white py-4 wavy-border rounded-b-[160px]"
        //style={{borderTop: "150px"}}
      >
        <div
          className="items-center grid-flow-col w-full text-center"
          //style={{borderTop: "150px"}}
        >
          <p className="text-center ml-60 pl-64">
            Copyright © 2023 - All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

//?testing purpose
{
  /*<footer class="relative bg-gray-800 text-white py-4 wavy-border">
  <div class="w-full h-16 bg-gray-800 absolute bottom-0 left-0"></div>
  <div class="w-full h-16 bg-gray-800 absolute bottom-0 right-0"></div>
  <!-- Your footer content goes here -->
</footer>*/
}

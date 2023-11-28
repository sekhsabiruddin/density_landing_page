import React from "react";
import "./Simplestep.css";
import Iphone1 from "../image/iPhone14Pro_1.png";
import Iphone2 from "../image/iPhone14Pro_2.png";
import Iphone3 from "../image/iPhone14Pro_3.png";
import User from "../image/user_icon.png";
import Normal from "../image/normal_icon.png";
import Graph from "../image/graph_icon.png";

const Simplestep = () => {
  return (
    <div className="simplestep-outer">
      <div className="simplestep-inner">
        <div className="left">
          <h1>
            Derivate made simple <br />
            in 3 esay Step
          </h1>
        </div>
        <div className="right">
          <div className="right-box">
            <div>
              <img src={Iphone1} alt="" />
            </div>
            <div className="text-box">
              <img src={User} alt="" />
              <h2>Create A account</h2>
              <p>
                Register and computer <br />
                verification less than 2 miniutes
              </p>
              <button>TRADE NOW</button>
            </div>
          </div>
          <div className="right-box">
            <div>
              <img src={Iphone2} alt="" />
            </div>
            <div className="text-box">
              <img src={Normal} alt="" />
              <h2>Create A account</h2>
              <p>
                Register and computer <br />
                verification less than 2 miniutes
              </p>
              <button>TRADE NOW</button>
            </div>
          </div>
          <div className="right-box">
            <div>
              <img src={Iphone3} alt="" />
            </div>
            <div className="text-box">
              <img src={Graph} alt="" />
              <h2>Create an account</h2>
              <p>
                Register and computer <br />
                verification less than 2 miniutes
              </p>
              <button>TRADE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simplestep;

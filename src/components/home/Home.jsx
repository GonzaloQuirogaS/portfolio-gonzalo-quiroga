import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container grid">
        <div className="home__content grid">
          <div className="svg__polygon">
            <DotLottieReact
              src="https://lottie.host/82737477-c849-44e4-9bb7-14950421d8b5/UVJhYzkt5U.lottie"
              loop
              autoplay
            />
          </div>
          <Social />

          <div className="home__img">
            <DotLottieReact
              src="https://lottie.host/c8384750-a858-4324-a44e-5be8c2c4629a/cZy7VuQTpf.json"
              height={500}
              width={500}
              loop
              autoplay
            />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

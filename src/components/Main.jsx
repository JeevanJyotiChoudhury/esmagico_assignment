import React from "react";
import Banner from "./Banner";
import LargestNetwork from "./LargestNetwork";
import Form from "./Form";
import OwnSession from "./OwnSession";
import LearningSession from "./LearningSession";
import LiveSession from "./LiveSession";
import AboutSpeakin from "./AboutSpeakin";
import Clients from "./Clients";
import RealPeople from "./RealPeople";
import TrendingSpeaker from "./TrendingSpeaker";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Banner />
      <LargestNetwork />
      <OwnSession />
      <LearningSession />
      <LiveSession />
      <RealPeople />
      <Clients />
      <AboutSpeakin />
     <TrendingSpeaker />
      <Footer />
    </div>
  );
};

export default Main;

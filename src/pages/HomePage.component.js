import React from "react";
import HomeHeroModule from "../modules/HomePageModule/HomeHeroModule/HomeHeroModule";
import About from "../modules/HomePageModule/AboutModule/about";

export default function HomePageComponent() {
  return (
    <div>
      <HomeHeroModule />
      <About />
    </div>
  );
}

import React from "react";
import Hero from "../hero/Hero";
import Header from "../header/header";

const Home = ({ movies }) => {
  return <Hero movies={movies} />;
};

export default Home;

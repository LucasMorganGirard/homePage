import React from "react";
import BlockHome from "../components/BlockHome";

const Home = () => {
  return (
    <div className="home">
      <BlockHome className="first" text="HOME" />
      <BlockHome className="second" text="TEST" />
      <BlockHome className="third" text="TZA" />
    </div>
  );
};

export default Home;

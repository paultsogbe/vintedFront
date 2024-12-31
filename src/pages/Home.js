



import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import tear from "../assets/images/tear.svg";
import { Puff } from "react-loader-spinner"; // Import  depuis react-loader-spinner

import "../assets/styles/home.css";

const Home = ({ data, isLoading }) => {
  const navigate = useNavigate();

  return isLoading ? (
    <div className="home-loader">
      <Puff color="#2CB1BA" height={80} width={80} />
    </div>
  ) : (
    <>
      <div className="home-hero-bg-img">
        <img src={tear} alt="forme" className="home-hero-forme" />
        <div>
          <div className="home-hero-ready">
            Prêts à faire du tri dans vos placards ?
            <button
              onClick={() => {
                navigate("/publish");
              }}
            >
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>

      <div className="home-card-wrapper">
        {data.offers &&
          data.offers.map((card, index) => {
            return <Card key={index} data={card} />;
          })}
      </div>
    </>
  );
};

export default Home;



// export NODE_OPTIONS=--openssl-legacy-provider
// npm start

// "scripts": {
//   "start": "NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
//   ...
// }

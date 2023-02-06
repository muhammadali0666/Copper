import React from "react";
import { Card } from "../Cards";
import Carousel from "react-elastic-carousel";
import "./worker.css";

export const Worker = () => {
  return (
    <div className="worker">
      <Carousel>
        <div className="container">
          <div className="worker__inner">
            <Card className="card" />
            <Card className="card" />
            <Card className="card" />
          </div>
        </div>
        <div className="container">
          <div className="worker__inner">
            <Card className="card" />
            <Card className="card" />
            <Card className="card" />
          </div>
        </div>
        <div className="container">
          <div className="worker__inner">
            <Card className="card" />
            <Card className="card" />
            <Card className="card" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

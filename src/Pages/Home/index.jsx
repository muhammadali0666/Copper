import React from "react";
import { Choice } from "../../Components/Choice";
import { Discount } from "../../Components/Discount";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Intro } from "../../Components/Intro";
import { Luchshi } from "../../Components/Luchshi";
import { News } from "../../Components/News";
import { Product } from "../../Components/Product";
import { Rec } from "../../Components/Rec";
import { Worker } from "../../Components/Worker/inedex";

export const Home = () => {
  return (
    <>
      <Header />
      <Product />
      <Luchshi />
      <News />
      <Intro />
      <Rec />
      <Discount />
      <Worker />
      <Choice/>
      <Footer/>
    </>
  );
};
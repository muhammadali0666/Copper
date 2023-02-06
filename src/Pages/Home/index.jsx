import React from 'react'
import {Header} from "../../Components/Header"
import { Luchshi } from '../../Components/Luchshi'
import { News } from '../../Components/News'
import { Product } from '../../Components/Product'

export const Home = () => {
  return (
    <>
      <Header/>
      <Product/>
      <Luchshi/>
      <News/>
    </>
  )
}

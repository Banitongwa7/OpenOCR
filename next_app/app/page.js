"use client";
import React, { useState, useEffect } from "react";
import FormInput from "@/components/FormInput"
import Loader from "@/components/Loader";
import Resultat from "@/components/Resultat";
//import axios from "axios";

export default function Home() {
  const [load, setLoad] = useState(false)
  const [data, setData] = useState({
    image: null,
    text: "",
  })
  const [displayResult, setDisplayResult] = useState(false)



  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(true)
    }, 10000)
    return () => clearInterval(interval)
  }, [displayResult])

  return (
   <>
      {
        displayResult ? (
        load ? (
          <Resultat data={data}/>
        ): (
          <Loader />
        )
        ) : (<FormInput setDisplayResult={setDisplayResult} setData={setData}/>)
      }
   </>
  )
}

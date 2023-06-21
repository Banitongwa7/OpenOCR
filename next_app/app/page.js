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
    
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(true)
    }, 5000)
    setLoad(false)
    return () => {
      clearTimeout(timeout)
    }
  }, [displayResult])

  return (
   <>
      {
        displayResult ? (
          load ? (
            <Resultat data={data} setLoad={setLoad}/>
          ): (
            <Loader />
          )
        ) : (<FormInput setDisplayResult={setDisplayResult} setData={setData}/>)
      }

   </>
  )
}

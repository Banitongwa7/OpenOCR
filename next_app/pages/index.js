"use client";
import FormInput from "@/components/FormInput"
import { useState, useEffect } from "react";
import LoaderStart from "@/components/LoaderStart";

export default function Home() {
  const [load,setLoad] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(true);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
   <>
   {
    load ? (<FormInput/>) : (<LoaderStart/>)
   }
   </>
  )
}

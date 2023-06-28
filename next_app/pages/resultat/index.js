import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Resultat from "@/components/Resultat";

export default function index() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(true);
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <>{load ? <Resultat setLoad={setLoad} /> : <Loader />}</>;
}

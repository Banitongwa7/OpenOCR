import React, { useState, useEffect, useContext } from "react";
import Loader from "@/components/Loader";
import Resultat from "@/components/Resultat";
import Context from "@/context/Context";

export default function index() {
  const {data, setData} = useContext(Context)
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(true);
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <>{load ? <Resultat setLoad={setLoad} data={data} /> : <Loader />}</>;
}

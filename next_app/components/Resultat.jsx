import React, { useEffect, useContext } from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Resultat = ({ setLoad, data}) => {
  const router = useRouter()

  // refresh the page
  const handleRefreshPage = () => {
    setLoad(false)
    router.push("/")
  }

  const notifySuccess = () => {
    toast.success("Felicitations ! Vous avez terminé l'extraction avec succès !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    notifySuccess();
  },[])

  return (
    <>
      <div className="container w-full">
      <div className="flex flex-col rounded-lg bg-neutral-700 md:flex-row w-[80%] m-auto mt-24">
        <div className="flex flex-col justify-center p-6 w-full">
         <img src={data.image} alt="test" className="w-full" />
        </div>
        <div className="flex flex-col justify-start p-6 w-full">
          <h5 className="mb-2 text-xl font-medium text-neutral-50">
            Voici le résultat de l'extraction
          </h5>
          <p className="mb-3 text-sm text-neutral-400 whitespace-pre-line">{data.text}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleRefreshPage}
          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mt-10"
        >
          Essayer encore
        </button>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default Resultat;

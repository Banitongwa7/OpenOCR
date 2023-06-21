"use client";
import React, {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import UrlAPI from "@/utils/UrlAPI";

const FormInput = ({setDisplayResult, setData}) => {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState("")
  const [language, setLanguage] = useState("fra")

  const notifyError = () => {
    toast.error("Une erreur est survenue !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

 

  const notifyErrorFile = () => {
    toast.error("Fichier invalide ! veuillez réessayer avec un autre fichier !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("language", language);

    axios.post(UrlAPI.upload, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((res) => {
      setData({
        image: res.data.image,
        text: res.data.text
      })
      setDisplayResult(true)
    }).catch((err) => {
      if (err.response.data === "Fichier invalide") {
        notifyErrorFile();
      }else{
        notifyError();
      }
    })
  }



  return (
    <>
      <section className="w-[50%] p-6 mx-auto bg-gray-200 rounded-md shadow-xl mt-24">
        <h1 className="text-xl font-bold text-center text-gray-700 capitalize">
          OpenOCR - Free OCR Tool
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-9">
            <div>
              <label className="text-gray-700" htmlFor="titre">
                Titre
              </label>
              <input
                id="titre"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                className="text-gray-700"
                htmlFor="selectLanguage"
              >
                Langue du texte <span className="text-red-500">*</span>
              </label>
              <select
                id="selectLanguage"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) => setLanguage(e.target.value)}
                defaultValue={"fra"}
              >
                <option value="fra">Français - Fr</option>
                <option value="eng">Anglais - En</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-700"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </label>
                    <p className="pl-1 text-gray-700">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-700">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Extraction de texte
            </button>
          </div>
        </form>
      </section>
      <ToastContainer/>
    </>
  );
};

export default FormInput;

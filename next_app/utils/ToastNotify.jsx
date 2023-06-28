import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastNotify({ children }) {
  return (
    <>
    {children}
    <ToastContainer/>
    </>
  )
}


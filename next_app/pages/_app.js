import "./../styles/globals.css";
import DataContextProvider from "@/context/DataContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </>
  );
}

export default MyApp;

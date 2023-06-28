import Context from "./Context"
import { useState } from "react"

export default function DataContextProvider({ children }) {
    const [data, setData] = useState({
        image: null,
        text: "",
    })

  return (
    <Context.Provider value={{ data, setData }}>
      {children}
    </Context.Provider>
  )
}

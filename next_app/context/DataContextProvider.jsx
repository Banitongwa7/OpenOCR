import Context from "./Context"

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

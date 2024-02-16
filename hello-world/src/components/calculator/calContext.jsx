import { useState ,createContext} from "react"

export const CalcContext = createContext()
const CalContext = ({children}) => {
    const [calc, setCalc] = useState({
        sign : "",
        num:0,
        res:0
    })
    const providerValue = {
        calc,setCalc
    }
  return (
    <CalcContext.Provider value={providerValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalContext
import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

const Context = createContext()

export const useGlobalContext = () => {
    return useContext(Context)
}

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <Context.Provider value={{ transactions: state.transactions }}>
            {children}
        </Context.Provider>
    )
}